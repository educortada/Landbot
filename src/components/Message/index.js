import React, { Component } from 'react'
import Message from './Message'

class index extends Component {
  render () {
    return (
      <section>
        {
          this.props.messages.map(message => {
            return <Message key={message.key} message={message} />
          })
        }
      </section>
    )
  }
}

export default index
