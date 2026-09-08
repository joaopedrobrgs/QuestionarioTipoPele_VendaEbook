import { RotateCcw, Sparkles } from 'lucide-react'
import { Botao } from '../components/Botao'
import { Layout } from '../components/Layout'
import { conteudoGeral, conteudoTipos, textosConfianca } from '../data/conteudo'
import { TIPOS_PELE, type ResultadoQuiz } from '../types/quiz'
import { OfertaEbook } from './OfertaEbook'

interface ResultadoProps {
  resultado: ResultadoQuiz
  aoRefazer: () => void
  aoClicarEbook: () => void
}

export function Resultado({ resultado, aoRefazer, aoClicarEbook }: ResultadoProps) {
  const { resultado: copy } = conteudoGeral
  const principal = conteudoTipos[resultado.tipoPredominante]
  const secundario = resultado.segundoTipo ? conteudoTipos[resultado.segundoTipo] : null
  const empate = resultado.tiposEmpatados.length > 1
  const nomesEmpatados = resultado.tiposEmpatados.map((tipo) => conteudoTipos[tipo].nome).join(' + ')
  const mensagem = textosConfianca[resultado.confianca]
    .replace('{principal}', principal.nome.toLocaleLowerCase('pt-BR'))
    .replace('{secundario}', secundario?.tendencia ?? '')

  return (
    <Layout>
      <section className="mx-auto max-w-5xl py-8 sm:py-12">
        <div className="rounded-[2.25rem] border border-sand bg-cream p-6 shadow-soft sm:p-10 lg:p-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-mocha"><Sparkles size={16} aria-hidden="true" />{copy.etiqueta}</div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <p className="text-sm font-semibold text-mocha">{copy.titulo}</p>
              <h1 className="mt-2 text-balance font-display text-5xl leading-none tracking-[-0.025em] text-mocha sm:text-7xl">{empate ? nomesEmpatados : principal.nome}</h1>
              <p className="mt-6 text-lg font-semibold leading-relaxed text-mocha">{mensagem}</p>
              <p className="mt-5 leading-relaxed text-mocha">{principal.descricao}</p>
              <p className="mt-6 rounded-2xl border border-taupe/25 bg-cream p-4 text-sm leading-relaxed text-mocha">{copy.aviso}</p>
            </div>
            <aside className="rounded-3xl bg-rose/35 p-6" aria-label={copy.placar}>
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-display text-2xl">{copy.placar}</h2>
                <span className="rounded-full bg-cream px-3 py-1 text-xs font-bold uppercase tracking-wider text-mocha">{resultado.confianca}</span>
              </div>
              <p className="mt-2 text-xs text-mocha">{copy.confianca}</p>
              <div className="mt-7 grid gap-5">
                {TIPOS_PELE.map((tipo) => {
                  const pontos = resultado.pontuacoes[tipo]
                  return (
                    <div key={tipo}>
                      <div className="mb-2 flex justify-between text-sm"><span>{conteudoTipos[tipo].nome}</span><span className="font-bold">{pontos}/22</span></div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-cream"><div className="h-full rounded-full bg-brown" style={{ width: `${(pontos / 22) * 100}%` }} /></div>
                    </div>
                  )
                })}
              </div>
            </aside>
          </div>
        </div>
        <OfertaEbook aoClicar={aoClicarEbook} />
        <div className="mt-8 text-center"><Botao variante="secundario" onClick={aoRefazer}><RotateCcw size={17} aria-hidden="true" />{copy.refazer}</Botao></div>
      </section>
    </Layout>
  )
}
