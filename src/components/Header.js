import React, { useContext } from 'react';
import { app } from '../firebase/config';
import firebase from 'firebase/app';
import { AuthContext } from '../auth/Auth';

import logo from '../assets/logo.png';

const Header = () => {
  const { currentUser } = useContext(AuthContext);

  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    app.auth().signInWithPopup(provider);
  };

  const signOut = () => {
    app.auth().signOut();
    // console.log(currentUser);
  };

  return (
    <div className="header ">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="uno logo" />
        </div>
        <div className="menu">
          <h1>Leaderboard</h1>
          {currentUser ? (
            <h1 onClick={signOut}>Sign Out</h1>
          ) : (
            <h1 onClick={signIn}>Sign In</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
