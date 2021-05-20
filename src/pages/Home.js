import React, { useContext } from 'react';
import { AuthContext } from '../auth/Auth';
import Sessions from '../components/Sessions';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Sessions />;
  }
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <h1>You have to be signed in</h1>
    </div>
  );
};

export default Home;
