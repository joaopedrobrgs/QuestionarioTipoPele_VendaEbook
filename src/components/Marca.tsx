import { conteudoGeral } from '../data/conteudo'

export function Marca() {
  return (
    <div className="flex items-center gap-3" aria-label={conteudoGeral.marca}>
      <span className="grid size-12 place-items-center rounded-full bg-brown shadow-sm" aria-hidden="true">
        <img className="size-9 object-contain" src="/assets/icone-nf.png" alt="" width="36" height="36" />
      </span>
      <span className="hidden sm:block">
        <span className="block font-display text-base font-semibold tracking-[0.1em] uppercase text-mocha">{conteudoGeral.marca}</span>
        <span className="block text-[0.58rem] font-semibold tracking-[0.28em] uppercase text-mocha">{conteudoGeral.assinatura}</span>
      </span>
    </div>
  )
}
