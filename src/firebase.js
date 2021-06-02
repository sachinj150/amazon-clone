import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXCHjLr9QPL42Rq9HsE-CMDfQFG2Z2efA",
  authDomain: "challenge-50ede.firebaseapp.com",
  databaseURL: "https://challenge-50ede.firebaseio.com",
  projectId: "challenge-50ede",
  storageBucket: "challenge-50ede.appspot.com",
  messagingSenderId: "310528645708",
  appId: "1:310528645708:web:54eeb53c110e49443eb2e9",
  measurementId: "G-DR8Y1T6BKC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
