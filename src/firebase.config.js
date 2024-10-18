import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCssUnpTFoZAZt_iUP1LiI7O4w6GL4Nt0M",
  authDomain: "my-cages-website.firebaseapp.com",
  projectId: "my-cages-website",
  storageBucket: "my-cages-website.appspot.com",
  messagingSenderId: "774820064523",
  appId: "1:774820064523:web:c36256b1a636efa857860e",
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
