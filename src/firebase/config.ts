import { initializeApp } from 'firebase/app'
import type { FirebaseOptions } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// require more codemirror resource...

// you can set default global options and events when use

// // firebase sdk
// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBNLFr6zy1BscY-qgMK2IqoJiwyawBIuEU",
  authDomain: "song-codex.firebaseapp.com",
  projectId: "song-codex",
  storageBucket: "song-codex.firebasestorage.app",
  messagingSenderId: "575846060382",
  appId: "1:575846060382:web:925f099ec2e71195f1ffcf",
  measurementId: "G-HCMWFGE90J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(app)
const firebaseDb = getFirestore(app)

export {
  firebaseAuth,
  firebaseDb,
}
