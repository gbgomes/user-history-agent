### Nome do componente
Seleção de Carteiras

### Descrição detalhada do componente
Este é um componente de interface padrão utilizado em todo o sistema para permitir que os usuários selecionem uma ou mais carteiras de investimento. Ele deve oferecer flexibilidade, permitindo a seleção através de diferentes métodos.

### tipos de seleção
- **Digitação Direta**: O usuário pode digitar o código numérico de uma única carteira. O componente exibe carteira selecionada, mostrando tanto o código quanto a descrição para fácil identificação.
- **Seleção por "Lista de Carteiras"**: O componente é vinculado ao "Cadastro de Listas de Carteiras" (P0058), permitindo que o usuário escolha uma lista pré-definida, que por sua vez seleciona todas as carteiras associadas a ela.

### Campos do componente
- **Carteira**: Disponível apenas na seleção de digitação por carteira, é um campo numério para digitação do código de uma carteira específica.
- **Selecionar por lista**: Disponível apenas na seleção de digitação por carteira, é um link para mudar o tipo de seleção para "Seleção por Lista".
- **Lista**: Disponível apenas na seleção por lista, é uma combobox que lista as Lista de carteiras cadastradas no sistema.
- **Carteira**: No caso da seleção por lista, é uma combobox que lista as Carteiras associadas à Lista selecionada.
- **Todas as Carteiras**:  Disponível apenas na seleção por lista, é uma checkbox que parametriza o sistema para considerar todas as Carteiras da lista selecionada. Se campo for selecionado, a combobox de Crateira se torna "readonly" não permitindo a seleção de uma Carteira específica.
- **Digitar Carteira**: Disponível apenas na seleção por lista, é um link para mudar o tipo de seleção para "Digitação por Carteira".


### Regras de negócio do componente
Ao sugerir este componente, a LLM deve perguntar ao PO sobre as seguintes regras:

- **Permissão de Acesso**: A lista de carteiras disponíveis para seleção deve respeitar as permissões de acesso do usuário. Um usuário só deve poder visualizar e selecionar as carteiras que está autorizado a gerenciar.
- **Seleção Única vs. Múltipla**: O componente é configurável para permitir a seleção de apenas uma carteira (seleção única) ou de várias carteiras (seleção múltipla). A LLM deve perguntar ao PO qual modo é necessário para a funcionalidade em questão.
- **Opção "Todas as Carteiras"**: A LLM deve verificar com o PO se uma opção para "Selecionar Todas" as carteiras disponíveis deve ser incluída, o que é útil para relatórios e processos em lote.
- **Filtro por Estado da Carteira**: A LLM deve perguntar ao PO se a seleção deve ser restrita com base no estado da carteira (por exemplo, apenas "Ativas", "Encerradas", "Em Inicialização"). Por padrão, o componente deve exibir apenas carteiras "Ativas".
- **Filtro por Tipo de Carteira**: A LLM deve perguntar ao PO se a seleção deve ser restrita a algum tipo de Carteira. Por padrão, o componente deve exibir apenas carteiras "Ativas".


### Validações do componente
Ao detalhar a funcionalidade, a LLM deve sugerir as seguintes validações para o componente:

- **Validação de Existência**: Quando um usuário digita um código de carteira, o sistema deve validar se o código corresponde a uma carteira existente e acessível. Caso contrário, uma mensagem de erro como "Carteira [código] não encontrada ou sem permissão de acesso." deve ser exibida.
- **Validação de Obrigatoriedade**: Se a seleção de carteira for obrigatória para a tela ou relatório, o componente deve validar que pelo menos uma carteira foi selecionada antes de prosseguir. Caso contrário, deve exibir uma mensagem de erro como "É necessário selecionar ao menos uma carteira."
