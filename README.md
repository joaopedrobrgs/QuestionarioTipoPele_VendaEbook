# Quiz de Perfil de Pele

Isca digital responsiva para identificar o perfil predominante de pele e apresentar o template de oferta do ebook “Guia Completo de Cuidados com a Pele”.

## Funcionalidades

- Quiz com 10 perguntas, uma por tela, navegação de retorno e respostas preservadas.
- Classificação ponderada entre pele seca, mista, oleosa e equilibrada.
- Níveis de confiança alto, moderado e baixo, incluindo tratamento de empates.
- Resultado personalizado com distribuição das pontuações e aviso educativo.
- Oferta-template do ebook com checkout centralizado para integração futura.
- Persistência local, eventos preparados para analytics e layout responsivo.

## Requisitos

- Node.js 22.12.0
- npm 11 ou compatível

## Execução

```bash
npm install
npm run dev
```

## Comandos

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera a aplicação de produção em `dist/`.
- `npm run preview`: serve localmente o build de produção.
- `npm run lint`: executa oxlint com análise TypeScript e acessibilidade.
- `npm run test`: executa os testes do algoritmo.
- `npm run check`: executa lint, testes e build em sequência.

Para executar a validação completa:

```bash
npm run check
```

No Windows, `scripts.ps1` oferece um menu auxiliar para instalação, desenvolvimento e build usando NVM para selecionar o Node.js 22.12. A opção de preview do helper ainda referencia `npm run preview:open`; até ela ser alinhada aos scripts do projeto, utilize diretamente `npm run preview`.

## Configuração futura

- Checkout do ebook: alterar `EBOOK_CHECKOUT_URL` em `src/config/app.ts`.
- Conteúdo e perguntas: editar os objetos tipados em `src/data/`.
- Analytics: integrar um provedor em `src/lib/analytics.ts`.

Consulte `DOCS/Documentacao-Aplicacao.md` para arquitetura, algoritmo, persistência e integrações. O histórico de mudanças fica em `DOCS/Historico-Atualizacoes.md`.
