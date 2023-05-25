import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAvPgwAmuOQHP-12Xy4fhwdSxcZRm_4jpk",
    authDomain: "disneyplus-clone-94d50.firebaseapp.com",
    projectId: "disneyplus-clone-94d50",
    storageBucket: "disneyplus-clone-94d50.appspot.com",
    messagingSenderId: "294344811283",
    appId: "1:294344811283:web:896de73f1445f037ae30e6",
    measurementId: "G-NJDDFHWLG2"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};
export default db;