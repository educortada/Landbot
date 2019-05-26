import React from 'react'
import './style.css'

const Footer = ({ inputMessage, handleChangeInputMessage, handleSubmit }) => {
  return (
    <form className="chat-footer-wrapper" onSubmit={handleSubmit}>
      <input
        className="chat-footer-input"
        onChange={handleChangeInputMessage}
        type="text"
        value={inputMessage}
        placeholder="Type something..."
      />
      {inputMessage.length !== 0 && (
        <button className="chat-footer-btn">
          <i className="fas fa-paper-plane"></i>
        </button>
      )}
    </form>
  )
}

export default Footer
