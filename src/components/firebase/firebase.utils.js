import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAZl4VfBpDDV6CUf9uPz54uEubIFlTl7XQ",
    authDomain: "crwn-db-24d2e.firebaseapp.com",
    projectId: "crwn-db-24d2e",
    storageBucket: "crwn-db-24d2e.appspot.com",
    messagingSenderId: "1014328210171",
    appId: "1:1014328210171:web:720dcd8253e7c4f0c2765e",
    measurementId: "G-L9LNWFKHFY",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user', error.message)
      }
    }
    return userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
