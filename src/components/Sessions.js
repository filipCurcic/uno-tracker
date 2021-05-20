import React, { useContext, useEffect, useState } from 'react';
import NewSession from './NewSession';
import Session from './Session';
import { projectFirestore, timestamp } from '../firebase/config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { AuthContext } from '../auth/Auth';
import useFirestoreQuery from '../hooks/UseFirestoreQuery';
import useFirestore from '../hooks/UseFirestore';
import PlayerPoints from './PlayerPoints';
import { motion } from 'framer-motion';

const Sessions = () => {
  const { currentUser } = useContext(AuthContext);
  // const sessionsRef = projectFirestore.collection('sessions');
  // const query = sessionsRef.where('uid', '==', `${currentUser.uid}`);
  // const [sessions] = useCollectionData(query, { idField: 'id' });

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
