import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCknKJxnoaX-XsG2sg1abmppabq59YDBuU",
  authDomain: "app-vue-firebase-68309.firebaseapp.com",
  projectId: "app-vue-firebase-68309",
  storageBucket: "app-vue-firebase-68309.appspot.com",
  messagingSenderId: "95481356141",
  appId: "1:95481356141:web:f2a22303b7a7f4de220464",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
