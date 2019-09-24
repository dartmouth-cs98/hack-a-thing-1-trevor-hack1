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
    } else {
      callback(null);
    }
  });
}
