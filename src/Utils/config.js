import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCkK59Y2t4-EvRfwyzBoXVLwUc46qieRfk",
    authDomain: "burger-queen-bab5d.firebaseapp.com",
    databaseURL: "https://burger-queen-bab5d.firebaseio.com",
    projectId: "burger-queen-bab5d",
    storageBucket: "burger-queen-bab5d.appspot.com",
    messagingSenderId: "735039820852",
    appId: "1:735039820852:web:2b07ba366169ee6cc3e661",
    measurementId: "G-5LKL1W7VXW"
  };
  

firebase.initializeApp(firebaseConfig);

export default firebase; 
