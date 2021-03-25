import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD18u-YuUqLB3nPskxufbDwAHvYs8x7LYA",
    authDomain: "ecommerce-5424d.firebaseapp.com",
    projectId: "ecommerce-5424d",
    storageBucket: "ecommerce-5424d.appspot.com",
    messagingSenderId: "1007491259857",
    appId: "1:1007491259857:web:c33fe6cc465b0debfb54f0",
    measurementId: "G-6BTQ1Q8DJV"
  }

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'})
export const signInWithGoogle  = () => auth.signInWithPopup(provider);

export default firebase;