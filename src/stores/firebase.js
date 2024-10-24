// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDMak8C0bNzbJHXmmDSrtDpDt9tKSyXKJU',
  authDomain: 'testvuejs-f3e5f.firebaseapp.com',
  databaseURL:
    'https://testvuejs-f3e5f-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'testvuejs-f3e5f',
  storageBucket: 'testvuejs-f3e5f.appspot.com',
  messagingSenderId: '686250030543',
  appId: '1:686250030543:web:24957f998532c55cfdceba',
  measurementId: 'G-CN4JGRZKGR',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
// Initialize Firestore
const db = getFirestore(app)
// users collection ကို ရယူပါ။
// const usersCollectionRef = collection(db, 'testing')

// users collection ထဲက ဒေတာတွေ ထုတ်ယူပါ။
// getDocs(usersCollectionRef)
//   .then(querySnapshot => {
//     querySnapshot.forEach(doc => {
//       console.log(doc.id, '=>', doc.data())
//     })
//   })
//   .catch(error => {
//     console.error('Error getting documents: ', error)
//   })

// Disable offline persistence
// disableNetwork(db).catch(console.error)

export { db }
