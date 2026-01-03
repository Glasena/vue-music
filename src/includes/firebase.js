import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "",
  authDomain: "music-8df2e.firebaseapp.com",
  projectId: "music-8df2e",
  storageBucket: "music-8df2e.firebasestorage.app",
  messagingSenderId: "158833973840",
  appId: "1:158833973840:web:3d5de2ee72a5781f1a4f55"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
    auth,
    db,
    usersCollection
}
