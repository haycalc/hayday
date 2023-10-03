// Get DOM elements
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

// Event listener for sending messages
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();

    if (message !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);

        // Clear input field
        messageInput.value = '';

        // Scroll to the latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
