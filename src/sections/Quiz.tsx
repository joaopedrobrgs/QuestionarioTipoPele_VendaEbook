import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Botao } from '../components/Botao'
import { Layout } from '../components/Layout'
import { Progresso } from '../components/Progresso'
import { conteudoGeral } from '../data/conteudo'
import { perguntas } from '../data/perguntas'
import type { AlternativaId } from '../types/quiz'

interface QuizProps {
  indice: number
  resposta?: AlternativaId
  aoResponder: (resposta: AlternativaId) => void
  aoVoltar: () => void
  aoAvancar: () => void
}

export function Quiz({ indice, resposta, aoResponder, aoVoltar, aoAvancar }: QuizProps) {
  const pergunta = perguntas[indice]
  if (!pergunta) return null

  const atual = indice + 1
  const ultima = atual === perguntas.length
  const { quiz } = conteudoGeral

  return (
    <Layout compacto>
      <section className="mx-auto flex min-h-[calc(100dvh-6rem)] max-w-4xl items-center py-5 sm:py-8">
        <div key={pergunta.id} className="w-full animate-question rounded-[2rem] border border-sand bg-cream p-5 shadow-soft motion-reduce:animate-none sm:p-9 lg:p-11">
          <Progresso atual={atual} total={perguntas.length} rotulo={quiz.perguntaDe(atual, perguntas.length)} />
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-mocha">{quiz.tituloApoio}</p>
          <h1 className="mt-3 text-balance font-display text-3xl leading-tight text-mocha sm:text-4xl">{pergunta.texto}</h1>
          <p className="mt-3 text-sm text-mocha">{quiz.instrucao}</p>

          <fieldset className="mt-7 grid gap-3">
            <legend className="sr-only">{pergunta.texto}</legend>
            {pergunta.alternativas.map((alternativa) => {
              const selecionada = resposta === alternativa.id
              return (
                <label key={alternativa.id} className={`group flex cursor-pointer items-start gap-4 rounded-2xl border p-4 transition duration-200 sm:p-5 ${selecionada ? 'border-brown bg-rose/40 shadow-sm' : 'border-taupe/35 bg-cream/80 hover:border-brown/70 hover:bg-cream'}`}>
                  <input className="peer sr-only" type="radio" name={pergunta.id} value={alternativa.id} checked={selecionada} onChange={() => aoResponder(alternativa.id)} />
                  <span className={`grid size-8 shrink-0 place-items-center rounded-full border text-xs font-bold transition ${selecionada ? 'border-mocha bg-mocha text-cream' : 'border-taupe/60 text-mocha group-hover:border-brown'}`} aria-hidden="true">{alternativa.id}</span>
                  <span className="pt-1 text-sm leading-relaxed text-mocha sm:text-base">{alternativa.texto}</span>
                </label>
              )
            })}
          </fieldset>

          {!resposta && <p className="mt-4 text-sm text-mocha" aria-live="polite">{quiz.selecione}</p>}
          <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
            <Botao variante="secundario" onClick={aoVoltar}><ArrowLeft size={18} aria-hidden="true" />{quiz.voltar}</Botao>
            <Botao onClick={aoAvancar} disabled={!resposta}>{ultima ? quiz.finalizar : quiz.avancar}<ArrowRight size={18} aria-hidden="true" /></Botao>
          </div>
        </div>
      </section>
    </Layout>
  )
}
