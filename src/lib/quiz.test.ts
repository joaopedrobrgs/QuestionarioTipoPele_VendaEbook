import { describe, expect, it } from 'vitest'
import { calcularConfianca, calcularPontuacoes, classificarPerfil } from './quiz'
import type { AlternativaId, Respostas } from '../types/quiz'

const todas = (alternativa: AlternativaId): Respostas => Object.fromEntries(
  Array.from({ length: 10 }, (_, indice) => [`q${indice + 1}`, alternativa]),
)

describe('algoritmo do quiz', () => {
  it.each([
    ['A', 'seca'],
    ['B', 'mista'],
    ['C', 'oleosa'],
    ['D', 'equilibrada'],
  ] as const)('classifica todas as respostas %s como pele %s com 22 pontos', (alternativa, tipo) => {
    const resultado = classificarPerfil(todas(alternativa))
    expect(resultado?.tipoPredominante).toBe(tipo)
    expect(resultado?.pontuacoes[tipo]).toBe(22)
    expect(resultado?.confianca).toBe('alta')
  })

  it('segue os pesos explícitos no exemplo do plano', () => {
    const respostas: Respostas = { q1: 'B', q2: 'B', q3: 'C', q4: 'B', q5: 'B', q6: 'C', q7: 'B', q8: 'B', q9: 'D', q10: 'B' }
    expect(calcularPontuacoes(respostas)).toEqual({ seca: 0, mista: 17, oleosa: 4, equilibrada: 1 })
  })

  it('não gera resultado com respostas incompletas', () => {
    expect(classificarPerfil({ q1: 'A' })).toBeNull()
  })

  it.each([[5, 'alta'], [4, 'moderada'], [3, 'moderada'], [2, 'baixa'], [0, 'baixa']] as const)('classifica diferença %i como confiança %s', (diferenca, confianca) => {
    expect(calcularConfianca(diferenca)).toBe(confianca)
  })

  it('preserva todos os líderes em caso de empate', () => {
    const resultado = classificarPerfil({ q1: 'A', q2: 'A', q3: 'A', q4: 'B', q5: 'B', q6: 'B', q7: 'B', q8: 'A', q9: 'B', q10: 'B' })
    expect(resultado?.confianca).toBe('baixa')
    expect(resultado?.tiposEmpatados.length).toBeGreaterThan(1)
  })
})
