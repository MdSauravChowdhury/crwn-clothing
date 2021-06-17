import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAZl4VfBpDDV6CUf9uPz54uEubIFlTl7XQ",
  authDomain: "crwn-db-24d2e.firebaseapp.com",
  projectId: "crwn-db-24d2e",
  storageBucket: "crwn-db-24d2e.appspot.com",
  messagingSenderId: "1014328210171",
  appId: "1:1014328210171:web:720dcd8253e7c4f0c2765e",
  measurementId: "G-L9LNWFKHFY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;