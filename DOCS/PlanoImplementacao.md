Quero que você desenvolva um site completo, responsivo e funcional que será utilizado como uma isca digital para identificar o perfil de pele do usuário e, ao final, apresentar o ebook "Guia Completo de Cuidados com a Pele" como oferta.

OBJETIVO DO PROJETO

Criar um quiz de 10 perguntas sobre comportamento da pele.

O usuário responderá uma pergunta por página.

Ao finalizar as 10 perguntas, a aplicação deverá:
1. Calcular automaticamente o resultado usando o algoritmo especificado abaixo.
2. Informar ao usuário qual é o seu tipo de pele predominante.
3. Mostrar uma explicação simples e profissional sobre esse tipo de pele.
4. Apresentar um CTA para o ebook "Guia Completo de Cuidados com a Pele".
5. A área de venda do ebook, nesta primeira versão, deve ser apenas um TEMPLATE. Não implementar checkout, pagamento ou integração de vendas ainda.
6. Preparar o código para que a futura integração de venda possa ser adicionada facilmente.

IMPORTANTE

O objetivo do quiz é gerar interesse e percepção de valor para o usuário e conduzi-lo naturalmente ao ebook.

Não apresentar o teste como diagnóstico médico.

Utilizar a expressão "perfil de pele" ou "tipo de pele".

O resultado deve ser apresentado de forma segura, profissional e fácil de entender.

TIPOS DE PELE

O algoritmo deve classificar o usuário em um dos quatro tipos principais:

- seca
- mista
- oleosa
- equilibrada

Sensibilidade não será utilizada como um quinto tipo de pele nesta primeira versão.

A arquitetura do sistema deve, entretanto, ficar preparada para que características adicionais, como sensibilidade ou reatividade, possam ser adicionadas futuramente sem necessidade de reconstruir o quiz.

--------------------------------------------------
ESTRUTURA DO SITE
--------------------------------------------------

TELA 1 — LANDING PAGE

Apresentar:

Título:
"Descubra qual é o seu tipo de pele"

Subtítulo:
"Responda a 10 perguntas e descubra como sua pele se comporta."

Texto de apoio:
"Leva poucos minutos e o resultado é calculado com base nas suas respostas."

Botão:
"Descobrir meu tipo de pele"

A landing page deve transmitir sensação de profissionalismo, estética, skincare, confiança e sofisticação.

--------------------------------------------------
QUIZ
--------------------------------------------------

O quiz terá exatamente 10 perguntas.

Cada página deverá apresentar:

- indicador de progresso, por exemplo: "1 de 10"
- pergunta
- 4 alternativas
- uma alternativa deve ser selecionada
- botão para avançar
- não permitir avançar sem selecionar uma alternativa
- permitir voltar para a pergunta anterior
- manter as respostas já selecionadas
- ao chegar à pergunta 10, apresentar botão "Ver meu resultado"

Não utilizar múltiplas perguntas na mesma página.

Cada pergunta deve ocupar uma página própria.

--------------------------------------------------
PERGUNTAS
--------------------------------------------------

PERGUNTA 1

Como sua pele fica algumas horas depois de lavar o rosto, sem aplicar nenhum produto?

A. Fica repuxada, seca ou com sensação de desconforto.
B. As bochechas ficam confortáveis, mas a testa e o nariz começam a apresentar brilho.
C. O brilho aparece em boa parte do rosto.
D. Fica confortável, sem sensação importante de ressecamento ou excesso de oleosidade.

Peso: 3


PERGUNTA 2

Como sua pele costuma ficar ao longo do dia?

A. Permanece com pouca oleosidade e pode apresentar sensação de ressecamento.
B. A oleosidade aparece principalmente na testa, nariz e queixo.
C. A oleosidade aparece rapidamente em várias regiões do rosto.
D. Apresenta apenas um brilho discreto e permanece confortável.

Peso: 3


PERGUNTA 3

Como sua maquiagem costuma se comportar depois de algumas horas?

A. Marca áreas secas ou evidencia pequenas descamações.
B. Fica bem nas bochechas, mas a zona T começa a apresentar brilho.
C. Fica mais brilhante e perde a aparência uniforme rapidamente.
D. Permanece relativamente uniforme durante boa parte do dia.

Peso: 2


PERGUNTA 4

Como você percebe seus poros no rosto?

A. Geralmente são pouco aparentes e a pele tem aspecto mais seco.
B. São mais visíveis na zona T do que nas bochechas.
C. São visíveis em várias áreas, principalmente onde há maior oleosidade.
D. São pouco aparentes e relativamente uniformes.

Peso: 1


PERGUNTA 5

Como sua pele costuma reagir ao frio ou a ambientes com baixa umidade?

A. Fica mais seca, repuxada e pode descamar.
B. As bochechas ficam mais secas, enquanto a zona T continua apresentando alguma oleosidade.
C. Continua apresentando oleosidade mesmo durante esses períodos.
D. Apresenta poucas alterações e permanece relativamente confortável.

Peso: 2


PERGUNTA 6

E em dias quentes ou com maior umidade?

A. Minha pele continua com tendência ao ressecamento.
B. A zona T fica mais oleosa, enquanto as bochechas permanecem relativamente equilibradas.
C. A oleosidade aumenta em várias regiões do rosto.
D. Percebo apenas um aumento discreto de brilho.

Peso: 2


PERGUNTA 7

Como sua pele costuma se sentir depois de aplicar um hidratante?

A. Precisa de uma textura mais confortável e hidratante para não ficar repuxada.
B. Gosto de hidratação nas bochechas, mas produtos muito pesados deixam a zona T mais oleosa.
C. Texturas mais leves costumam funcionar melhor porque produtos pesados aumentam rapidamente o brilho.
D. Geralmente tolera bem diferentes texturas, desde que sejam adequadas à pele.

Peso: 2


PERGUNTA 8

Como sua pele costuma estar no final de um dia inteiro?

A. Mais seca, repuxada ou com algumas áreas descamando.
B. A zona T apresenta brilho, enquanto as bochechas permanecem confortáveis.
C. Apresenta bastante brilho e sensação de oleosidade em várias regiões.
D. Continua confortável e relativamente equilibrada.

Peso: 3


PERGUNTA 9

Quando você usa um produto novo, qual situação acontece com mais frequência?

A. Minha pele pode ficar ressecada ou repuxada, principalmente com produtos adstringentes.
B. Algumas regiões aceitam bem, enquanto a zona T pode ficar mais oleosa dependendo do produto.
C. Produtos mais pesados podem aumentar rapidamente o brilho e a oleosidade.
D. Minha pele costuma se adaptar bem quando o produto é adequado.

Peso: 1


PERGUNTA 10

Qual descrição mais representa sua pele atualmente?

A. Minha principal dificuldade é manter a pele confortável e hidratada, sem sensação de ressecamento.
B. Minha pele apresenta comportamentos diferentes entre as regiões, principalmente entre zona T e bochechas.
C. Minha principal característica é a oleosidade e o brilho frequente.
D. Minha pele costuma permanecer confortável, sem excesso de oleosidade ou ressecamento.

Peso: 3

--------------------------------------------------
MAPEAMENTO DAS RESPOSTAS
--------------------------------------------------

A = seca
B = mista
C = oleosa
D = equilibrada

--------------------------------------------------
ALGORITMO
--------------------------------------------------

Criar quatro acumuladores:

seca = 0
mista = 0
oleosa = 0
equilibrada = 0

Para cada resposta:

1. identificar o tipo correspondente à alternativa
2. identificar o peso da pergunta
3. adicionar o peso ao acumulador daquele tipo

Pesos:

Q1 = 3
Q2 = 3
Q3 = 2
Q4 = 1
Q5 = 2
Q6 = 2
Q7 = 2
Q8 = 3
Q9 = 1
Q10 = 3

Pontuação máxima de cada tipo = 22.

Exemplo:

Se o usuário responder:

Q1 = B
Q2 = B
Q3 = C
Q4 = B
Q5 = B
Q6 = C
Q7 = B
Q8 = B
Q9 = D
Q10 = B

O cálculo deve produzir:

seca = 0
mista = 17
oleosa = 5
equilibrada = 1

Resultado:

mista

--------------------------------------------------
REGRA DE CONFIANÇA
--------------------------------------------------

Além do tipo predominante, calcular a distância entre a primeira e a segunda maior pontuação.

Se diferença >= 5:

confidence = "alta"

Se diferença entre 3 e 4:

confidence = "moderada"

Se diferença entre 0 e 2:

confidence = "baixa"

Quando a confiança for alta:

Mostrar:
"Seu perfil predominante é pele mista."

Quando a confiança for moderada:

Mostrar:
"Seu perfil predominante é pele mista, com tendência à oleosidade."

Quando a confiança for baixa:

Não apresentar o resultado como definitivo.

Mostrar:
"Suas respostas apresentam características de mais de um perfil de pele."

Em todos os casos, informar o perfil que teve a maior pontuação.

--------------------------------------------------
TELA DE RESULTADO
--------------------------------------------------

A tela de resultado deve conter:

Título:
"Seu resultado"

Destaque principal:
"[TIPO DE PELE]"

Exemplo:
"PELE MISTA"

Texto explicativo personalizado para cada tipo.

PELE SECA:

"Suas respostas indicam uma maior tendência ao ressecamento e à sensação de repuxamento. Sua pele pode apresentar menor produção de sebo e maior necessidade de cuidados que preservem a hidratação e o conforto da barreira cutânea."

PELE MISTA:

"Suas respostas indicam comportamentos diferentes entre as regiões do rosto, com maior tendência à oleosidade na zona T e maior equilíbrio ou ressecamento nas bochechas."

PELE OLEOSA:

"Suas respostas indicam maior tendência à produção de sebo, com brilho mais frequente e maior oleosidade em diferentes regiões do rosto."

PELE EQUILIBRADA:

"Suas respostas indicam um comportamento relativamente equilibrado entre oleosidade, hidratação e conforto ao longo do dia."

ADICIONAR ABAIXO:

"Este resultado representa um perfil predominante com base nas suas respostas e não substitui uma avaliação profissional."

--------------------------------------------------
CTA DO EBOOK
--------------------------------------------------

Depois do resultado, criar uma seção visualmente destacada.

Título:

"Agora que você conhece sua pele, descubra como cuidar dela."

Texto:

"Saber qual é o seu tipo de pele é apenas o primeiro passo. O próximo é entender quais cuidados, produtos e hábitos fazem sentido para as necessidades da sua pele."

Nome do produto:

"Guia Completo de Cuidados com a Pele"

Texto curto:

"Um guia completo para entender sua pele, montar uma rotina de cuidados e escolher produtos de forma mais consciente."

Botão:

"QUERO CONHECER O GUIA"

Nesta primeira versão, esse botão NÃO deve realizar checkout.

Criar apenas um placeholder/template para futura integração.

Por exemplo:

const EBOOK_CHECKOUT_URL = "#";

Deixar essa variável ou configuração centralizada para que posteriormente seja fácil substituir por uma URL real de checkout.

--------------------------------------------------
DESIGN
--------------------------------------------------

Criar uma interface sofisticada, limpa e feminina, relacionada ao universo de skincare e estética.

Priorizar:

- fundo claro
- verde escuro sofisticado como cor principal
- verde claro para destaques
- tons neutros/off-white
- cards com cantos arredondados
- tipografia elegante e legível
- bastante espaço em branco
- aparência premium
- design responsivo
- ótima experiência no celular

A referência visual fornecida mostra uma identidade com verde escuro, verde vibrante e elementos arredondados. Usar essa referência apenas como inspiração visual, sem copiar literalmente.

O quiz deve parecer um produto profissional de skincare, e não um formulário genérico.

--------------------------------------------------
EXPERIÊNCIA DO USUÁRIO
--------------------------------------------------

Criar transições suaves entre perguntas.

Mostrar progresso de forma visual.

Exemplo:

Pergunta 3 de 10

[████████░░░░░░░░░░]

Não mostrar a pontuação durante o quiz.

Não revelar qual alternativa corresponde a qual tipo de pele.

O usuário deve simplesmente responder conforme seu comportamento.

No resultado, apresentar a classificação.

--------------------------------------------------
ESTRUTURA TÉCNICA
--------------------------------------------------

Organizar o projeto com código limpo e modular.

Separar:

- dados das perguntas
- pesos
- lógica de pontuação
- lógica de classificação
- conteúdo dos resultados
- conteúdo do ebook
- componentes visuais

Não hardcodar a lógica de maneira espalhada pelos componentes.

Criar uma estrutura de dados que permita futuramente:

- adicionar perguntas
- alterar pesos
- adicionar novos tipos
- adicionar características como sensibilidade
- alterar textos
- alterar o link do checkout

sem precisar reescrever toda a aplicação.

--------------------------------------------------
VALIDAÇÕES
--------------------------------------------------

O sistema deve:

- impedir avanço sem resposta
- impedir resultados antes da pergunta 10
- permitir voltar
- preservar respostas
- recalcular corretamente ao finalizar
- funcionar em desktop e mobile
- não quebrar com refresh inesperado
- tratar corretamente empate ou diferença muito pequena entre tipos

--------------------------------------------------
SEO E PERFORMANCE
--------------------------------------------------

Preparar a aplicação para:

- título da página
- meta description
- Open Graph
- carregamento rápido
- responsividade
- acessibilidade básica
- navegação por teclado
- textos e botões semanticamente corretos

Meta title sugerido:

"Descubra seu Tipo de Pele | Guia Completo de Cuidados com a Pele"

Meta description sugerida:

"Responda a 10 perguntas e descubra qual é o seu perfil de pele. Ao final, conheça o Guia Completo de Cuidados com a Pele."

--------------------------------------------------
ANALYTICS
--------------------------------------------------

Preparar pontos de integração para analytics futuramente.

Criar funções ou estrutura para permitir eventos como:

quiz_started
question_answered
quiz_completed
result_viewed
ebook_cta_clicked

Nesta primeira versão não é necessário configurar uma ferramenta externa de analytics, apenas deixar a estrutura preparada.

--------------------------------------------------
TECNOLOGIAS
--------------------------------------------------

Estão abaixo deverão ser obrigatoriamente utilizadas. Mas pode ficar a vontade para aplicar novas stacks sempre que achar conveniente e benefico ao projeto.

| Camada | Tecnologia | Observações |
|---|---|---|
| Framework UI | React 19 | Function components + hooks, sem classes |
| Linguagem | TypeScript 6 | `strict` habilitado via `tsconfig` |
| Build tool | Vite 8 | Dev server rápido + build de produção |
| Estilo | Tailwind CSS v4 | Configuração **CSS-first** via `@theme` (não usa `tailwind.config.js`) |
| Lint | `oxlint` (com plugin `jsx-a11y`) | Substitui ESLint; mais rápido, mesmas regras de acessibilidade |

Utilizar **Node.js 22.12** (Vite 8 e Tailwind v4 não funcionam em versões antigas do Node).

**OBS:** Sempre utiliza uma versão especifica das libs. Nunca coloque lts ou numberVersion+.

--------------------------------------------------
IDENTIDADE VISUAL
--------------------------------------------------

[IdentidadeVisual](IdentidadeVisual.jpeg)
+
[SiteInstitucionalDraNataliaFernandes](SiteInstitucionalDraNataliaFernandes) => Site completo em React. Coloquei todos os arquivos na pasta, inclusive assets que forem necessários.

--------------------------------------------------
Requisitos obrigatórios desenvolvimento
--------------------------------------------------

[Requisitos obrigatórios desenvolvimento](RegrasDesenvolvimento.md)

--------------------------------------------------
CRITÉRIOS DE CONCLUSÃO
--------------------------------------------------

Considere o projeto concluído somente quando:

1. O site estiver funcional.
2. As 10 perguntas estiverem implementadas.
3. Cada pergunta aparecer em uma página própria.
4. O sistema calcular corretamente a pontuação.
5. O sistema identificar corretamente o tipo predominante.
6. O sistema calcular a confiança.
7. A tela de resultado estiver funcionando.
8. Existirem textos específicos para os quatro tipos.
9. O CTA do ebook estiver funcionando como placeholder.
10. O layout estiver responsivo.
11. O código estiver organizado e preparado para futuras alterações.
12. Não houver erros no console.
13. O fluxo completo puder ser testado do início ao fim.

Antes de considerar concluído, faça testes com diferentes combinações de respostas e confirme que o algoritmo produz os resultados esperados.

IMPORTANTE: não invente novas regras de classificação sem necessidade. Siga exatamente a lógica descrita acima.
