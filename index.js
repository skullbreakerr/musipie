// Import stylesheets
import './style.css';
src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const app = initializeApp(firebaseConfig);

import { initializeApp } from 'firebase/app';

import { getDatabase, ref, set, child, get } from 'firebase/app';
const db = getDatabase();

const name = document.getElementById('nameInp');
const email = document.getElementById('emailInp');
const username = document.getElementById('userInp');
const password = document.getElementById('passInp');
const submit = document.getElementById('sub_btn');

function validation() {
  let nameregx = /^[a-zA-Z]+$/;
  let username = /^[a-zA-Z)-9]{5,}$/;

  if (nameregx.test(name.value)) {
    alert('Error occured!');
    return false;
  }
  if (username.test(username.value)) {
    alert('Error in username');
    return false;
  }
  return true;
}

function registerUser() {
  if (validation()) {
    return;
  }
  const dbRef = ref(db);

  get(child(dbRef, 'Users/' + username.value)).then((snapshot) => {
    if (snapshot.exists()) {
      alert('Account already exists');
    } else {
      set(ref(db, 'Users/' + username.value), {
        fullname: name.value,
        email: email.value,
        username: username.value,
        password: password.value,
      })
        .then(() => {
          alert('user added successfully');
        })
        .catch((error) => {
          alert('error ' + error);
        });
    }
  });
}

submit.addEventListener('click', registerUser);
import { getDatabase, ref, set, child, get } from 'firebase/app';
const db = getDatabase();

const name = document.getElementById('nameInp');
const email = document.getElementById('emailInp');
const username = document.getElementById('userInp');
const password = document.getElementById('passInp');
const submit = document.getElementById('sub_btn');

function validation() {
  let nameregx = /^[a-zA-Z]+$/;
  let username = /^[a-zA-Z)-9]{5,}$/;

  if (nameregx.test(name.value)) {
    alert('Error occured!');
    return false;
  }

  if (username.test(username.value)) {
    alert('Error in username');
    return false;
  }
  return true;
}

function registerUser() {
  if (validation()) {
    return;
  }
  const dbRef = ref(db);

  get(child(dbRef, 'Users/' + username.value)).then((snapshot) => {
    if (snapshot.exists()) {
      alert('Account already exists');
    } else {
      set(ref(db, 'Users/' + username.value), {
        fullname: name.value,
        email: email.value,
        username: username.value,
        password: password.value,
      })
        .then(() => {
          alert('user added successfully');
        })
        .catch((error) => {
          alert('error ' + error);
        });
    }
  });
}

submit.addEventListener('click', registerUser);
