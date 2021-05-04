import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { projectFirestore } from '../firebase/config';
import useFirestoreQuery from '../hooks/UseFirestoreQuery';
import useFirestore from '../hooks/UseFirestore';
import useFirestoreSingle from '../hooks/UseFirestoreSingle';

const SessionView = ({ location }) => {
  const sessionId = location.state.id;
  const [selectedUsers, setSelectedUsers] = useState([]);
  const users = useFirestore('users');
  const roundsRef = projectFirestore.collection('rounds');
  const sessionRef = projectFirestore.collection('sessions');
  const { doc } = useFirestoreSingle('sessions', sessionId);
  console.log(doc.players);
  const { docs } = useFirestoreQuery('rounds', 'session_id', '==', sessionId);

  const addRound = async () => {
    try {
      await roundsRef.add({
        player_id: 123,
        session_id: sessionId,
        points: 200,
        round_number: 1,
      });
    } catch (error) {
      alert(error);
    }
  };

  const addPlayers = async () => {
    try {
      await sessionRef.doc(sessionId).update({
        players: selectedUsers,
      });
    } catch (error) {}
  };
  const test = () => {
    // console.log(session);
  };
  let playerSelect;
  if (doc.players) {
    playerSelect =
      doc.players.length === 0 ? (
        <Select
          isSearchable
          placeholder="Select User"
          isMulti
          options={users.docs}
          onChange={setSelectedUsers}
        />
      ) : (
        <div className="players">
          {doc.players && doc.players.map((player) => <h1>{player.value}</h1>)}
        </div>
      );
  }

  return (
    <div className="container">
      <button onClick={addRound}>Add round</button>
      <div>{users && playerSelect}</div>

      {/* <button onClick={test}>test</button> */}
      {/* <button onClick={addPlayers}>add players</button> */}
      {docs && docs.map((round) => <div> {round.points} </div>)}
    </div>
  );
};

export default SessionView;
