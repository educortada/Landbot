// Sort messages by sequential flow.
export const sortMessages = (message) => {
  return Object
    .values(message)
    .sort((a, b) => a.timestamp - b.timestamp)
}

// Update scroll from chat container after new message.
export const updateChatScrollBottom = () => {
  const chatContainer = document.getElementById('chat-container')
  chatContainer.scrollTo({
    top: chatContainer.scrollHeight,
    behavior: 'smooth'
  })
}
