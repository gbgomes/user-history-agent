- Este documento lista os componentes de tela padrão do sistema.
- Com esta lista, a LLM poderá identificar e sugerir a inclusão de componentes nas telas do sistema para cada funcionalidade a ser especificada.
- Esse documento também fornece validações específicas de cada componente que a LLM deve sugerir ao PO para serem inseridas no detalhamanto da funcionalidade
- Esse documento também fornece algumas regras de negócio específicas de cada componente que devem ser perguntadas ao PO para serem inseridas no detalhamanto da funcionalidade



- como este documento é organizado
-- na sessão "Componentes" está a lista de componentes suportados até o momento
-- nesta sessão cada componente está orgamnizado da seguinte forma
--- Nome do componente: nome do componente em questão
--- Descrição do componente: descrição resumida do componente
--- Arquivo MD: arquivo MD que contém a descrição detalhada, regras de negpocio e validações do componente

- Como a LLM deve usar este documento
-- todas as vezes que o PO indicar ou a LLM entender que há uma referência à algum componente, este deve ser procurado nessa lista e usando o nome do componente ou a descrição do componente e identificar qual o componente está sendo referenciado.
-- se houver dúvidas a LLM pode perguntar ao PO qual componente ele deseja usar, apresentando para ele uma listta de componontes numerada
-- acessar o aquivo MD deste componente específico e dele obter todo o contexto necessário
-- com este contexto, sugerir as regras de negócio e validações ao PO para inserção no detalhamento da funcionalidade

- como é a organização do Arquivo MD de cada componente
o aqruivo MD deve conter as seguintes sessões:
-- Nome do componente 
-- descrição detalhada do componente
-- regras de negócio do componente
-- vaidações do componente


- Sessão "Componentes"

-- Nome do componente: Seleção de Carteiras
-- Descrição do componente: componente básico que permita a seleção de uma ou mais carteiras por digitação do código da Cateira, ou por seleção à partir de uma lista de Cateiras.
-- Arquivo MD: selecao_carteiras.md

-- Nome do componente: Seleção de Data 
-- Descrição do componente: componente que permita a seleção de uma data, por digitação da data, ou seleção visual em um calendário.
-- Arquivo MD: selecao_data.md


-- Nome do componente: Seleção de Período 
-- Descrição do componente: componente que permita a seleção de duas datas, uma inicial e outra final, por digitação das datas, ou seleção visual em um calendário.
-- Arquivo MD: selecao_periodo.md
