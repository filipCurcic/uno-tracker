import React, { useContext } from 'react';
import { app } from '../firebase/config';
import firebase from 'firebase/app';
import { AuthContext } from '../auth/Auth';

import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

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
          <Link to="/home">
            <img src={logo} alt="uno logo" />
          </Link>
        </div>
        <div className="menu">
          <Link to="/leaderboard">
            <h1>Leaderboard</h1>
          </Link>
          {/* {currentUser ? <h1>Friends</h1> : null} */}
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
