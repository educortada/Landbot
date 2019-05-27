import React, { Component } from 'react'

// Components
import Message from './Message'

class index extends Component {
  render () {
    return (
      <section>
        {
          this.props.messages.map(message => {
            return (message.type !== 'hidden') && <Message key={message.key} message={message} />
          })
        }
      </section>
    )
  }
}

export default index
