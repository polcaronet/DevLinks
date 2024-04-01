
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyARrDwCdCS4fcHoXD7I5QhUsauJuXnMt_w",
  authDomain: "reactlinks-1f0fe.firebaseapp.com",
  projectId: "reactlinks-1f0fe",
  storageBucket: "reactlinks-1f0fe.appspot.com",
  messagingSenderId: "1372937639",
  appId: "1:1372937639:web:eae9c1d3f3098046c02a82"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app);

export { auth, firestore };