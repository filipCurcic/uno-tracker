import React, { useContext } from 'react';
import Session from './Session';
import { projectFirestore, timestamp } from '../firebase/config';
import { AuthContext } from '../auth/Auth';
import useFirestoreQuery from '../hooks/UseFirestoreQuery';

const Sessions = () => {
  const { currentUser } = useContext(AuthContext);
  const { docs } = useFirestoreQuery('sessions', 'uid', '==', currentUser.uid);
  const collectionRef = projectFirestore.collection('sessions');
  const handleSubmit = async (event) => {
    try {
      await collectionRef.add({
        createdAt: timestamp(),
        uid: currentUser.uid,
        rounds: [],
        players: [],
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container">
      <div className="row center">
        <h1>Sessions</h1>
      </div>
      <div className="row center">
        <button onClick={handleSubmit}>NEW SESSION</button>
      </div>
      <br />
      <div className="sessions-container">
        {docs &&
          docs.map((session) => <Session key={session.id} session={session} />)}
      </div>
    </div>
  );
};

export default Sessions;
