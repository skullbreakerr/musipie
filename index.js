// Import stylesheets
import './style.css';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getfirestore, child, ref, set } from 'firebase/firestore';

const name = document.getElementById('nameInp');
const email = document.getElementById('emailInp');
const username = document.getElementById('userInp');
const pass = document.getElementById('passInp');
const submit = document.getElementById('submit');

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
  const db = getfirestore(app);
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  submit.addEventListener('click', RegisterUser);
  return true;
}

main();

function Validation() {
  let nameregex = /^[a-zA-Z]+$/;
  let emailregex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
  let userregex = /^[a-zA-Z0-9]{5,}$/;

  if (!nameregex.test(name.value)) {
    alert('the name should only contains alphabets');
    return false;
  }
  if (!emailregex.test(email.value)) {
    alert('the email is not valid');
    return false;
  }
  if (!userregex.test(username.value)) {
    alert('the username is not valid');
    return false;
  }

  return true;
}

function RegisterUser() {
  if (Validation()) {
    return;
  }
  const dbRef = ref(db);

  get(child(dbRef, 'UserList/' + username.value)).then((snapshot) => {
    if (snapshot.exist()) {
      alert('Account already Exist!');
    } else {
      set(ref(db, 'UserList/' + username.value), {
        fullname: name.value,
        email: email.value,
        username: username.value,
        password: pass.value,
      })
        .then(() => {
          alert('User added sucessfully !!');
        })
        .catch((error) => {
          alert('Error: ' + error);
        });
    }
  });
}
