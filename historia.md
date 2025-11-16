1. Objetivos do Projeto
criar o campo código cvm no cadastro de clientes

2. Declaração de Escopo da Necessidade do Cliente
2.1. Resumo Gerencial
2.2 Restrições do projeto
entrega até março 2026

2.3 Premissas do projeto
o sistema deverá estar na versão modernizada

3. Funcionalidades Novas
não há funcionalidades novas

4. Funcionalidades alteradas
4.1 FA0986 - Cadastro de Cliente
- Incluir o campo "Código CVM" na aba "Parâmetros do Cliente".
- O campo "Código CVM" deve ser numérico.
- **Validação**: O sistema deve garantir que o "Código CVM" inserido contenha exatamente 6 dígitos numéricos.
- **Mensagem de Erro**: Caso o formato não seja atendido, exibir a mensagem "O Código CVM deve conter exatamente 6 dígitos numéricos."
- **Preenchimento automático**: O sistema deve preencher com zeros à esquerda se o usuário digitar menos de 6 dígitos?
4.2 FA0015 - Carteira de Outros Títulos
4.3 FA2059 - Informe de Fundo 157 para a CVM
4.4 FA1507 - Navegador de Perfil para Cálculo de Rentabilidade por Ativo (Gerencial)

5. Critérios de aceite
