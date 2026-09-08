import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variante?: 'principal' | 'secundario'
}

export function Botao({ children, variante = 'principal', className = '', ...props }: BotaoProps) {
  const estilo = variante === 'principal'
    ? 'bg-mocha text-cream shadow-soft hover:bg-brown disabled:bg-sand disabled:text-mocha disabled:opacity-100 disabled:shadow-none'
    : 'border border-taupe/55 bg-transparent text-mocha hover:bg-sand'

  return (
    <button className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] transition duration-300 disabled:cursor-not-allowed ${estilo} ${className}`} {...props}>
      {children}
    </button>
  )
}
