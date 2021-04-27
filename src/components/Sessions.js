import React, { useContext, useState } from 'react';
import NewSession from './NewSession';
import Session from './Session';
import { projectFirestore, timestamp } from '../firebase/config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { AuthContext } from '../auth/Auth';
const Sessions = () => {
  const { currentUser } = useContext(AuthContext);

  const sessionsRef = projectFirestore.collection('sessions');
  const query = sessionsRef.orderBy('createdAt');
  const [sessions] = useCollectionData(query, { idField: 'id' });
  console.log(sessions);
  const handleSubmit = async (event) => {
    const collectionRef = projectFirestore.collection('sessions');
    try {
      await collectionRef.add({
        createdAt: timestamp(),
        uid: currentUser.uid,
      });
    } catch (error) {
      alert(error);
    }
    // setOpen(false);
  };

  return (
    <div className="container">
      <div className="row center">
        <h1>Sessions</h1>
      </div>
      <div className="row center">
        <NewSession click={handleSubmit} />
        {sessions &&
          sessions.map((session) => (
            <Session key={session.id} session={session} />
          ))}
      </div>
    </div>
  );
};

export default Sessions;
