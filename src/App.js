import React, { Component } from 'react'

// Landbot Core
import core from './lib/core'

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
      // Returns a Promise with previous conversation messages.
      const data = await core.init()
      this.setState({ status: 'isReady' })
      // console.log(data.messages)
      this.parseMessages(data.messages)

      // Used to get a sequential flow of messages.
      core.pipelines.$readableSequence.subscribe(message => {
        // console.log('Pipeline', message)
        this.setState({
          messages: [...this.state.messages, message]
        })
      })
    } catch (error) {
      this.setState({ status: 'hasError' })
      console.log(error)
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
            <main className="chat-container">
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
