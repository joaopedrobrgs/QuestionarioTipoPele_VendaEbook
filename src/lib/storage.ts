import { STORAGE_KEY, STORAGE_VERSION } from '../config/app'
import { perguntas } from '../data/perguntas'
import type { Respostas } from '../types/quiz'

export type Tela = 'landing' | 'quiz' | 'resultado'

export interface EstadoPersistido {
  version: number
  tela: Tela
  indice: number
  respostas: Respostas
}

const estadoInicial: EstadoPersistido = { version: STORAGE_VERSION, tela: 'landing', indice: 0, respostas: {} }

function ehRegistro(valor: unknown): valor is Record<string, unknown> {
  return typeof valor === 'object' && valor !== null && !Array.isArray(valor)
}

export function carregarEstado(): EstadoPersistido {
  try {
    const bruto = localStorage.getItem(STORAGE_KEY)
    if (!bruto) return estadoInicial

    const salvo: unknown = JSON.parse(bruto)
    if (!ehRegistro(salvo)) return estadoInicial

    const dados = salvo
    const respostasSalvas = ehRegistro(dados.respostas) ? dados.respostas : {}
    const respostasValidas: Respostas = {}

    for (const pergunta of perguntas) {
      const resposta = respostasSalvas[pergunta.id]
      if (pergunta.alternativas.some((alternativa) => alternativa.id === resposta)) {
        const alternativa = pergunta.alternativas.find((item) => item.id === resposta)
        if (alternativa) respostasValidas[pergunta.id] = alternativa.id
      }
    }

    const indice = Math.min(Math.max(Number(dados.indice) || 0, 0), perguntas.length - 1)
    const completo = perguntas.every((pergunta) => respostasValidas[pergunta.id])
    const tela: Tela = dados.tela === 'resultado' && !completo
      ? 'quiz'
      : dados.tela === 'quiz' || dados.tela === 'resultado'
        ? dados.tela
        : 'landing'

    return { version: STORAGE_VERSION, tela, indice, respostas: respostasValidas }
  } catch {
    return estadoInicial
  }
}

export function salvarEstado(estado: Omit<EstadoPersistido, 'version'>): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...estado, version: STORAGE_VERSION }))
}

export function limparEstado(): void {
  localStorage.removeItem(STORAGE_KEY)
}
