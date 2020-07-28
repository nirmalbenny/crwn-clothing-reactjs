import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCZgzVwC9lwc-KE8Kkws9-73Wgzl5oSIJM",
  authDomain: "crown-app-7f6d4.firebaseapp.com",
  databaseURL: "https://crown-app-7f6d4.firebaseio.com",
  projectId: "crown-app-7f6d4",
  storageBucket: "crown-app-7f6d4.appspot.com",
  messagingSenderId: "725817581124",
  appId: "1:725817581124:web:8631f7bdfdbcb6ad3ea611",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //exit if  userAuth is null,ie, not signed in
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("ERROR CREATING USER", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
