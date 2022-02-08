
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import {getDoc, collection,getDocs,doc,addDoc,deleteDoc,where,query } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAIxKPRnbWM1aPENlvS0H2-LLTAuGLOR9M",
    authDomain: "recipe-ninja-568a3.firebaseapp.com",
    projectId: "recipe-ninja-568a3",
    storageBucket: "recipe-ninja-568a3.appspot.com",
    messagingSenderId: "638929776576",
    appId: "1:638929776576:web:ad8c470f2626bf2f362225"
  };

  //initialize firebase
  const app = firebase.initializeApp(firebaseConfig)

  //initialize services
 const projectFireStore = firebase.firestore(app)
 export {projectFireStore,collection,getDocs,doc,getDoc,addDoc,deleteDoc,where,query }