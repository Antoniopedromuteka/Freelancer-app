
// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
 

import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg5xe9jomN5keGGIchAN4LcUQvRwgBfDM",
  authDomain: "freelancer-app-9a499.firebaseapp.com",
  projectId: "freelancer-app-9a499",
  storageBucket: "freelancer-app-9a499.appspot.com",
  messagingSenderId: "960793173184",
  appId: "1:960793173184:web:7524335d61d51877826125",
  measurementId: "G-G138DHRQLC"
};

// Initialize Firebase

 
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}else{
    firebase.app();
}

const database = firebase.database();



export {database, firebase}
