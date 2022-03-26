import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
   apiKey: 'AIzaSyD-jDzDsM-G-b8qqsA-ncMTvkkfFs2Oh7U',
  authDomain: 'netfix-36035.firebaseapp.com',
  projectId: 'netfix-36035',
  storageBucket: 'netfix-36035.appspot.com',
  messagingSenderId: '291536986856',
  appId: '1:291536986856:web:3693c5545102c361ea1f5d'
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }
