import React, { Component } from 'react'

// Landbot Core
import core from '../../lib/core'

import Footer from './Footer'

class index extends Component {
  state = { inputMessage: '' }

  handleChangeInputMessage = (event) => {
    this.setState({ inputMessage: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    core.sendMessage({ message: this.state.inputMessage })
    this.setState({ inputMessage: '' })
  }

  render () {
    return (
      <Footer
        inputMessage={this.state.inputMessage}
        handleChangeInputMessage={this.handleChangeInputMessage}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default index
