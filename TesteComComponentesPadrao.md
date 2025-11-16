1. Objetivos do Projeto
[Ainda a ser definido. PO não forneceu os objetivos do projeto.]


2. Declaração de Escopo da Necessidade do Cliente

2.1. Resumo Gerencial
Este projeto visa à inclusão do campo "Código 175" no "Cadastro de Clientes" (P0986) do Sistema XPTO. Este novo campo, numérico de 6 dígitos e de preenchimento obrigatório no cadastro, impactará as funcionalidades de exportação e importação de clientes. As alterações no processo de exportação (P1220) incluirão o "Código 175" nos layouts CSVBR e XML, com tratamento para registros antigos sem preenchimento, gerando um log e comunicação ao usuário. No processo de importação (P0203), o campo será tratado conforme configurado em P0200, resultando na não importação de registros específicos sem o "Código 175" e em um relatório de erros ao usuário. O "Cadastro de Processo de Importação de Cadastro de Clientes" (P0200) será atualizado para permitir a configuração opcional do "Código 175" nos layouts de importação. O escopo principal é garantir a consistência e a integração do novo identificador em todo o ciclo de vida do cliente no sistema.

2.2 Restrições do projeto
[Ainda a ser definido.]

2.3 Premissas do projeto
[Ainda a ser definido.]

3. Funcionalidades Novas
[Não foram informadas funcionalidades novas para este projeto.]
        
4. Funcionalidades alteradas
        
4.1 FA0986 - Cadastro de Cliente

**Detalhes do Campo "Código 175" na Tela de Cadastro de Clientes:**

*   **Localização:** O novo campo "Código 175" será incluído na **Aba Parâmetros** da tela de "Cadastro de Cliente".
*   **Tipo de Dados:** Numérico.
*   **Tamanho:** O campo aceitará a inserção de 6 dígitos.
*   **Obrigatoriedade:** Este campo é de **preenchimento obrigatório**.
*   **Validação:** Caso o usuário tente salvar um registro de cliente sem preencher o "Código 175", o sistema deverá exibir uma mensagem de erro clara, como "O campo Código 175 é de preenchimento obrigatório.", e impedir a conclusão da operação de salvamento até que o campo seja devidamente preenchido.

4.2 FA1220 - Exportação de Cadastro de Clientes (XML)

#### Formato CSVBR - Exportação de Cadastro de Clientes

**Campos Exportados (com a inclusão do "Código 175" no final):**

| #   | Campo               | Tipo      | Descrição                                                                       |
| :-- | :------------------ | :-------- | :------------------------------------------------------------------------------ |
| 1   | AssessorID          | Numérico  | Código do assessor                                                              |
| 2   | NomeAss             | Texto     | Nome do assessor principal                                                      |
| 3   | NomeAss2            | Texto     | Nome do assessor secundário                                                     |
| 4   | Cliente             | Numérico  | Código único do cliente                                                         |
| 5   | Nome                | Texto     | Nome completo do cliente titular                                                |
| 6   | TipoPessoa          | Texto     | Tipo de pessoa (Física/Jurídica)                                                |
| 7   | Nome2               | Texto     | Nome do cotitular (se houver)                                                   |
| 8   | Assessor            | Numérico  | Código do assessor (duplicata)                                                  |
| 9   | Endereco            | Texto     | Endereço completo                                                               |
| 10  | CEP                 | Texto     | CEP formatado (99999-999)                                                       |
| 11  | Cidade              | Texto     | Nome da cidade                                                                  |
| 12  | Estado              | Texto     | Sigla do estado (UF)                                                            |
| 13  | CPFCGC              | Texto     | CPF/CNPJ formatado do titular                                                   |
| 14  | Banco               | Numérico  | Código do banco                                                                 |
| 15  | Agencia             | Texto     | Código da agência                                                               |\
| 16  | Conta               | Texto     | Número da conta                                                                 |
| 17  | Assessor2           | Numérico  | Código do assessor secundário                                                   |
| 18  | DataNascTit         | Data      | Data de nascimento do titular                                                   |
| 19  | DataNascCoTit       | Data      | Data de nascimento do cotitular                                                 |
| 20  | Telefone            | Texto     | Número de telefone                                                              |
| 21  | DigitoAlfa          | Texto     | Dígito alfanumérico                                                             |
| 22  | Digito              | Numérico  | Dígito verificador                                                              |
| 23  | TipoImunidade       | Numérico  | Código do tipo de imunidade                                                     |
| 24  | MesEncBal           | Numérico  | Mês de encerramento do balanço                                                  |
| 25  | AliqIe              | Decimal   | Alíquota de IE                                                                  |
| 26  | bCliRatIR           | Texto     | Cliente sujeito a rateio de IR (SIM/NÃO)                                        |
| 27  | bCliIseIOF          | Texto     | Cliente isento de IOF (SIM/NÃO)                                                 |
| 28  | bCliIseIRRV         | Texto     | Cliente isento de IRRV (SIM/NÃO)                                                |
| 29  | bCliSupIseIRRF      | Texto     | Cliente superior isento de IRRF (SIM/NÃO)                                       |
| 30  | bCliIseIRRF         | Texto     | Cliente isento de IRRF (SIM/NÃO)                                                |
| 31  | bCliBlqRgt          | Texto     | Cliente bloqueado para resgate (SIM/NÃO)                                        |
| 32  | bCliIseIR94         | Texto     | Cliente isento de IR 94 (SIM/NÃO)                                               |
| 33  | bCliFAC             | Texto     | Cliente FAC (SIM/NÃO)                                                           |
| 34  | bCliDepDIRF         | Texto     | Cliente depende DIRF (SIM/NÃO)                                                  |
| 35  | bCliImuneDIRF       | Texto     | Cliente imune DIRF (SIM/NÃO)                                                    |
| 36  | bCliIse98           | Texto     | Cliente isento 98 (SIM/NÃO)                                                     |
| 37  | bCliIseLiminar      | Texto     | Cliente isento liminar (SIM/NÃO)                                                |
| 38  | bCliIseAIR          | Texto     | Cliente isento AIR (SIM/NÃO)                                                    |
| 39  | bCorrespBloq        | Texto     | Correspondente bloqueado (SIM/NÃO)                                              |
| 40  | CodBanco            | Numérico  | Código do banco                                                                 |
| 41  | AgenciaID           | Numérico  | ID da agência                                                                   |
| 42  | DataHoraCorp        | Data/Hora | Data e hora corporativa                                                         |
| 43  | bCliFCE             | Texto     | Cliente FCE (SIM/NÃO)                                                           |
| 44  | bFlagUsuario        | Texto     | Flag usuário (SIM/NÃO)                                                          |
| 45  | BancoDepJud         | Numérico  | Banco depósito judicial                                                         |
| 46  | AgenciaDepJud       | Texto     | Agência depósito judicial                                                       |
| 47  | ContaDepJud         | Texto     | Conta depósito judicial                                                         |
| 48  | CodCliCorp          | Texto     | Código cliente corporativo                                                      |
| 49  | Distribuidor        | Texto     | Nome do distribuidor                                                            |
| 50  | status              | Texto     | Status do cliente (Ativo/Inativo/Encerrado)                                     |
| 51  | blqApl              | Texto     | Bloqueio aplicação (SIM/NÃO)                                                    |
| 52  | ClasseInvANBID      | Texto     | Classe de investidor ANBID                                                      |
| 53  | CdGalgo             | Numérico  | Código Galgo                                                                    |
| 54  | PrfCVM              | Texto     | Perfil CVM                                                                      |
| 55  | TpPesCotitular      | Texto     | Tipo pessoa cotitular (Física/Jurídica)                                         |
| 56  | bCmpsPrej           | Texto     | Campos prejudicados (SIM/NÃO)                                                   |
| 57  | bExigInctvOpRDIP    | Texto     | Exige incentivo op RDIP (SIM/NÃO)                                               |
| 58  | CdPais              | Numérico  | Código do país                                                                  |
| 59  | Pais                | Texto     | Nome do país                                                                    |
| 60  | CPFCGC2             | Texto     | CPF/CNPJ formatado do cotitular                                                 |
| 61  | bCliBvsp            | Texto     | Cliente BVSP (SIM/NÃO)                                                          |
| 62  | bCliParFisc         | Texto     | Cliente paraíso fiscal (SIM/NÃO)                                                |
| 63  | bDomicilioExt       | Texto     | Domicílio exterior (SIM/NÃO)                                                    |
| **64** | **Codigo175**       | **Numérico** | **Novo campo: Código numérico de 6 dígitos para o cliente.**                  |

**Exemplo de Estrutura (com o novo campo no final):**
```
AssessorID;NomeAss;NomeAss2;Cliente;Nome;TipoPessoa;Nome2;Assessor;Endereco;CEP;Cidade;Estado;CPFCGC;Banco;Agencia;Conta;Assessor2;DataNascTit;DataNascCoTit;Telefone;DigitoAlfa;Digito;TipoImunidade;MesEncBal;AliqIe;bCliRatIR;bCliIseIOF;bCliIseIRRV;bCliSupIseIRRF;bCliIseIRRF;bCliBlqRgt;bCliIseIR94;bCliFAC;bCliDepDIRF;bCliImuneDIRF;bCliIse98;bCliIseLiminar;bCliIseAIR;bCorrespBloq;CodBanco;AgenciaID;DataHoraCorp;bCliFCE;bFlagUsuario;BancoDepJud;AgenciaDepJud;ContaDepJud;CodCliCorp;Distribuidor;status;blqApl;ClasseInvANBID;CdGalgo;PrfCVM;TpPesCotitular;bCmpsPrej;bExigInctvOpRDIP;CdPais;Pais;CPFCGC2;bCliBvsp;bCliParFisc;bDomicilioExt;Codigo175
1001;João Silva;Maria Santos;12345;EMPRESA ABC LTDA;Jurídica;Pedro Silva;1001;Rua das Flores, 123;12345-678;São Paulo;SP;12.345.678/0001-90;341;1234;56789-0;1002;15/03/1980;20/05/1985;(11) 98765-4321;A;9;0;12;5,25;NÃO;SIM;NÃO;NÃO;NÃO;NÃO;NÃO;SIM;NÃO;SIM;NÃO;NÃO;NÃO;NÃO;341;4567;10/01/2025 14:30:25;NÃO;SIM;0;;;;;;Ativo;NÃO;PJU - Pessoa Jurídica;9876;INV-QUALIF;Física;NÃO;SIM;76;Brasil;987.654.321-00;NÃO;NÃO;NÃO;123456
```

---

#### Formato XML - Versão 1.00

```xml
<?xml version="1.0" encoding="ISO-8859-1" ?>

<!-- (c)2019, Sinqia - http://www.sinqia.com.br -->

<!-- Início exportador - Cadastro Clientes -->
<exportador-cadastro-clientes>

  <!-- Início dos dados gerais do exportador -->
    <versao>1.00</versao>
    <sistema-origem></sistema-origem>
    <sistema-destino></sistema-destino>
    <tipo-geracao-arquivo></tipo-geracao-arquivo>
    <data-hora-exportacao></data-hora-exportacao>
  <!-- Fim dos dados gerais do exportador -->

  <!-- Início dos dados da exportação de cliente -->
    <cliente>
        <codigo-sistema-cliente></codigo-sistema-cliente>
        <codigo-sistema-origem></codigo-sistema-origem>
        <nome-completo></nome-completo>
        <tipo-pessoa></tipo-pessoa>
        <cpf-cnpj></cpf-cnpj>
        <codigo-175></codigo-175> <!-- Novo campo Código 175 -->
        <data-nascimento-constituicao></data-nascimento-constituicao>
        <endereco></endereco>
        <cep></cep>
        <cidade></cidade>
        <uf></uf>
        <tipo-meio-contato></tipo-meio-contato>
        <meio-contato></meio-contato>
    </cliente>
  <!-- Fim dos dados da exportação de cliente -->

  <!-- Totalizador de registros exportados -->
    <total-registros></total-registros>
  <!-- Fim do totalizador de registros exportados -->

</exportador-cadastro-clientes>
<!-- Fim exportador -->
```

---

#### Formato XML - Versão 2.00

```xml
<?xml version="1.0" encoding="ISO-8859-1" ?>

<!-- (c)2019, Sinqia - http://www.sinqia.com.br -->

<!-- Início exportador - Cadastro Clientes -->
<exportador-cadastro-clientes>

  <!-- Início dos dados gerais do exportador -->
    <versao>2.00</versao>
    <sistema-origem></sistema-origem>
    <sistema-destino></sistema-destino>
    <tipo-geracao-arquivo></tipo-geracao-arquivo>
    <data-hora-exportacao></data-hora-exportacao>
  <!-- Fim dos dados gerais do exportador -->

  <!-- Início dos dados da exportação de cliente -->
    <cliente>
        <codigo-sistema-cliente></codigo-sistema-cliente>
        <codigo-sistema-origem></codigo-sistema-origem>
        <nome-completo></nome-completo>
        <tipo-pessoa></tipo-pessoa>
        <cpf-cnpj></cpf-cnpj>
        <codigo-175></codigo-175> <!-- Novo campo Código 175 -->
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
        <isento-liminar-mp-2222></isento-liminar-mp-2222>\
        <isento-antecipacao-ir></isento-antecipacao-ir>
        <isento-iof></isento-iof>
        <isento-iof-aplicacao></isento-iof-aplicacao>
        <compensa-prejuizo></compensa-prejuizo>
        <agrega-prejuizo></agrega-prejuizo>
        <cliente-nao-residente></cliente-nao-residente>
        <aliquota-ir-investidor-estrangeiro></aliquota-ir-investidor-estrangeiro>
    </cliente>
  <!-- Fim dos dados da exportação de cliente -->

  <!-- Totalizador de registros exportados -->
    <total-registros></total-registros>
  <!-- Fim do totalizador de registros exportados -->

</exportador-cadastro-clientes>
<!-- Fim exportador -->
```

---

**Detalhamento Comum do Campo "Codigo 175" para Exportação e Log Final:**

*   **Campo:** `Codigo175` (CSVBR) / `<codigo-175>` (XML v1.00 e v2.00)
*   **Tipo:** Numérico.
*   **Tamanho:** 6 dígitos.
*   **Comportamento na Exportação:** Para cadastros existentes onde este campo não estiver preenchido, ele será exportado como uma string vazia ("" no CSVBR) ou o elemento XML será exportado vazio (`<codigo-175></codigo-175>`).
*   **Log e Comunicação Final:** Ao término do processo de exportação, o sistema deverá:
    1.  Gerar um log detalhado que registre todos os clientes cujos registros foram exportados com o campo "Codigo 175" em branco.
    2.  Comunicar essa informação de forma clara ao usuário que executou a exportação, indicando que nem todos os clientes possuíam o "Código 175" preenchido e que o log correspondente está disponível para consulta.

4.3 FA0203 - Importação do Cadastro de Clientes

**Detalhes do Campo "Código 175" na Importação de Clientes:**

*   **Comportamento da Importação:** Esta funcionalidade processará o "Código 175" conforme configurado no "Cadastro de Processo de Importação de Cadastro de Clientes" (P0200).
*   **Validação da Obrigatoriedade (se configurado no P0200):** Se o "Código 175" estiver configurado como parte do layout de importação no P0200, e um registro no arquivo de importação vier sem o preenchimento deste campo (ou seja, o campo estiver em branco ou ausente conforme a posição e tamanho definidos):
    *   O sistema deverá registrar o erro para o registro específico.
    *   O sistema **não deverá importar apenas aquele registro de cliente específico**, impedindo sua inclusão ou atualização no "Cadastro de Cliente" (P0986).
    *   O processamento dos demais registros válidos no arquivo de importação deverá continuar normalmente.
*   **Comunicação ao Usuário:** Ao final do processo de importação, o sistema deverá fornecer um relatório ou log claro para o usuário, detalhando quais registros não foram importados devido à ausência do "Código 175" (e quaisquer outros erros de validação).

4.4 FA0200 - Cadastro do Proc.Import. de Cadastro de Cliente

**Detalhes do Campo "Código 175" na Configuração de Processo de Importação:**

*   **Localização:** Será adicionado um novo item para a configuração do "Código 175" na "Parte 4" da tela de "Cadastro de Processo de Importação de Cadastro de Clientes".
*   **Configurações Disponíveis:** Este item permitirá ao usuário definir:
    *   **Posição:** A coluna inicial onde o "Código 175" é esperado no arquivo de importação.
    *   **Tamanho:** O número de caracteres (6 dígitos) que o campo "Código 175" ocupa no arquivo de importação.
*   **Opcionalidade da Configuração:** A configuração do campo "Código 175" neste processo (P0200) é **opcional**. Um processo de importação pode ser configurado para incluir ou não o "Código 175" em seu layout.
*   **Regra de Tratamento na Importação (se configurado):** Se um processo de importação for configurado para incluir o "Código 175" (ou seja, o usuário definiu sua Posição e Tamanho no P0200), e um registro dentro do arquivo de importação não tiver o "Código 175" preenchido:
    *   O sistema deverá informar ao usuário sobre a ausência do dado.
    *   O sistema **não deverá importar apenas aquele registro específico**, mas continuará o processamento dos demais registros válidos no arquivo de importação.
        
5. Critérios de aceite
[Ainda a ser definido.]