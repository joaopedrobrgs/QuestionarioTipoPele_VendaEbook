export const TIPOS_PELE = ['seca', 'mista', 'oleosa', 'equilibrada'] as const

export type TipoPele = (typeof TIPOS_PELE)[number]
export type NivelConfianca = 'alta' | 'moderada' | 'baixa'
export type AlternativaId = 'A' | 'B' | 'C' | 'D'
export type Respostas = Partial<Record<string, AlternativaId>>
export type Pontuacoes = Record<TipoPele, number>

export interface Alternativa {
  id: AlternativaId
  texto: string
  tipo: TipoPele
}

export interface Pergunta {
  id: string
  texto: string
  peso: number
  alternativas: readonly Alternativa[]
}

export interface ResultadoQuiz {
  tipoPredominante: TipoPele
  tiposEmpatados: TipoPele[]
  segundoTipo: TipoPele | null
  pontuacoes: Pontuacoes
  diferenca: number
  confianca: NivelConfianca
}
