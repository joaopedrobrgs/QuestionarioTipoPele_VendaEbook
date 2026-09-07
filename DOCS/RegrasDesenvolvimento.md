## Regras fixas de desenvolvimento: 

### Documentação

Documentação e Agents.md (agente do projeto) são obrigatórios.

### Princípio central da estrutura:

Conteúdo (`data/`) é sempre separado de apresentação (`components/`, `sections/`). Nenhum texto do site fica hardcoded em JSX — todo texto vem de um objeto/array tipado em `src/data/`. Isso facilita revisão de copy e futuras traduções/alterações de conteúdo sem tocar em lógica de UI.

### Componentes de UI reutilizáveis: 

Sempre que for benéfico, criar componentes reutilizaveis entre páginas e seçoes do projeto.

### SEO, Acessibilidade, Boas Práticas e Performance: 

Sempre focar em manter os valores perto de 100%.

### Responsividade (mobile-first): 

O projeto segue mobile-first tanto na escrita das classes Tailwind (estilo base = mobile, breakpoints `sm`/`md`/`lg` sobrescrevem para telas maiores) quanto na composição.

### Deploy: 

Não vamos focar em desploy por enquanto. A principio, vou fazer deploy via Vercel para ficar mais facil apresentar à cliente.

### Qualidade:

- Faça mudanças efetivas e seguras, mantendo consistência de nomeação,
  estrutura e formatação.
- Use pt-BR em comentários e identificadores de código quando seguro. Não use
  acentos em variáveis, IDs, classes, rotas, URLs ou nomes de arquivo.
- Trate estados de carregamento, erro e ausência de dados quando aplicáveis.
- Garanta acessibilidade mínima: HTML semântico, labels, foco visível,
  navegação por teclado e atributos ARIA corretos.
- Mantenha a estratégia mobile-first e respeite `prefers-reduced-motion` em
  animações, contadores, carrosséis e rolagem.
- Preserve desempenho: evite downloads ou JavaScript desnecessários na primeira
  dobra e mantenha o carregamento adiado de conteúdo não crítico quando
  aplicável.
- Nas alterações de `useEffect`, não inclua como dependência uma função criada
  no componente e executada pelo próprio effect quando isso puder causar loop;
  siga as exceções e os padrões documentados no código do projeto.

### Metodologia:

Antes de implementar:

1. Identifique o estado atual e os arquivos que provavelmente serão alterados.
2. Monte uma lista curta de etapas e defina critérios de aceite, incluindo
   desempenho quando o escopo afetar a interface.
3. Quando a tarefa não for trivial, explique resumidamente a mudança planejada
   e peça autorização antes de alterar código.

Durante a implementação:

1. Trabalhe por etapas e mantenha o projeto compilável após cada etapa relevante.
2. Reutilize componentes, dados, hooks e utilitários existentes antes de criar duplicações.
3. Prefira soluções que não introduzam renderizações, CPU, memória ou downloads desnecessários.
4. Quando as alterações forem estéticas, utilize sempre o navegador para validação

Depois de implementar:

1. Valide o fluxo completo e a ausência de regressões funcionais, visuais e de desempenho.
2. Verifique o encoding UTF-8 dos arquivos alterados.
3. Atualize `DOCs/Documentacao-Aplicacao.md` se arquitetura, estrutura,
   componentes, dados ou comportamento documentados forem modificados.
4. Quando a tarefa gerar commit, adicione uma entrada datada em
   `DOCs/Historico-Atualizacoes.md`, seguindo o padrão existente.
5. Forneça uma sugestão completa de mensagem de commit ao concluir a tarefa.