import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBqkyCnyFxIUPXqJiKkDZNPfnadXrFMRm8",
    authDomain: "punk-api-auth.firebaseapp.com",
    projectId: "punk-api-auth",
    storageBucket: "punk-api-auth.appspot.com",
    messagingSenderId: "202098359177",
    appId: "1:202098359177:web:04274aa57ea858eabbff58"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
// export const provider = new firebase.auth.GoogleAuthProvider();
export default firebase;