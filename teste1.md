1. Objetivos do Projeto

Criar o campo 'código 175' no cadastro de clientes e dar suporte nos processos de exportação e importação de cadastro de clientes.


2. Declaração de Escopo da Necessidade do Cliente

2.1. Resumo Gerencial
Este projeto tem como objetivo principal aprimorar a gestão do cadastro de clientes no Sistema XPTO, um produto de gestão e controladoria de fundos de investimento. A demanda visa à **criação de um novo campo, "Código 175", no cadastro de clientes**, e a **adequação dos processos de exportação e importação** para suportar essa nova informação. As funcionalidades alteradas incluem:

*   **Cadastro de Cliente (P0986):** Inclusão de um novo campo "Código 175" com validações de formato, tamanho e unicidade.
*   **Exportação de Cadastro de Clientes (XML) (P1220):** Adição do campo "Código 175" em todos os layouts de exportação (CSVBR, XML v1.00 e XML v2.00).
*   **Cadastro do Proc.Import. de Cadastro de Cliente (P0200):** Adição de configuração para o campo "Código 175" na "Parte 4" para mapeamento de importação, incluindo tipo e tamanho esperado.
*   **Importação do Cadastro de Clientes (P0203):** Adaptação do processo de importação para reconhecer e processar o "Código 175" com validações de formato, tamanho e duplicidade, gerando logs detalhados para erros.

O projeto deve ser entregue em março de 2026 e será entregue apenas na versão modernizada do sistema.

2.2 Restrições do projeto
- Deve ser entregue em março de 2026

2.3 Premissas do projeto
- O projeto será entregue apenas na versão modernizada do sistema

3. Funcionalidades Novas

4. Funcionalidades alteradas

4.1 FA0010 - Cadastro de Cliente

   - **Adicionar campo 'Código 175' na aba principal:**
     - O campo deve ser numérico, com 6 dígitos.
     - O preenchimento do campo será opcional.
     - Validações:
       - O campo deve aceitar apenas números.
       - Se preenchido, deve conter exatamente 6 dígitos.
       - **Não deve permitir duplicidade.** Caso o usuário tente gravar um registro com um 'Código 175' já existente, o sistema deve exibir uma mensagem de erro e impedir a gravação do registro.

4.2 FA0020 - Exportação de Cadastro de Clientes (XML)

   **Detalhamento da Alteração:**
   - O campo "Código 175" deverá ser incluído em todos os layouts de exportação desta funcionalidade.

   **Formato CSVBR - Campos Exportados (INCLUINDO "Código 175")**

   | # | Campo | Tipo | Descrição |
   |---|---|---|---|
   | 1 | AssessorID | Numérico | Código do assessor |
   | 2 | NomeAss | Texto | Nome do assessor principal |
   | 3 | NomeAss2 | Texto | Nome do assessor secundário |
   | 4 | Cliente | Numérico | Código único do cliente |
   | 5 | Nome | Texto | Nome completo do cliente titular |
   | 6 | TipoPessoa | Texto | Tipo de pessoa (Física/Jurídica) |
   | 7 | Nome2 | Texto | Nome do cotitular (se houver) |
   | 8 | Assessor | Numérico | Código do assessor (duplicata) |
   | 9 | Endereco | Texto | Endereço completo |
   | 10 | CEP | Texto | CEP formatado (99999-999) |
   | 11 | Cidade | Texto | Nome da cidade |
   | 12 | Estado | Texto | Sigla do estado (UF) |
   | 13 | CPFCGC | Texto | CPF/CNPJ formatado do titular |
   | 14 | Banco | Numérico | Código do banco |
   | 15 | Agencia | Texto | Código da agência |
   | 16 | Conta | Texto | Número da conta |
   | 17 | Assessor2 | Numérico | Código do assessor secundário |
   | 18 | DataNascTit | Data | Data de nascimento do titular |
   | 19 | DataNascCoTit | Data | Data de nascimento do cotitular |
   | 20 | Telefone | Texto | Número de telefone |
   | 21 | DigitoAlfa | Texto | Dígito alfanumérico |
   | 22 | Digito | Numérico | Dígito verificador |
   | 23 | TipoImunidade | Numérico | Código do tipo de imunidade |
   | 24 | MesEncBal | Numérico | Mês de encerramento do balanço |
   | 25 | AliqIe | Decimal | Alíquota de IE |
   | 26 | bCliRatIR | Texto | Cliente sujeito a rateio de IR (SIM/NÃO) |
   | 27 | bCliIseIOF | Texto | Cliente isento de IOF (SIM/NÃO) |
   | 28 | bCliIseIRRV | Texto | Cliente isento de IRRV (SIM/NÃO) |
   | 29 | bCliSupIseIRRF | Texto | Cliente superior isento de IRRF (SIM/NÃO) |
   | 30 | bCliIseIRRF | Texto | Cliente isento de IRRF (SIM/NÃO) |
   | 31 | bCliBlqRgt | Texto | Cliente bloqueado para resgate (SIM/NÃO) |
   | 32 | bCliIseIR94 | Texto | Cliente isento de IR 94 (SIM/NÃO) |
   | 33 | bCliFAC | Texto | Cliente FAC (SIM/NÃO) |
   | 34 | bCliDepDIRF | Texto | Cliente depende DIRF (SIM/NÃO) |
   | 35 | bCliImuneDIRF | Texto | Cliente imune DIRF (SIM/NÃO) |
   | 36 | bCliIse98 | Texto | Cliente isento 98 (SIM/NÃO) |
   | 37 | bCliIseLiminar | Texto | Cliente isento liminar (SIM/NÃO) |
   | 38 | bCliIseAIR | Texto | Cliente isento AIR (SIM/NÃO) |
   | 39 | bCorrespBloq | Texto | Correspondente bloqueado (SIM/NÃO) |
   | 40 | CodBanco | Numérico | Código do banco |
   | 41 | AgenciaID | Numérico | ID da agência |
   | 42 | DataHoraCorp | Data/Hora | Data e hora corporativa |
   | 43 | bCliFCE | Texto | Cliente FCE (SIM/NÃO) |
   | 44 | bFlagUsuario | Texto | Flag usuário (SIM/NÃO) |
   | 45 | BancoDepJud | Numérico | Banco depósito judicial |
   | 46 | AgenciaDepJud | Texto | Agência depósito judicial |
   | 47 | ContaDepJud | Texto | Conta depósito judicial |
   | 48 | CodCliCorp | Texto | Código cliente corporativo |
   | 49 | Distribuidor | Texto | Nome do distribuidor |
   | 50 | status | Texto | Status do cliente (Ativo/Inativo/Encerrado) |
   | 51 | blqApl | Texto | Bloqueio aplicação (SIM/NÃO) |
   | 52 | ClasseInvANBID | Texto | Classe de investidor ANBID |
   | 53 | CdGalgo | Numérico | Código Galgo |
   | 54 | PrfCVM | Texto | Perfil CVM |
   | 55 | TpPesCotitular | Texto | Tipo pessoa cotitular (Física/Jurídica) |
   | 56 | bCmpsPrej | Texto | Campos prejudicados (SIM/NÃO) |
   | 57 | bExigInctvOpRDIP | Texto | Exige incentivo op RDIP (SIM/NÃO) |
   | 58 | CdPais | Numérico | Código do país |
   | 59 | Pais | Texto | Nome do país |
   | 60 | CPFCGC2 | Texto | CPF/CNPJ formatado do cotitular |
   | 61 | bCliBvsp | Texto | Cliente BVSP (SIM/NÃO) |
   | 62 | bCliParFisc | Texto | Cliente paraíso fiscal (SIM/NÃO) |
   | 63 | bDomicilioExt | Texto | Domicílio exterior (SIM/NÃO) |
   | 64 | **Codigo175** | **Numérico** | **Código 175 do Cliente** |

   **Características Específicas do Novo Campo "Codigo175" no Formato CSVBR:**

   *   **Tipo:** Numérico
   *   **Descrição:** Código 175 do Cliente
   *   **Preenchimento:** Opcional.
   *   **Valores Nulos:** Será exportado como "0" se o campo não estiver preenchido no cadastro do cliente.

   **Formato XML - Versão 1.00 - DEPOIS da inclusão do "Código 175"**

   ```xml
   <?xml version="1.0" encoding="ISO-8859-1" ?>
   <exportador-cadastro-clientes>
     <versao>1.00</versao>
     <sistema-origem></sistema-origem>
     <sistema-destino></sistema-destino>
     <tipo-geracao-arquivo></tipo-geracao-arquivo>
     <data-hora-exportacao></data-hora-exportacao>
     <cliente>
       <codigo-sistema-cliente></codigo-sistema-cliente>
       <codigo-sistema-origem></codigo-sistema-origem>
       <nome-completo></nome-completo>
       <tipo-pessoa></tipo-pessoa>
       <cpf-cnpj></cpf-cnpj>
       <data-nascimento-constituicao></data-nascimento-constituicao>
       <endereco></endereco>
       <cep></cep>
       <cidade></cidade>
       <uf></uf>
       <tipo-meio-contato></tipo-meio-contato>
       <meio-contato></meio-contato>
       <codigo-175></codigo-175>  <!-- NOVO CAMPO -->
     </cliente>
     <total-registros></total-registros>
   </exportador-cadastro-clientes>
   ```
   **Características Específicas do Novo Campo "codigo-175" no Formato XML v1.00:**

   *   **Tag:** `<codigo-175>`
   *   **Conteúdo:** Valor do Código 175 do cliente.
   *   **Preenchimento:** Opcional.
   *   **Vazio:** A tag deve ser exportada mesmo que o campo esteja vazio no cadastro.

   **Formato XML - Versão 2.00 - DEPOIS da inclusão do "Código 175"**

   ```xml
   <?xml version="1.0" encoding="ISO-8859-1" ?>
   <exportador-cadastro-clientes>
     <versao>2.00</versao>
     <sistema-origem></sistema-origem>
     <sistema-destino></sistema-destino>
     <tipo-geracao-arquivo></tipo-geracao-arquivo>
     <data-hora-exportacao></data-hora-exportacao>
     <cliente>
       <codigo-sistema-cliente></codigo-sistema-cliente>
       <codigo-sistema-origem></codigo-sistema-origem>
       <nome-completo></nome-completo>
       <tipo-pessoa></tipo-pessoa>
       <cpf-cnpj></cpf-cnpj>
       <data-nascimento-constituicao></data-nascimento-constituicao>
       <endereco></endereco>
       <cep></cep>
       <cidade></cidade>
       <uf></uf>
       <tipo-meio-contato></tipo-meio-contato>
       <meio-contato></meio-contato>
       <codigo-distribuidor></codigo-distribuidor>
       <codigo-pco></codigo-pco>
       <banco></banco>
       <agencia></agencia>
       <agencia-dv></agencia-dv>
       <contacorrente></contacorrente>
       <contacorrente-dv></contacorrente-dv>
       <isento-ir-94></isento-ir-94>
       <isento-ir-rv></isento-ir-rv>
       <isento-ir-rf></isento-ir-rf>
       <isento-ir></isento-ir>
       <isento-liminar-mp-2222></isento-liminar-mp-2222>
       <isento-antecipacao-ir></isento-antecipacao-ir>
       <isento-iof></isento-iof>
       <isento-iof-aplicacao></isento-iof-aplicacao>
       <compensa-prejuizo></compensa-prejuizo>
       <agrega-prejuizo></agrega-prejuizo>
       <cliente-nao-residente></cliente-nao-residente>
       <aliquota-ir-investidor-estrangeiro></aliquota-ir-investidor-estrangeiro>
       <codigo-175></codigo-175>  <!-- NOVO CAMPO -->
     </cliente>
     <total-registros></total-registros>
   </exportador-cadastro-clientes>
   ```

   **Características Específicas do Novo Campo "codigo-175" no Formato XML v2.00:**

   *   **Tag:** `<codigo-175>`
   *   **Conteúdo:** Valor do Código 175 do cliente.
   *   **Preenchimento:** Opcional.
   *   **Vazio:** A tag deve ser exportada mesmo que o campo esteja vazio no cadastro.

4.3 FA0030 - Cadastro do Proc.Import. de Cadastro de Cliente

   - **Adicionar configuração para o campo 'Código 175' na "Parte 4":**
     - O campo 'Código 175' será adicionado como uma opção de mapeamento na "Parte 4\".
     - **Nome do Campo para Mapeamento:** Código 175
     - **Tipo:** Numérico
     - **Tamanho Esperado:** 6 dígitos
     - **Preenchimento:** Opcional (se não preenchido no arquivo de importação, o campo permanecerá vazio no cadastro do cliente, a menos que haja uma regra de preenchimento padrão a ser definida posteriormente).
     - **Validação na Importação (detalhada na P0203 - Importação do Cadastro de Clientes):**
       - Se o campo 'Código 175' estiver presente no arquivo de importação e preenchido, ele deverá conter exatamente 6 dígitos numéricos. Se não, o registro de importação deverá ser sinalizado com erro.
       - Durante o processo de importação, será realizada a validação de duplicidade. Se um 'Código 175' no arquivo de importação já existir no sistema para outro cliente, a importação desse registro específico deverá falhar, e uma mensagem de erro clara deve ser gerada no log de importação.

   **Como a "Parte 4" ficaria na documentação para o cadastro do processo de importação:**

   *   **Parte 4**
       *   DV Conta
       *   Cliente Corporativo
       *   Código do Município IBGE
       *   Tipo de Pessoa Jurídica
       *   **Código 175** (Numérico, 6 dígitos, Opcional)

4.4 FA0040 - Importação do Cadastro de Clientes

   - **Detalhamento da Alteração:**
     - O processo de Importação do Cadastro de Clientes (P0203) utilizará as configurações de mapeamento e validação do campo "Código 175" definidas no "Cadastro do Processo de Importação de Cadastro de Clientes" (P0200).

   - **Comportamento do Campo 'Código 175' durante a Importação:**
     - **Mapeamento:** O valor do campo "Código 175" presente no arquivo de importação (conforme layout configurado no P0200) será mapeado para o novo campo "Código 175" na aba principal do cadastro de clientes (P0986).

     - **Validações de Formato e Tamanho:**
       - Para cada registro no arquivo de importação, se o campo "Código 175" estiver preenchido, o sistema deve validar se ele contém exatamente 6 dígitos numéricos.
       - Se esta validação falhar (ex: menos de 6 dígitos, caracteres não numéricos), o registro de importação será **rejeitado**, e uma mensagem de erro específica ("Formato ou tamanho inválido para o Código 175") será registrada no log de importação.

     - **Validação de Duplicidade:**
       - Para cada "Código 175" presente em um registro do arquivo de importação (ou seja, não vazio), o sistema deverá verificar se esse valor já existe no campo "Código 175" de *qualquer outro cliente* já cadastrado no Sistema XPTO.
       - Se uma duplicidade for encontrada (o "Código 175" do registro a ser importado já pertence a outro cliente existente com um "Código 175" preenchido), o registro de importação será **rejeitado**, e uma mensagem de erro clara indicando "Código 175 duplicado" será registrada no log de importação.
       - Esta validação de duplicidade se aplica tanto para a inclusão de novos clientes quanto para a atualização de clientes existentes, garantindo a unicidade do "Código 175" em todo o sistema.

     - **Comportamento com Campo Vazio:** Se o campo "Código 175" no arquivo de importação estiver vazio, o campo correspondente no cadastro do cliente (seja um novo cadastro ou uma atualização de um campo previamente vazio) permanecerá vazio, sem disparar erros de validação de formato ou duplicidade para este campo específico.

     - **Log de Importação:** Todos os erros de validação relacionados ao "Código 175", incluindo formato/tamanho e duplicidade, deverão ser claramente detalhados no arquivo de LOG gerado pelo processo de importação.

5. Critérios de aceite

**5.1 Para a funcionalidade 4.1 FA0010 - Cadastro de Cliente:**

*   **CA1:** O sistema deve apresentar o campo "Código 175" na aba principal do cadastro de clientes.
*   **CA2:** O campo "Código 175" deve permitir a inserção apenas de caracteres numéricos.
*   **CA3:** Quando preenchido, o campo "Código 175" deve aceitar exatamente 6 (seis) dígitos. Se o número de dígitos for diferente de 6, o sistema deve exibir uma mensagem de erro e impedir a gravação.
*   **CA4:** O preenchimento do campo "Código 175" é opcional.
*   **CA5:** Se o campo "Código 175" for preenchido com um valor que já existe para outro cliente, o sistema deve exibir uma mensagem de erro ("Código 175 já existe no sistema") e impedir a gravação do registro.

**5.2 Para a funcionalidade 4.2 FA0020 - Exportação de Cadastro de Clientes (XML):**

*   **CA1:** No formato CSVBR, o arquivo de exportação deve incluir o campo "Codigo175" como o 64º campo, com tipo Numérico.
*   **CA2:** No formato CSVBR, se o campo "Código 175" não estiver preenchido no cadastro do cliente, o campo "Codigo175" no arquivo CSVBR deve ser exportado como "0".
*   **CA3:** No formato XML - Versão 1.00, o arquivo de exportação deve incluir a tag `<codigo-175>` dentro da tag `<cliente>`.
*   **CA4:** No formato XML - Versão 1.00, se o campo "Código 175" não estiver preenchido no cadastro do cliente, a tag `<codigo-175>` no XML deve ser exportada como uma tag vazia.
*   **CA5:** No formato XML - Versão 2.00, o arquivo de exportação deve incluir a tag `<codigo-175>` dentro da tag `<cliente>`.
*   **CA6:** No formato XML - Versão 2.00, se o campo "Código 175" não estiver preenchido no cadastro do cliente, a tag `<codigo-175>` no XML deve ser exportada como uma tag vazia.
*   **CA7:** Para todos os layouts de exportação, o valor exportado para o "Código 175" deve corresponder exatamente ao valor cadastrado para o cliente no sistema.

**5.3 Para a funcionalidade 4.3 FA0030 - Cadastro do Proc.Import. de Cadastro de Cliente:**

*   **CA1:** O campo "Código 175" deve estar disponível para configuração e mapeamento na "Parte 4" do "Cadastro de Processo de Importação de Cadastro de Clientes".
*   **CA2:** Ao configurar o mapeamento para o "Código 175", o sistema deve permitir a definição de seu tipo como Numérico e tamanho esperado como 6 dígitos.

**5.4 Para a funcionalidade 4.4 FA0040 - Importação do Cadastro de Clientes:**

*   **CA1:** O processo de importação deve mapear corretamente o valor do campo "Código 175" do arquivo de entrada para o campo "Código 175" no cadastro do cliente (P0986), de acordo com a configuração feita no P0200.
*   **CA2:** Se um registro no arquivo de importação contiver um "Código 175" preenchido que não seja numérico ou não tenha exatamente 6 dígitos, o registro deve ser rejeitado e uma mensagem de erro ("Formato ou tamanho inválido para o Código 175") deve ser registrada no log de importação.
*   **CA3:** Se um registro no arquivo de importação contiver um "Código 175" preenchido que já exista para outro cliente no sistema, o registro deve ser rejeitado e uma mensagem de erro ("Código 175 duplicado") deve ser registrada no log de importação.
*   **CA4:** Se o campo "Código 175" no arquivo de importação estiver vazio, o campo correspondente no cadastro do cliente (seja um novo cadastro ou uma atualização de um campo previamente vazio) permanecerá vazio, sem disparar erros de validação de formato ou duplicidade para este campo específico.
*   **CA5:** O log de importação deve detalhar claramente todos os registros rejeitados e os motivos específicos (formato/tamanho inválido, duplicidade, etc.) para o campo "Código 175".