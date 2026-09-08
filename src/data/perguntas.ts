import type { Alternativa, AlternativaId, Pergunta, TipoPele } from '../types/quiz'

const mapaTipos: Record<AlternativaId, TipoPele> = {
  A: 'seca',
  B: 'mista',
  C: 'oleosa',
  D: 'equilibrada',
}

const idsAlternativas: readonly AlternativaId[] = ['A', 'B', 'C', 'D']

const alternativas = (textos: readonly [string, string, string, string]): Alternativa[] =>
  textos.map((texto, indice) => {
    const id = idsAlternativas[indice]
    if (!id) throw new Error('Alternativa sem identificador válido.')
    return { id, texto, tipo: mapaTipos[id] }
  })

export const perguntas: readonly Pergunta[] = [
  {
    id: 'q1',
    texto: 'Como sua pele fica algumas horas depois de lavar o rosto, sem aplicar nenhum produto?',
    peso: 3,
    alternativas: alternativas([
      'Fica repuxada, seca ou com sensação de desconforto.',
      'As bochechas ficam confortáveis, mas a testa e o nariz começam a apresentar brilho.',
      'O brilho aparece em boa parte do rosto.',
      'Fica confortável, sem sensação importante de ressecamento ou excesso de oleosidade.',
    ]),
  },
  {
    id: 'q2',
    texto: 'Como sua pele costuma ficar ao longo do dia?',
    peso: 3,
    alternativas: alternativas([
      'Permanece com pouca oleosidade e pode apresentar sensação de ressecamento.',
      'A oleosidade aparece principalmente na testa, nariz e queixo.',
      'A oleosidade aparece rapidamente em várias regiões do rosto.',
      'Apresenta apenas um brilho discreto e permanece confortável.',
    ]),
  },
  {
    id: 'q3',
    texto: 'Como sua maquiagem costuma se comportar depois de algumas horas?',
    peso: 2,
    alternativas: alternativas([
      'Marca áreas secas ou evidencia pequenas descamações.',
      'Fica bem nas bochechas, mas a zona T começa a apresentar brilho.',
      'Fica mais brilhante e perde a aparência uniforme rapidamente.',
      'Permanece relativamente uniforme durante boa parte do dia.',
    ]),
  },
  {
    id: 'q4',
    texto: 'Como você percebe seus poros no rosto?',
    peso: 1,
    alternativas: alternativas([
      'Geralmente são pouco aparentes e a pele tem aspecto mais seco.',
      'São mais visíveis na zona T do que nas bochechas.',
      'São visíveis em várias áreas, principalmente onde há maior oleosidade.',
      'São pouco aparentes e relativamente uniformes.',
    ]),
  },
  {
    id: 'q5',
    texto: 'Como sua pele costuma reagir ao frio ou a ambientes com baixa umidade?',
    peso: 2,
    alternativas: alternativas([
      'Fica mais seca, repuxada e pode descamar.',
      'As bochechas ficam mais secas, enquanto a zona T continua apresentando alguma oleosidade.',
      'Continua apresentando oleosidade mesmo durante esses períodos.',
      'Apresenta poucas alterações e permanece relativamente confortável.',
    ]),
  },
  {
    id: 'q6',
    texto: 'E em dias quentes ou com maior umidade?',
    peso: 2,
    alternativas: alternativas([
      'Minha pele continua com tendência ao ressecamento.',
      'A zona T fica mais oleosa, enquanto as bochechas permanecem relativamente equilibradas.',
      'A oleosidade aumenta em várias regiões do rosto.',
      'Percebo apenas um aumento discreto de brilho.',
    ]),
  },
  {
    id: 'q7',
    texto: 'Como sua pele costuma se sentir depois de aplicar um hidratante?',
    peso: 2,
    alternativas: alternativas([
      'Precisa de uma textura mais confortável e hidratante para não ficar repuxada.',
      'Gosto de hidratação nas bochechas, mas produtos muito pesados deixam a zona T mais oleosa.',
      'Texturas mais leves costumam funcionar melhor porque produtos pesados aumentam rapidamente o brilho.',
      'Geralmente tolera bem diferentes texturas, desde que sejam adequadas à pele.',
    ]),
  },
  {
    id: 'q8',
    texto: 'Como sua pele costuma estar no final de um dia inteiro?',
    peso: 3,
    alternativas: alternativas([
      'Mais seca, repuxada ou com algumas áreas descamando.',
      'A zona T apresenta brilho, enquanto as bochechas permanecem confortáveis.',
      'Apresenta bastante brilho e sensação de oleosidade em várias regiões.',
      'Continua confortável e relativamente equilibrada.',
    ]),
  },
  {
    id: 'q9',
    texto: 'Quando você usa um produto novo, qual situação acontece com mais frequência?',
    peso: 1,
    alternativas: alternativas([
      'Minha pele pode ficar ressecada ou repuxada, principalmente com produtos adstringentes.',
      'Algumas regiões aceitam bem, enquanto a zona T pode ficar mais oleosa dependendo do produto.',
      'Produtos mais pesados podem aumentar rapidamente o brilho e a oleosidade.',
      'Minha pele costuma se adaptar bem quando o produto é adequado.',
    ]),
  },
  {
    id: 'q10',
    texto: 'Qual descrição mais representa sua pele atualmente?',
    peso: 3,
    alternativas: alternativas([
      'Minha principal dificuldade é manter a pele confortável e hidratada, sem sensação de ressecamento.',
      'Minha pele apresenta comportamentos diferentes entre as regiões, principalmente entre zona T e bochechas.',
      'Minha principal característica é a oleosidade e o brilho frequente.',
      'Minha pele costuma permanecer confortável, sem excesso de oleosidade ou ressecamento.',
    ]),
  },
]
