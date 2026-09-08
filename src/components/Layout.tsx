import type { ReactNode } from 'react'
import { conteudoGeral } from '../data/conteudo'
import { Marca } from './Marca'

interface LayoutProps {
  children: ReactNode
  compacto?: boolean
}

export function Layout({ children, compacto = false }: LayoutProps) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-cream text-mocha">
      <a className="skip-link" href="#conteudo">{conteudoGeral.pularConteudo}</a>
      <header className="relative z-10 border-b border-sand">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Marca />
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-mocha">{conteudoGeral.tema}</span>
        </div>
      </header>
      <main id="conteudo" className={`relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${compacto ? 'pb-8' : 'pb-14'}`}>
        {children}
      </main>
      {!compacto && <footer className="relative z-10 border-t border-taupe/20 px-5 py-5 text-center text-xs tracking-wide text-mocha">{conteudoGeral.rodape}</footer>}
    </div>
  )
}
