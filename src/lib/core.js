// Landbot Core
import * as Landbot from '@landbot/core'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const core = new Landbot.Core({
  firebase: firebase, // required
  brandID: 12235, // required
  channelToken: 'H-116929-N86QGRNNY6QCWEU3', // required
  welcomeUrl: 'https://welcome.landbot.io/', // recommended
  welcome: [{
    samurai: -1,
    type: 'text',
    message: 'Hello! My name is Edu, can I help you?'
  }]
})

export default core
