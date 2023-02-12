// Import stylesheets
import './style.css';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getFirestore, collection, addDoc } from 'firebase/firestore';

const name = document.getElementById('nameInp');
const email = document.getElementById('emailInp');
const username = document.getElementById('userInp');
const pass = document.getElementById('passInp');
const submit = document.getElementById('sub_bt');

let db;
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
  if (!Validation()) {
    return;
  }
  submit.addEventListener('submit', async (e) => {
    e.preventDefault();

    addDoc(collection(db, 'users/'), {
      fullname: name.value,
      email: email.value,
      username: username.value,
      password: pass.value,
      timestamp: Date.now(),
      name: auth.currentUser.displayName,
      userId: auth.currentUser.uid,
    });

    name.value = '';
    email.value = '';
    username.value = '';
    pass.value = '';

    return false;
  });
  alert('Sign Up Sucessfully !!');
}

main();
function Validation() {
  let nameregex = /^[a-zA-Z]+$/;
  let emailregex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
  let userregex = /^[a-zA-Z0-9]{5,}$/;

  if (!nameregex.test(name)) {
    alert('the name should only contains alphabets');
    return false;
  }
  if (!emailregex.test(email)) {
    alert('the email is not valid');
    return false;
  }
  if (!userregex.test(username)) {
    alert('the username is not valid');
    return false;
  }

  return true;
}
