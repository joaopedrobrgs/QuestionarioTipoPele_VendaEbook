export type EventoAnalytics =
  | { nome: 'quiz_started' }
  | { nome: 'question_answered'; perguntaId: string; alternativaId: string }
  | { nome: 'quiz_completed' }
  | { nome: 'result_viewed'; tipo: string; confianca: string }
  | { nome: 'ebook_cta_clicked' }

export function registrarEvento(evento: EventoAnalytics): void {
  window.dispatchEvent(new CustomEvent('quiz:analytics', { detail: evento }))

  if (import.meta.env.DEV) {
    console.info('[analytics]', evento)
  }
}
