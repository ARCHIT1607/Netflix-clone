import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAelURkGU1OlDaduBsOZQZoiHiVOqH4mcg",
  authDomain: "netflix-clone-6e327.firebaseapp.com",
  databaseURL: "https://netflix-clone-6e327.firebaseio.com",
  projectId: "netflix-clone-6e327",
  storageBucket: "netflix-clone-6e327.appspot.com",
  messagingSenderId: "145218501969",
  appId: "1:145218501969:web:cd91d1698d9ed897d26770",
  measurementId: "G-VPXFBSMCWW",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { firebaseApp, auth };
export default db;
