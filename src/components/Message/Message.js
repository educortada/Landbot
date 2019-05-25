import React from 'react'
import './style.css'

const Message = ({ message }) => {
  const typeMessage = message.samurai < 0 ? 'is-bot' : 'is-human'

  return (
    <article className={`message ${typeMessage}`}>
      <p className="message-text">
        {message.message}
      </p>
    </article>
  )
}

export default Message
