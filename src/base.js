import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDU4Dv9EyxgRHbWtJ_13Ypu5vUCnb4egpk",
  authDomain: "catch-of-the-day-96af0.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-96af0.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;