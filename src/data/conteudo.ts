import type { NivelConfianca, TipoPele } from '../types/quiz'

export const conteudoGeral = {
  marca: 'Dra. Natália Fernandes',
  assinatura: 'Fisioterapeuta',
  tema: 'Skincare • autocuidado',
  pularConteudo: 'Pular para o conteúdo principal',
  landing: {
    etiqueta: 'Quiz de autocuidado',
    titulo: 'DESCUBRA QUAL É O SEU TIPO DE PELE',
    subtitulo: 'Responda a 10 perguntas e descubra como sua pele se comporta.',
    apoio: 'Leva poucos minutos e o resultado é calculado com base nas suas respostas.',
    botao: 'Descobrir meu tipo de pele',
    tempo: 'Cerca de 3 minutos',
    privacidade: 'Suas respostas ficam apenas neste dispositivo.',
    destaque: 'Conhecer sua pele transforma a forma como você cuida dela.',
    quantidade: '10 perguntas',
    perfil: 'Perfil personalizado',
  },
  quiz: {
    tituloApoio: 'Seu perfil de pele',
    perguntaDe: (atual: number, total: number) => `Pergunta ${atual} de ${total}`,
    instrucao: 'Selecione a opção que mais combina com o comportamento da sua pele.',
    voltar: 'Voltar',
    avancar: 'Continuar',
    finalizar: 'Ver meu resultado',
    selecione: 'Selecione uma alternativa para continuar.',
  },
  resultado: {
    etiqueta: 'Análise concluída',
    titulo: 'Seu resultado',
    maiorPontuacao: 'Perfil com maior pontuação',
    aviso: 'Este resultado representa um perfil predominante com base nas suas respostas e não substitui uma avaliação profissional.',
    refazer: 'Refazer o quiz',
    confianca: 'Nível de definição do perfil',
    placar: 'Como suas respostas se distribuíram',
  },
  rodape: 'Conteúdo educativo sobre cuidados com a pele.',
} as const

export const conteudoTipos: Record<TipoPele, { nome: string; tendencia: string; descricao: string }> = {
  seca: {
    nome: 'Pele seca',
    tendencia: 'ressecamento',
    descricao: 'Suas respostas indicam uma maior tendência ao ressecamento e à sensação de repuxamento. Sua pele pode apresentar menor produção de sebo e maior necessidade de cuidados que preservem a hidratação e o conforto da barreira cutânea.',
  },
  mista: {
    nome: 'Pele mista',
    tendencia: 'comportamento misto',
    descricao: 'Suas respostas indicam comportamentos diferentes entre as regiões do rosto, com maior tendência à oleosidade na zona T e maior equilíbrio ou ressecamento nas bochechas.',
  },
  oleosa: {
    nome: 'Pele oleosa',
    tendencia: 'oleosidade',
    descricao: 'Suas respostas indicam maior tendência à produção de sebo, com brilho mais frequente e maior oleosidade em diferentes regiões do rosto.',
  },
  equilibrada: {
    nome: 'Pele equilibrada',
    tendencia: 'equilíbrio',
    descricao: 'Suas respostas indicam um comportamento relativamente equilibrado entre oleosidade, hidratação e conforto ao longo do dia.',
  },
}

export const textosConfianca: Record<NivelConfianca, string> = {
  alta: 'Seu perfil predominante é {principal}.',
  moderada: 'Seu perfil predominante é {principal}, com tendência à {secundario}.',
  baixa: 'Suas respostas apresentam características de mais de um perfil de pele.',
}

export const conteudoEbook = {
  etiqueta: 'Seu próximo passo',
  titulo: 'Agora que você conhece sua pele, descubra como cuidar dela.',
  texto: 'Saber qual é o seu tipo de pele é apenas o primeiro passo. O próximo é entender quais cuidados, produtos e hábitos fazem sentido para as necessidades da sua pele.',
  nome: 'Guia Completo de Cuidados com a Pele',
  descricao: 'Um guia completo para entender sua pele, montar uma rotina de cuidados e escolher produtos de forma mais consciente.',
  botao: 'Quero conhecer o guia',
  placeholder: 'Em breve, acesso ao guia por aqui.',
  selo: 'Conhecimento • rotina • resultados reais',
  imagemFundo: '/assets/dra-natalia-hero.jpg',
  capitulos: ['Entenda sua pele', 'Monte sua rotina', 'Escolha com consciência'],
} as const
