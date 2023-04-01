import './style.css';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getFirestore, collection, addDoc } from 'firebase/firestore';

async function main() {
  const firebaseConfig = {
    apiKey: 'AIzaSyCt_I6Xc7vfo5YY8tx5PYbDdU0n404fm0c',
    authDomain: 'skull-candy-48fae.firebaseapp.com',
    databaseURL:
      'https://skull-candy-48fae-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'skull-candy-48fae',
    storageBucket: 'skull-candy-48fae.appspot.com',
    messagingSenderId: '757603856879',
    appId: '1:757603856879:web:990480f0446a513a7d461a',
  };
  // Initialize Firebase
  initializeApp(firebaseConfig);

  db = getFirestore();
}

main();
