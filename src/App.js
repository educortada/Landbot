import React, { Component } from 'react'

// Landbot Core
import core from './lib/core'

// Helpers
import { sortMessages, updateChatScrollBottom } from './helpers'

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'

// CSS
import './css/reset.css'
import './css/variables.css'
import './css/style.css'

// Components
import Message from './components/Message'
import Footer from './components/Footer'

class App extends Component {
  state = {
    status: 'isLoading',
    messages: []
  }

  componentDidMount = async () => {
    try {
      // Returns a Promise with previous messages.
      const data = await core.init()
      const previousMessages = sortMessages(data.messages)

      this.setState({
        status: 'isReady',
        messages: [...previousMessages]
      })

      // Used to get a sequential flow of messages.
      core.pipelines.$readableSequence.subscribe(message => {
        this.setState({
          messages: [...this.state.messages, message]
        })
        // Update scroll from chat container after new message.
        updateChatScrollBottom()
      })
    } catch (error) {
      this.setState({ status: 'hasError' })
    }
  }

  render () {
    const { status, messages } = this.state
    switch (status) {
      case 'isLoading':
        return (
          <div className="spinner-container">
            <div className="lds-dual-ring"></div>
          </div>
        )
      case 'isReady':
        return (
          <div className="chat">
            <header className="chat-header">
              <h1>Landbot.io</h1>
            </header>
            <main id="chat-container" className="chat-container">
              <Message messages={messages} />
            </main>
            <footer className="chat-footer">
              <Footer />
            </footer>
          </div>
        )
      case 'hasError':
        return <p>Error!</p>
      default:
        return null
    }
  }
}

export default App
