# Documentação da aplicação

## Visão geral

Aplicação React de página única para identificar o perfil predominante de pele por meio de 10 perguntas ponderadas e apresentar uma oferta-template do ebook “Guia Completo de Cuidados com a Pele”. O conteúdo é educativo e não é apresentado como diagnóstico médico.

A interface replica os tokens do site institucional em Tailwind CSS v4 CSS-first: `cream #F6EFE9`, `sand #EFE6DF`, `rose #C8B3AA`, `taupe #8B7A75`, `mocha #6F5B55`, `brown #8F716B` e `wood #8C756F`. A tipografia usa Cormorant Garamond nos títulos e Manrope nos textos e controles, com a sombra suave institucional aplicada aos cards.

## Stack

- Node.js 22.12.0 (fixado em `.nvmrc` e `package.json`)
- React 19.2.8
- TypeScript 6.0.3 em modo strict
- Vite 8.2.2
- Tailwind CSS 4.3.3 com configuração CSS-first em `src/styles.css`
- oxlint 1.82.0 com regras de acessibilidade
- Vitest 5.0.0 para testes de domínio

## Estrutura

- `src/data/`: perguntas, pesos e todo o conteúdo textual.
- `src/types/`: contratos tipados do domínio.
- `src/lib/quiz.ts`: pontuação, completude, classificação e confiança.
- `src/lib/storage.ts`: persistência resiliente no `localStorage`.
- `src/lib/analytics.ts`: barramento de eventos preparado para integração externa.
- `src/config/app.ts`: checkout e chaves de configuração centralizadas.
- `src/components/`: componentes visuais reutilizáveis.
- `src/sections/`: landing page, quiz, resultado e oferta do ebook.

## Fluxo e persistência

O fluxo possui três telas: landing, quiz e resultado. Cada pergunta ocupa isoladamente a tela do quiz. Respostas, pergunta atual e tela são salvas no navegador; dados inválidos são descartados durante a restauração. A tela de resultado só pode ser restaurada ou aberta quando as 10 respostas são válidas.

O estado é salvo em `localStorage` com a chave `quiz-perfil-pele:v1` e contém versão, tela atual, índice da pergunta e respostas. Na leitura, a aplicação:

1. ignora JSON inválido ou estruturas inesperadas;
2. mantém apenas respostas que ainda existem nas alternativas cadastradas;
3. limita o índice ao intervalo válido das perguntas;
4. impede a restauração da tela de resultado quando o quiz não está completo.

Ao selecionar “Refazer o quiz”, o estado persistido é removido e o fluxo retorna à landing page.

## Experiência e validações

- Não é possível avançar sem selecionar uma alternativa.
- O botão final só apresenta o resultado após as 10 respostas válidas.
- Voltar preserva as respostas e permite alterá-las.
- Cada mudança de tela ou pergunta reposiciona a página no topo com rolagem suave.
- As transições respeitam `prefers-reduced-motion`.
- Radio buttons, fieldsets, barra de progresso, foco visível, skip link e elementos semânticos oferecem acessibilidade básica e navegação por teclado.

## Classificação

Cada alternativa aponta para um tipo (`seca`, `mista`, `oleosa`, `equilibrada`) e recebe o peso da pergunta. A diferença entre a maior e a segunda pontuação define confiança alta (5+), moderada (3–4) ou baixa (0–2). Empates mantêm todos os perfis líderes visíveis e são comunicados como baixa definição.

| Diferença entre 1º e 2º | Confiança | Comunicação |
|---|---|---|
| 5 pontos ou mais | Alta | Informa o perfil predominante. |
| 3 ou 4 pontos | Moderada | Informa o perfil predominante e a tendência secundária. |
| 0 a 2 pontos | Baixa | Informa características de mais de um perfil sem apresentar o resultado como definitivo. |

A pontuação máxima por perfil é 22. Em empate na maior pontuação, todos os líderes são preservados em `tiposEmpatados` e exibidos no destaque principal.

Observação: o exemplo escrito no plano informa 5 pontos para pele oleosa, mas as alternativas C selecionadas (Q3 e Q6) somam 4 pelos pesos definidos. A implementação segue os pesos explícitos e possui teste automatizado para esse caso.

## Integrações futuras

- Checkout: substituir `EBOOK_CHECKOUT_URL` em `src/config/app.ts`. Enquanto o valor for `#`, o CTA registra o clique e permanece como placeholder, sem navegação ou pagamento.
- Analytics: ouvir o evento de navegador `quiz:analytics` ou adaptar `registrarEvento` em `src/lib/analytics.ts` para encaminhar os payloads a uma ferramenta externa.
- Novos atributos: ampliar os tipos e alternativas sem alterar os componentes, mantendo o cálculo orientado a dados.

### Eventos disponíveis

| Evento | Momento | Dados adicionais |
|---|---|---|
| `quiz_started` | Início do quiz | Nenhum. |
| `question_answered` | Seleção de alternativa | `perguntaId` e `alternativaId`. |
| `quiz_completed` | Finalização válida | Nenhum. |
| `result_viewed` | Exibição do resultado | `tipo` e `confianca`. |
| `ebook_cta_clicked` | Clique no CTA do ebook | Nenhum. |

Em desenvolvimento, os eventos também são apresentados no console para facilitar a validação.

## Interface, SEO e performance

- Tokens visuais e fontes são definidos em `src/styles.css` por meio de `@theme`, sem `tailwind.config.js`.
- A landing page utiliza o painel gráfico abstrato da identidade; o monograma oficial fica em `public/assets/icone-nf.png`.
- Na oferta exibida após o resultado, o mockup do ebook aparece sobre uma versão desfocada da foto da Dra. Natália usada no HERO do site institucional.
- Títulos usam Cormorant Garamond, enquanto textos e controles usam Manrope.
- `index.html` configura idioma pt-BR, título, descrição, Open Graph, theme color e favicon.
- A aplicação não depende de roteamento, serviços externos ou bibliotecas de animação, reduzindo o JavaScript inicial.
- Google Fonts é a única dependência visual remota carregada no primeiro acesso.

## Testes automatizados

`src/lib/quiz.test.ts` cobre:

- classificação máxima dos quatro perfis;
- pesos do exemplo descrito no plano;
- bloqueio de resultado incompleto;
- limites dos três níveis de confiança;
- preservação dos líderes em caso de empate.

Atualmente são executados 12 testes com Vitest.

## Comandos

- `npm run dev`: servidor local.
- `npm run lint`: análise estática e acessibilidade.
- `npm run test`: testes do algoritmo.
- `npm run build`: compilação de produção.
- `npm run check`: validação completa.

## Helper do Windows

O arquivo `scripts.ps1` usa NVM para instalar ou selecionar Node.js 22.12 e oferece os comandos `install`, `start`, `build` e `preview`, além de um menu interativo. O script solicita elevação administrativa e abre um processo filho para executar a opção selecionada.

A opção `preview` do helper chama `npm run preview:open`, que não existe em `package.json` nesta versão. Para visualizar o build, use `npm run preview` até o helper e os scripts npm serem alinhados.
