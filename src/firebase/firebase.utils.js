import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBZ8Wu3jFQsuxHHr__d4J4nWquHDWfIu7k",
    authDomain: "crwn-db-228df.firebaseapp.com",
    projectId: "crwn-db-228df",
    storageBucket: "crwn-db-228df.appspot.com",
    messagingSenderId: "852025358606",
    appId: "1:852025358606:web:883720653caf2490727f5f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;