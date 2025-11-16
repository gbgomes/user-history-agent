### Nome do componente
Seleção de Período

### Descrição detalhada do componente
Este é um componente de interface padrão que permite ao usuário selecionar um período, definindo uma data de início e uma data de fim. A seleção de cada data pode ser feita de duas maneiras:

- **Digitação Direta**: O usuário pode digitar as datas diretamente nos campos de "Data Início" e "Data Fim", no formato DD/MM/AAAA.
- **Seleção Visual**: O usuário pode clicar em um ícone de calendário ao lado de cada campo para abrir um seletor visual e escolher a data desejada.

Uma vez selecionadas, as datas são exibidas nos campos no formato padrão (DD/MM/AAAA).

### Regras de negócio do componente
Ao sugerir este componente, a LLM deve perguntar ao PO sobre as seguintes regras:

- **Preenchimento Automático por Carteira**: Se a tela também possuir um componente de seleção de carteiras, a LLM deve perguntar ao PO se o período (data de início e/ou fim) deve ser preenchido automaticamente com base em algum evento ou data associada à(s) carteira(s) selecionada(s).
- **Valores Padrão**: A LLM deve perguntar ao PO se os campos de data devem ser preenchidos com valores padrão ao abrir a tela (ex: "Início do mês até data atual", "Últimos 30 dias") ou se devem iniciar em branco.
- **Restrição de Período Máximo**: A LLM deve verificar com o PO se existe um limite máximo para o intervalo entre a data de início e a data de fim (ex: "o período não pode ser maior que 90 dias").
- **Restrição a Dias Úteis**: A LLM deve perguntar ao PO se os calendários devem permitir a seleção apenas de dias úteis, desabilitando sábados, domingos e feriados.

### Validações do componente
Ao detalhar a funcionalidade, a LLM deve sugerir as seguintes validações para o componente:

- **Validação de Consistência do Período**: O sistema deve validar se a "Data Fim" é maior ou igual à "Data Início". Caso contrário, uma mensagem de erro como "A data final não pode ser anterior à data inicial." deve ser exibida.
- **Validação de Formato**: Ao digitar, o sistema deve validar se ambas as datas estão no formato correto (DD/MM/AAAA). Caso contrário, uma mensagem de erro como "Formato de data inválido. Utilize DD/MM/AAAA." deve ser exibida.
- **Validação de Data Válida**: O sistema deve validar se as datas digitadas são datas reais (ex: 30/02/2025 não é válido). Caso contrário, uma mensagem como "Data inválida." deve ser exibida.
- **Validação de Obrigatoriedade**: Se o preenchimento do período for obrigatório, o sistema deve validar se tanto a "Data Início" quanto a "Data Fim" foram preenchidas antes de prosseguir. Caso contrário, deve exibir uma mensagem de erro como "É necessário informar o período completo (data de início e fim)."
- **Validação de Período Máximo**: Se houver uma regra de negócio que limite o intervalo do período, o sistema deve validar a diferença entre as datas e exibir uma mensagem de erro apropriada se a regra for violada (ex: "O período selecionado excede o limite máximo de 90 dias.").
