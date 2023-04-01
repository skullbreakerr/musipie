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

  // Define the song details
const song = {
  title: document.getElementById("card-title"),
  artist: document.getElementById("card-text"),
  image: document.getElementById("card-img-top"),
  audio: "https://firebasestorage.googleapis.com/v0/b/skull-candy-48fae.appspot.com/o/Naruto%20OST.mp3?alt=media&token=e5ecbd6d-0d15-4110-890d-866d444f8ef4"
};

// Get the DOM elements
const playButton = document.getElementById("playbutton");
const audioPlayer = document.getElementById("audioplayer");
const songImage = document.getElementById("song-image");
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");

// Set the song details
songImage.src = song.image;
songTitle.textContent = song.title;
artistName.textContent = song.artist;
audioPlayer.src = song.audio;

// Add an event listener to the play button
playButton.addEventListener("click", () => {
  audioPlayer.play();
});  
}
main();
 
