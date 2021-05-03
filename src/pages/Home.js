import React, { useContext } from 'react';
import { AuthContext } from '../auth/Auth';
import Sessions from '../components/Sessions';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Sessions />;
  }
  return <h1>You need to sign in</h1>;
};

export default Home;
