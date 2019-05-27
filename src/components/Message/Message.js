import React from 'react'
import moment from 'moment'
import './style.css'

const Message = ({ message }) => {
  const typeMessage = message.samurai < 0 ? 'is-bot' : 'is-human'
  return (
    message.type === 'text' ? (
      <article className={`message ${typeMessage}`}>
        <p className="message-text">
          {message.message}
          <span className="message-text-time">{moment(message.timestamp).format('HH:mm')}</span>
        </p>
      </article>
    ) : message.type === 'image' && (
      <figure>
        <img className="message-img" src={message.url} alt={message.type} />
      </figure>
    )
  )
}

export default Message
