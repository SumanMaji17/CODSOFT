import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB1Timiqf4-jw7ePB0GeLrrKfgTuZf2Npo",
  authDomain: "todo-app-ed796.firebaseapp.com",
  projectId: "todo-app-ed796",
  storageBucket: "todo-app-ed796.appspot.com",
  messagingSenderId: "522391461269",
  appId: "1:522391461269:web:6732fd7d8a4a1ef5d5aa9c",
  measurementId: "G-TJ5YRKHND8",
});

const db = firebaseApp.firestore();
export default db;
