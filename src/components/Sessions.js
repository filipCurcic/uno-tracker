import React, { useContext, useEffect, useState } from 'react';
import NewSession from './NewSession';
import Session from './Session';
import { projectFirestore, timestamp } from '../firebase/config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { AuthContext } from '../auth/Auth';
import useFirestoreQuery from '../hooks/UseFirestoreQuery';
import useFirestore from '../hooks/UseFirestore';
import PlayerPoints from './PlayerPoints';

const Sessions = () => {
  const { currentUser } = useContext(AuthContext);
  // const sessionsRef = projectFirestore.collection('sessions');
  // const query = sessionsRef.where('uid', '==', `${currentUser.uid}`);
  // const [sessions] = useCollectionData(query, { idField: 'id' });

  const { docs } = useFirestoreQuery('sessions', 'uid', '==', currentUser.uid);
  const handleSubmit = async (event) => {
    const collectionRef = projectFirestore.collection('sessions');
    try {
      await collectionRef.add({
        createdAt: timestamp(),
        uid: currentUser.uid,
        rounds: [
          { player_id: 'afqyyZN8EPmojncHhnrd', points: 200, round_number: 1 },
          { player_id: 'tnIWK1SV2aZI9dwvB8ev', points: 10, round_number: 1 },
          { player_id: 'afqyyZN8EPmojncHhnrd', points: 0, round_number: 2 },
          { player_id: 'tnIWK1SV2aZI9dwvB8ev', points: 10, round_number: 2 },
          { player_id: 'afqyyZN8EPmojncHhnrd', points: 2, round_number: 3 },
          { player_id: 'tnIWK1SV2aZI9dwvB8ev', points: 100, round_number: 3 },
        ],
        players: [],
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
        {docs &&
          docs.map((session) => <Session key={session.id} session={session} />)}
      </div>
    </div>
  );
};

export default Sessions;
