import { perguntas } from '../data/perguntas'
import { TIPOS_PELE, type NivelConfianca, type Pontuacoes, type Respostas, type ResultadoQuiz } from '../types/quiz'

const pontuacaoInicial = (): Pontuacoes => ({ seca: 0, mista: 0, oleosa: 0, equilibrada: 0 })

export function quizEstaCompleto(respostas: Respostas): boolean {
  return perguntas.every((pergunta) => respostas[pergunta.id] !== undefined)
}

export function calcularPontuacoes(respostas: Respostas): Pontuacoes {
  return perguntas.reduce((pontuacoes, pergunta) => {
    const resposta = respostas[pergunta.id]
    const alternativa = pergunta.alternativas.find((item) => item.id === resposta)

    if (alternativa) pontuacoes[alternativa.tipo] += pergunta.peso
    return pontuacoes
  }, pontuacaoInicial())
}

export function calcularConfianca(diferenca: number): NivelConfianca {
  if (diferenca >= 5) return 'alta'
  if (diferenca >= 3) return 'moderada'
  return 'baixa'
}

export function classificarPerfil(respostas: Respostas): ResultadoQuiz | null {
  if (!quizEstaCompleto(respostas)) return null

  const pontuacoes = calcularPontuacoes(respostas)
  const ordenados = [...TIPOS_PELE].sort((a, b) => pontuacoes[b] - pontuacoes[a])
  const tipoPredominante = ordenados[0]
  const segundoTipo = ordenados[1]

  if (!tipoPredominante || !segundoTipo) return null

  const maiorPontuacao = pontuacoes[tipoPredominante]
  const tiposEmpatados = ordenados.filter((tipo) => pontuacoes[tipo] === maiorPontuacao)
  const diferenca = maiorPontuacao - pontuacoes[segundoTipo]

  return {
    tipoPredominante,
    tiposEmpatados,
    segundoTipo,
    pontuacoes,
    diferenca,
    confianca: calcularConfianca(diferenca),
  }
}
