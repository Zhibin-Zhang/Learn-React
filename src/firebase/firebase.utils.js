import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCXMcpR9lLkfR1goeVQlrPg0MS_rDe6vdA",
  authDomain: "crwn-shop-a644a.firebaseapp.com",
  projectId: "crwn-shop-a644a",
  storageBucket: "crwn-shop-a644a.appspot.com",
  messagingSenderId: "934489083453",
  appId: "1:934489083453:web:5affbb394f2097049fe454",
  measurementId: "G-2DDFEH56F0",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;