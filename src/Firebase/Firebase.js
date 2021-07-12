import firebase from "firebase/app";
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDeCycPtiqBJQSkmZmRpYGwlGxC3NaVRUo",
    authDomain: "reactfirebaseclone.firebaseapp.com",
    projectId: "reactfirebaseclone",
    storageBucket: "reactfirebaseclone.appspot.com",
    messagingSenderId: "371294873808",
    appId: "1:371294873808:web:086c9f1fc104db97c956d5",
    measurementId: "G-SN2K8HKJBP"
  };
  firebase.initializeApp(firebaseConfig)
  const storage= firebase.storage();
  export { storage ,firebase as default};

