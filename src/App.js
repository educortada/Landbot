import React, { Component } from 'react'

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'

// CSS
import './reset.css'
import './variables.css'
import './style.css'

// Landbot Core
import * as Landbot from '@landbot/core'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// Components
import Message from './components/Message'

const core = new Landbot.Core({
  firebase: firebase, // required
  brandID: 12235, // required
  channelToken: 'H-116929-N86QGRNNY6QCWEU3', // required
  welcomeUrl: 'https://welcome.landbot.io/', // recommended
  initialMessage: 'Hey! Can I help you?'
})

class App extends Component {
  state = {
    inputMessage: '',
    messages: []
  }

  parseMessages = (messages) => {
    for (const key in messages) {
      const message = messages[key]
      console.log('data', message)
      this.setState({
        messages: [...this.state.messages, message]
      })
    }
  }

  componentDidMount = async () => {
    try {
      console.log('1. cdm')
      // Core initialization.
      // Returns a Promise with initial messages or previous conversation messages.
      const data = await core.init()
      console.log(data.messages)
      this.parseMessages(data.messages)

      // Used to get a sequential flow of messages.
      core.pipelines.$readableSequence.subscribe(message => {
        console.log('Pipeline', message)
        this.setState({
          messages: [...this.state.messages, message]
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleChangeInputMessage = (event) => {
    this.setState({
      inputMessage: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    core.sendMessage({ message: this.state.inputMessage })
    this.setState({
      inputMessage: ''
    })
  }

  render () {
    const { messages, inputMessage } = this.state
    return (
      <div className="chat">
        <header className="chat-header">
          <h1>Landbot.io</h1>
        </header>
        <main className="chat-container">
          <Message messages={messages} />
        </main>
        <footer className="chat-footer">
          <form className="chat-footer-wrapper" onSubmit={this.handleSubmit}>
            <input
              className="chat-footer-input"
              onChange={this.handleChangeInputMessage}
              type="text"
              value={this.state.inputMessage}
              placeholder="Type something..."
            />
            {inputMessage.length !== 0 &&
              <button className="chat-footer-btn">
                <i className="fas fa-paper-plane"></i>
              </button>}
          </form>
        </footer>
      </div>
    )
  }
}

export default App
