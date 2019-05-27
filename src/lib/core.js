// Landbot Core
import * as Landbot from '@landbot/core'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const core = new Landbot.Core({
  firebase: firebase, // required
  brandID: 65414, // required
  channelToken: 'H-184336-XD5SP8AZUMKG44CG', // required
  welcomeUrl: 'https://welcome.landbot.io/', // recommended
  welcome: [{
    samurai: -1,
    type: 'text',
    message: 'Hello! My name is Landbot.'
  }]
})

export default core
