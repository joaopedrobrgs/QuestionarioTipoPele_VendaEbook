import { ArrowRight, Clock3, LockKeyhole } from 'lucide-react'
import { Botao } from '../components/Botao'
import { Layout } from '../components/Layout'
import { conteudoGeral } from '../data/conteudo'

interface LandingProps {
  aoIniciar: () => void
}

export function Landing({ aoIniciar }: LandingProps) {
  const { landing } = conteudoGeral

  return (
    <Layout>
      <section className="grid min-h-[calc(100dvh-10rem)] items-center gap-10 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-12">
        <div className="max-w-3xl animate-reveal motion-reduce:animate-none">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-mocha">{landing.etiqueta}</p>
          <h1 className="max-w-3xl text-balance font-display text-3xl uppercase tracking-[-0.01em] text-mocha sm:text-4xl md:text-5xl">{landing.titulo}</h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-mocha sm:text-xl">{landing.subtitulo}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-mocha">{landing.apoio}</p>
          <Botao onClick={aoIniciar} className="mt-8 w-full sm:w-auto">
            {landing.botao}<ArrowRight size={18} aria-hidden="true" />
          </Botao>
          <div className="mt-6 flex flex-col gap-3 text-xs text-mocha sm:flex-row sm:gap-6">
            <span className="flex items-center gap-2"><Clock3 size={15} aria-hidden="true" />{landing.tempo}</span>
            <span className="flex items-center gap-2"><LockKeyhole size={15} aria-hidden="true" />{landing.privacidade}</span>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md animate-reveal-delayed overflow-hidden rounded-[3rem_3rem_8rem_3rem] bg-mocha p-7 text-cream shadow-soft motion-reduce:animate-none sm:p-10">
          <div className="absolute inset-0 opacity-20 pattern-lines" aria-hidden="true" />
          <div className="absolute -right-12 top-16 size-52 rounded-full bg-rose/90" aria-hidden="true" />
          <div className="absolute -bottom-16 -left-8 size-64 rounded-full border-[32px] border-brown/75" aria-hidden="true" />
          <div className="relative flex h-full flex-col justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.25em]">{landing.quantidade}</span>
            <blockquote className="max-w-xs font-display text-4xl leading-tight sm:text-5xl">“{landing.destaque}”</blockquote>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em]"><span className="h-px w-10 bg-cream/60" />{landing.perfil}</div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
