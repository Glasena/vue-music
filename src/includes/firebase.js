import firebase from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB44HLD8A8-0Z48oD6_41owIqrCy4b_iVs",
  authDomain: "music-8df2e.firebaseapp.com",
  projectId: "music-8df2e",
  storageBucket: "music-8df2e.firebasestorage.app",
  messagingSenderId: "158833973840",
  appId: "1:158833973840:web:3d5de2ee72a5781f1a4f55"
};

export default firebase.initializeApp(firebaseConfig);