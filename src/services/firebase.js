import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBXDkQoguubnu43Dzgcch-AFau_WK1bXuY',
  authDomain: 'hack1-cs98.firebaseapp.com',
  databaseURL: 'https://hack1-cs98.firebaseio.com',
  projectId: 'hack1-cs98',
  storageBucket: '',
  messagingSenderId: '524559777466',
  appId: '1:524559777466:web:b59ade3292c236d8078c83',
};
// Initialize Firebase
firebase.initializeApp(config);

// Get a reference to the database service
const db = firebase.database();


// Adapted from from https://github.com/firebase/quickstart-js/blob/c677a47085e1afb2516d51ab1bb54cad362afdc7/auth/email-password.html#L95-L107
export function signInUser(email, password) {
  if (firebase.auth().currentUser) {
    // [START signout]
    firebase.auth().signOut();
    // [END signout]
  } else {
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    // Sign in with email and pass.
    // [START authwithemail]
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
    // [END authwithemail]
  }
}
// Adapted from from https://github.com/firebase/quickstart-js/blob/c677a47085e1afb2516d51ab1bb54cad362afdc7/auth/email-password.html#L95-L107
export function signUpUser(email, password) {
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }
  // Sign in with email and pass.
  // [START createwithemail]
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode === 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  });
  // [END createwithemail]
}
export function createKey(hash, key) {
  db.ref('keys').child(hash).set({ key });
}

function deleteKey(hash) {
  db.ref('keys').child(hash).remove();
}

export function fetchKey(hash, callback) {
  db.ref('keys').child(hash).once('value', (snapshot) => {
    if (snapshot.exists()) {
      deleteKey(hash);
      callback(snapshot.toJSON().key);
    }
    return null;
  });
}
