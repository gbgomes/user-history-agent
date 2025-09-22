# User History Agent

Este projeto consiste em um agente de IA (`user_history_agent`) projetado para auxiliar Product Owners (POs) na criação de Histórias de Usuário, e uma interface web para uma interação mais amigável.

## Configuração do Ambiente

Antes de executar, você precisa configurar o ambiente e instalar as dependências.

1.  **Clone o repositório** para sua máquina local:
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd user-history-agent
    ```

2.  **Crie e ative um ambiente virtual** (recomendado):
    ```bash
    # Windows
    python -m venv venv
    .\venv\Scripts\activate
    ```

3.  **Instale as dependências** necessárias:
    ```bash
    pip install google-adk
    ```

## Como Executar

Para executar o projeto, você precisará de dois terminais: um para o servidor do agente (back-end) e outro para servir a interface web (front-end).

### Passo 1: Iniciar o Servidor do Agente (Back-end)

O agente é exposto através de uma API REST.

1.  Abra um terminal na pasta raiz do projeto (`user_history_agent`).
2.  Execute o seguinte comando para iniciar o servidor do agente. A flag `--allow-origins` é crucial para permitir que a interface web se comunique com a API.

    ```bash
    adk api_server --allow-origins "http://127.0.0.1:5500"
    ```

3.  O servidor será iniciado, geralmente na porta `8000`. Mantenha este terminal aberto.

### Passo 2: Iniciar a Interface Web (Front-end)

A maneira mais simples de servir a interface web localmente é usando a extensão **Live Server** no Visual Studio Code.

#### Instalação do Live Server (se você ainda não o tiver)

1.  Abra o Visual Studio Code.
2.  Vá para a aba de Extensões (ícone de blocos no menu lateral ou `Ctrl+Shift+X`).
3.  Procure por `Live Server` (publicado por Ritwick Dey).
4.  Clique em **Instalar**.

#### Executando o Live Server

1.  Com o projeto aberto no VS Code, navegue até o explorador de arquivos.
2.  Clique com o botão direito no arquivo `web/index.html`.
3.  Selecione a opção **"Open with Live Server"**.

    

4.  Uma nova aba será aberta automaticamente no seu navegador padrão, com um endereço como `http://127.0.0.1:5500/web/index.html`.

Agora você pode interagir com o agente através da interface de chat no seu navegador!
