import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDWuvwpUymwre7BYrLi-jslPOHUN-z7f8k',
    authDomain: 'pixs-6afd6.firebaseapp.com',
    projectId: 'pixs-6afd6',
    storageBucket: 'pixs-6afd6.appspot.com',
    messagingSenderId: '135082953293',
    appId: '1:135082953293:web:5fc67e7a59abf993b56a04',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Firebase storage
export const appStorage = getStorage(app)

// Firestore database
export const db = getFirestore(app)
