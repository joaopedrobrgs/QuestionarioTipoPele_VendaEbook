import { ArrowUpRight, BookOpen, Check } from 'lucide-react'
import { Botao } from '../components/Botao'
import { EBOOK_CHECKOUT_URL } from '../config/app'
import { conteudoEbook } from '../data/conteudo'

interface OfertaEbookProps {
  aoClicar: () => void
}

export function OfertaEbook({ aoClicar }: OfertaEbookProps) {
  return (
    <section className="mt-10 overflow-hidden rounded-[2.25rem] bg-mocha text-cream shadow-soft lg:grid lg:grid-cols-[0.9fr_1.1fr]">
      <div className="relative min-h-80 overflow-hidden bg-rose p-8 text-mocha sm:p-10">
        <img
          src={conteudoEbook.imagemFundo}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full scale-110 object-cover object-top blur-[6px] saturate-75"
        />
        <div className="absolute inset-0 bg-mocha/35" aria-hidden="true" />
        <div className="absolute inset-0 opacity-15 pattern-lines" aria-hidden="true" />
        <div className="relative mx-auto flex aspect-[3/4] max-w-64 -rotate-2 flex-col justify-between rounded-r-2xl border-l-[10px] border-brown/35 bg-cream p-7 shadow-2xl transition-transform duration-500 hover:rotate-0 motion-reduce:transition-none lg:translate-y-42">
          <BookOpen size={28} strokeWidth={1.4} aria-hidden="true" />
          <h3 className="font-display text-4xl leading-none">{conteudoEbook.nome}</h3>
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.22em]">{conteudoEbook.selo}</span>
        </div>
      </div>
      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.23em] text-sand">{conteudoEbook.etiqueta}</p>
        <h2 className="mt-4 text-balance font-display text-4xl leading-tight sm:text-5xl">{conteudoEbook.titulo}</h2>
        <p className="mt-5 leading-relaxed text-cream/80">{conteudoEbook.texto}</p>
        <p className="mt-5 font-semibold">{conteudoEbook.descricao}</p>
        <ul className="mt-6 grid gap-3 text-sm text-cream/90">
          {conteudoEbook.capitulos.map((capitulo) => <li key={capitulo} className="flex items-center gap-3"><Check className="text-sand" size={17} aria-hidden="true" />{capitulo}</li>)}
        </ul>
        <Botao className="mt-8 w-full bg-cream text-mocha hover:bg-sand sm:w-fit" onClick={aoClicar} aria-describedby="ebook-placeholder">
          {conteudoEbook.botao}<ArrowUpRight size={18} aria-hidden="true" />
        </Botao>
        {EBOOK_CHECKOUT_URL === '#' && <p id="ebook-placeholder" className="mt-3 text-xs text-cream/70">{conteudoEbook.placeholder}</p>}
      </div>
    </section>
  )
}
