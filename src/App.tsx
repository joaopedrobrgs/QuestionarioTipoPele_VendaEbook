import { useEffect, useMemo, useState } from 'react'
import { EBOOK_CHECKOUT_URL } from './config/app'
import { perguntas } from './data/perguntas'
import { registrarEvento } from './lib/analytics'
import { classificarPerfil } from './lib/quiz'
import { carregarEstado, limparEstado, salvarEstado, type Tela } from './lib/storage'
import { Landing } from './sections/Landing'
import { Quiz } from './sections/Quiz'
import { Resultado } from './sections/Resultado'
import type { AlternativaId, Respostas } from './types/quiz'

export default function App() {
  const inicial = useMemo(() => carregarEstado(), [])
  const [tela, setTela] = useState<Tela>(inicial.tela)
  const [indice, setIndice] = useState(inicial.indice)
  const [respostas, setRespostas] = useState<Respostas>(inicial.respostas)
  const resultado = useMemo(() => classificarPerfil(respostas), [respostas])

  useEffect(() => {
    salvarEstado({ tela, indice, respostas })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [tela, indice, respostas])

  useEffect(() => {
    if (tela === 'resultado' && resultado) {
      registrarEvento({ nome: 'result_viewed', tipo: resultado.tipoPredominante, confianca: resultado.confianca })
    }
  }, [tela, resultado])

  function iniciar(): void {
    registrarEvento({ nome: 'quiz_started' })
    setTela('quiz')
  }

  function responder(alternativaId: AlternativaId): void {
    const pergunta = perguntas[indice]
    if (!pergunta) return
    setRespostas((atuais) => ({ ...atuais, [pergunta.id]: alternativaId }))
    registrarEvento({ nome: 'question_answered', perguntaId: pergunta.id, alternativaId })
  }

  function avancar(): void {
    const pergunta = perguntas[indice]
    if (!pergunta || !respostas[pergunta.id]) return

    if (indice < perguntas.length - 1) {
      setIndice((atual) => atual + 1)
      return
    }

    if (resultado) {
      registrarEvento({ nome: 'quiz_completed' })
      setTela('resultado')
    }
  }

  function voltar(): void {
    if (indice === 0) {
      setTela('landing')
      return
    }
    setIndice((atual) => atual - 1)
  }

  function refazer(): void {
    limparEstado()
    setRespostas({})
    setIndice(0)
    setTela('landing')
  }

  function clicarEbook(): void {
    registrarEvento({ nome: 'ebook_cta_clicked' })
    if (EBOOK_CHECKOUT_URL !== '#') window.location.assign(EBOOK_CHECKOUT_URL)
  }

  if (tela === 'quiz') {
    return <Quiz indice={indice} resposta={perguntas[indice] ? respostas[perguntas[indice].id] : undefined} aoResponder={responder} aoVoltar={voltar} aoAvancar={avancar} />
  }

  if (tela === 'resultado' && resultado) {
    return <Resultado resultado={resultado} aoRefazer={refazer} aoClicarEbook={clicarEbook} />
  }

  return <Landing aoIniciar={iniciar} />
}
