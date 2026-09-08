interface ProgressoProps {
  atual: number
  total: number
  rotulo: string
}

export function Progresso({ atual, total, rotulo }: ProgressoProps) {
  const porcentagem = (atual / total) * 100

  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-mocha">
        <span>{rotulo}</span>
        <span aria-hidden="true">{Math.round(porcentagem)}%</span>
      </div>
      <progress className="progress-bar block h-2 w-full overflow-hidden rounded-full bg-sand" aria-label={rotulo} max={total} value={atual} />
    </div>
  )
}
