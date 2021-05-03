import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import { app } from '../firebase/config';

export const AuthContext = React.createContext();

const Auth = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);
  if (pending) {
    return <Spinner />;
  }
  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
