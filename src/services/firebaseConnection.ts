// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBJFZ4cccwkAt4fWhWl7gWDeRtNZjK8nLY',
  authDomain: 'sismanu.firebaseapp.com',
  projectId: 'sismanu',
  storageBucket: 'sismanu.appspot.com',
  messagingSenderId: '55635796636',
  appId: '1:55635796636:web:11ce29c15031d584a10359'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

export { db, storage };
