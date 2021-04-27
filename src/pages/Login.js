import React from 'react';
// import { auth } from '../firebase/config';
import firebase from 'firebase/app';

const Login = () => {
  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    // auth.signInWithPopup(provider);
  };

  return <button onClick={signIn}>Sign in with Google</button>;
};

export default Login;
