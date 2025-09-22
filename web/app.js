document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');

    const API_BASE_URL = 'http://localhost:8000';

    // Gera um ID de conversação único para cada sessão no navegador.
    // Isso garante que conversas em abas diferentes sejam independentes.
    const userId = 'web-user'; // Pode ser um ID fixo ou dinâmico
    const sessionId = `session-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

    const agentName = 'user_history_agent';

    // Controla se a sessão já foi criada.
    let isSessionCreated = false;

    const addMessage = (text, sender) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        // Usar textContent para a mensagem do usuário para segurança (evita XSS)
        if (sender === 'user') {
            messageElement.textContent = text;
        } else {
            // Para o agente, usamos innerHTML para renderizar quebras de linha, mas escapamos o HTML para segurança.
            // Primeiro, criamos um nó de texto para que o navegador escape quaisquer caracteres HTML perigosos.
            const textNode = document.createTextNode(text);
            // Em seguida, usamos o conteúdo escapado e substituímos as quebras de linha por <br>.
            messageElement.innerHTML = textNode.textContent.replace(/\n/g, '<br>');
        }
        chatMessages.appendChild(messageElement);
        // Rola para a mensagem mais recente
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return messageElement;
    };

    const showTypingIndicator = () => {
        const typingElement = addMessage('Digitando...', 'agent');
        typingElement.id = 'typing-indicator';
    };

    const removeTypingIndicator = () => {
        const typingElement = document.getElementById('typing-indicator');
        if (typingElement) {
            typingElement.remove();
        }
    };

    const sendMessageToAgent = async (messageText) => {
        // Se a mensagem do usuário não for vazia, exibe na tela
        if (messageText) {
            addMessage(messageText, 'user');
            userInput.value = '';
            userInput.focus();
        }
        showTypingIndicator();

        try {
            // 1. Garante que a sessão foi criada antes de enviar a mensagem
            if (!isSessionCreated) {
                const createSessionUrl = `${API_BASE_URL}/apps/${agentName}/users/${userId}/sessions/${sessionId}`;
                const sessionResponse = await fetch(createSessionUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({}) // Corpo vazio para criar a sessão
                });

                if (!sessionResponse.ok) {
                    throw new Error(`Falha ao criar a sessão: ${sessionResponse.statusText}`);
                }
                isSessionCreated = true;
                console.log('Sessão criada com sucesso:', sessionId);
            }

            // 2. Envia a mensagem para o endpoint /run
            const runUrl = `${API_BASE_URL}/run`;
            const response = await fetch(runUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    app_name: agentName,
                    user_id: userId,
                    session_id: sessionId,
                    new_message: {
                        role: "user",
                        parts: [{ text: messageText }]
                    }
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || `Erro na API: ${response.statusText}`);
            }

            const data = await response.json();
            removeTypingIndicator();

            // Extrai a resposta do agente da estrutura de retorno complexa
            if (data && data.length > 0 && data[0].content && data[0].content.parts && data[0].content.parts.length > 0) {
                const agentResponseText = data[0].content.parts[0].text;
                addMessage(agentResponseText, 'agent');
            } else {
                throw new Error("Formato de resposta inesperado da API.");
            }

        } catch (error) {
            removeTypingIndicator(); // Garante que o indicador seja removido também em caso de erro.
            console.error('Falha ao comunicar com o agente:', error);
            addMessage(`Desculpe, ocorreu um erro: ${error.message}. Verifique o console para mais detalhes.`, 'agent');
        }
    };

    // Função para iniciar a conversa com a saudação do agente
    const startConversation = async () => {
        // Envia uma mensagem inicial vazia ("") para o agente se apresentar.
        await sendMessageToAgent('');
    };

    const handleSend = () => {
        const messageText = userInput.value.trim();
        if (messageText === '') {
            return;
        }
        sendMessageToAgent(messageText);
    };

    // Permite enviar com a tecla Enter
    userInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    });

    sendButton.addEventListener('click', handleSend);

    // Inicia a conversa assim que a página carrega, fazendo o agente se apresentar.
    startConversation();
});
