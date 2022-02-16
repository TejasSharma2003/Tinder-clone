import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsWxLvtQ_QtK8CjcW00QPY8c14MR7Lvq4",
  authDomain: "tinder-clone-7662d.firebaseapp.com",
  projectId: "tinder-clone-7662d",
  storageBucket: "tinder-clone-7662d.appspot.com",
  messagingSenderId: "463961656033",
  appId: "1:463961656033:web:130b749bd2a69901e045a0",
  measurementId: "G-BVTD5D1108"
};

const app=initializeApp(firebaseConfig);
const database=getFirestore(app);

export default database;