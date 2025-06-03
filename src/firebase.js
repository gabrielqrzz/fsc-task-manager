import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyARHSIKPXhO8OZdLWWqzLO8bQ05S9SE6xI',
  authDomain: 'task-master-8aad0.firebaseapp.com',
  projectId: 'task-master-8aad0',
  storageBucket: 'task-master-8aad0.appspot.com',
  messagingSenderId: '108726138228',
  appId: '1:108726138228:web:34f833009ce6c6836ea821',
  measurementId: 'G-HDWZHS2683',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
