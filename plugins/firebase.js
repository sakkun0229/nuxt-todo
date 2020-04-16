import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.FIREBASE_DATABASE_URL,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID
  apiKey: 'AIzaSyCWjKLXcra7H5jQ3J_c47lGioUA6qDJgmg',
  authDomain: 'nuxt-todo-3235f.firebaseapp.com',
  databaseURL: 'https://nuxt-todo-3235f.firebaseio.com',
  projectId: 'nuxt-todo-3235f',
  storageBucket: 'nuxt-todo-3235f.appspot.com',
  messagingSenderId: '680219156597',
  appId: '1:680219156597:web:5afb9f2f87acc37254983c'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()

export { firebase, db }
