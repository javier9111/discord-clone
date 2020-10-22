import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEpxzQJcMBEwwIEpORybVFKahB_HHL96E",
  authDomain: "discord-clone-1be8d.firebaseapp.com",
  databaseURL: "https://discord-clone-1be8d.firebaseio.com",
  projectId: "discord-clone-1be8d",
  storageBucket: "discord-clone-1be8d.appspot.com",
  messagingSenderId: "561194959224",
  appId: "1:561194959224:web:eccbd97b85c715e607488d",
  measurementId: "G-1KH8ZVDGBN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
