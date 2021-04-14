import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBzkAZVY5IQMU7QK0dMEkfw-y3W8Qh9K0A",
  authDomain: "instagram-clone-ecc11.firebaseapp.com",
  projectId: "instagram-clone-ecc11",
  storageBucket: "instagram-clone-ecc11.appspot.com",
  messagingSenderId: "351173050429",
  appId: "1:351173050429:web:4189064bf79ea9126daa54",
  measurementId: "G-HVVVF35PDC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
