import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyDjiiDllet33IdV0aAP1ZzHmyQH0UvXFMY',
  authDomain: 'uno-tracker-e6c41.firebaseapp.com',
  projectId: 'uno-tracker-e6c41',
  storageBucket: 'uno-tracker-e6c41.appspot.com',
  messagingSenderId: '74105187856',
  appId: '1:74105187856:web:58465437dc7ff7ca8c6495',
};

const app = firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
// const auth = firebase.auth();

// export { projectFirestore, auth, timestamp };
export { app, projectFirestore, timestamp };
