import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { projectFirestore } from '../firebase/config';
import useFirestoreQuery from '../hooks/UseFirestoreQuery';
import useFirestore from '../hooks/UseFirestore';
import useFirestoreSingle from '../hooks/UseFirestoreSingle';
import PlayerPoints from './PlayerPoints';
import Spinner from './Spinner';

const SessionView = ({ location }) => {
  const sessionId = location.state.id;
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isActive, setIsActive] = useState();

  const { doc } = useFirestoreSingle('sessions', sessionId);
  const users = useFirestore('users');
  const sessionRef = projectFirestore.collection('sessions');

  const addRound = async (playerId, points, playerName) => {
    const newRound = {
      player_id: playerId,
      player_name: playerName,
      points: parseInt(points),
      round_number: 1,
    };
    try {
      await sessionRef.doc(sessionId).update({
        rounds: [...doc.rounds, newRound],
      });
    } catch (error) {
      alert(error);
    }
  };
  const deleteRound = async (playerId, points) => {};

  const addPlayers = async () => {
    try {
      await sessionRef.doc(sessionId).update({
        players: selectedUsers,
      });
    } catch (error) {}
  };
  if (doc) {
    return (
      <div className="container">
        <div>
          {doc.players === undefined || doc.players.length === 0 ? (
            <div className="user-select">
              <h3>{doc.createdAt && doc.createdAt.toDate().toDateString()}</h3>
              <h1>Select Players</h1>
              <Select
                isSearchable
                placeholder="Select User"
                isMulti
                options={users.docs}
                onChange={setSelectedUsers}
              />
              <button onClick={addPlayers}>Add Players</button>
            </div>
          ) : (
            <>
              <div className="players">
                {doc.players &&
                  doc.players.map((player) => (
                    <PlayerPoints
                      player={player}
                      rounds={doc.rounds.filter(
                        (doc) => doc.player_id === player.id
                      )}
                      click={addRound}
                      deleteRound={deleteRound}
                    />
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default SessionView;
