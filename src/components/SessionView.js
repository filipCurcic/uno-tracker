import React, { useEffect } from 'react';
import Select from 'react-select';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { projectFirestore } from '../firebase/config';
import useFirestoreQuery from '../hooks/UseFirestoreQuery';
import useFirestore from '../hooks/UseFirestore';

const SessionView = ({ location }) => {
  const { session } = location.state;
  const rounds = useFirestoreQuery('rounds', 'session_id', '==', session.id);
  const users = useFirestore('users');
  const roundsRef = projectFirestore.collection('rounds');

  console.log(users.docs);

  const addRound = async () => {
    try {
      await roundsRef.add({
        player_id: 123,
        session_id: session.id,
        points: 200,
        round_number: 1,
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container">
      <button onClick={addRound}>Add round</button>
      <div className="players">
        <h1>players</h1>
        {users && <Select options={users.docs} />}
      </div>
      {rounds && rounds.docs.map((round) => <div> {round.points} </div>)}
    </div>
  );
};

export default SessionView;
