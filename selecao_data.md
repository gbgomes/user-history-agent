### Nome do componente
Seleção de Data

### Descrição detalhada do componente
Este é um componente de interface padrão que permite ao usuário selecionar uma data específica. A seleção pode ser feita de duas maneiras:

- **Digitação Direta**: O usuário pode digitar a data diretamente no campo, no formato DD/MM/AAAA.
- **Seleção Visual**: O usuário pode clicar em um ícone de calendário ao lado do campo para abrir um seletor visual (calendário) e escolher a data desejada.

Uma vez selecionada, a data é exibida no campo no formato padrão (DD/MM/AAAA).

### Regras de negócio do componente
Ao sugerir este componente, a LLM deve perguntar ao PO sobre as seguintes regras:

- **Preenchimento Automático por Carteira**: Se a tela também possuir um componente de seleção de carteiras, a LLM deve perguntar ao PO se a data deve ser preenchida automaticamente com base em algum evento ou data associada à(s) carteira(s) selecionada(s) (ex: data de abertura da carteira, data da última movimentação, data de cotação).
- **Valor Padrão**: A LLM deve perguntar ao PO se o campo de data deve ser preenchido com um valor padrão ao abrir a tela, como a data atual ("D-0") ou se deve iniciar em branco.
- **Restrição de Período**: A LLM deve verificar com o PO se a seleção de data deve ser limitada. Por exemplo, se o usuário pode selecionar apenas datas passadas, apenas datas futuras, ou se a seleção é livre.
- **Restrição a Dias Úteis**: A LLM deve perguntar ao PO se o calendário deve permitir a seleção apenas de dias úteis, desabilitando sábados, domingos e feriados.

### Validações do componente
Ao detalhar a funcionalidade, a LLM deve sugerir as seguintes validações para o componente:

- **Validação de Formato**: Ao digitar, o sistema deve validar se a data está no formato correto (DD/MM/AAAA). Caso contrário, uma mensagem de erro como "Formato de data inválido. Utilize DD/MM/AAAA." deve ser exibida.
- **Validação de Data Válida**: O sistema deve validar se a data digitada é uma data real (ex: 30/02/2025 não é válido). Caso contrário, uma mensagem como "Data inválida." deve ser exibida.
- **Validação de Obrigatoriedade**: Se o campo de data for obrigatório, o sistema deve validar se uma data foi preenchida antes de prosseguir. Caso contrário, deve exibir uma mensagem de erro como "O campo de data é obrigatório."
- **Validação de Restrição de Período**: Se houver uma regra de negócio que restrinja o período (ex: apenas datas futuras), o sistema deve validar a data selecionada e exibir uma mensagem de erro apropriada se a regra for violada (ex: "A data não pode ser anterior à data atual.").
