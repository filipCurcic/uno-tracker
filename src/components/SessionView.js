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

  const { doc } = useFirestoreSingle('sessions', sessionId);
  const users = useFirestore('users');
  const sessionRef = projectFirestore.collection('sessions');

  const addRound = async (playerId) => {
    console.log(playerId);
    // try {
    //   await roundsRef.add({
    //     player_id: 123,
    //     session_id: sessionId,
    //     points: 200,
    //     round_number: 1,
    //   });
    // } catch (error) {
    //   alert(error);
    // }
  };

  const addPlayers = async () => {
    try {
      await sessionRef.doc(sessionId).update({
        players: selectedUsers,
      });
    } catch (error) {}
  };
  let playerSelect;
  // if (doc.rounds) {
  //   playerSelect =
  //     doc.players && doc.players.length === 0 ? (
  //       <Select
  //         isSearchable
  //         placeholder="Select User"
  //         isMulti
  //         options={users.docs}
  //         onChange={setSelectedUsers}
  //       />
  //     ) : (
  //       <div className="players">
  //         {doc.players &&
  //           doc.players.map((player) => (
  //             <PlayerPoints
  //               player={player}
  //               rounds={doc.rounds.filter((doc) => doc.player_id === player.id)}
  //               click={addRound}
  //             />
  //           ))}
  //       </div>
  //     );
  // }

  if (doc) {
    return (
      <div className="container">
        <div className="session-view">
          {doc.rounds && doc.rounds.map((round) => <h1>{round.points}</h1>)}
        </div>
        {doc.players === undefined || doc.players.length === 0 ? (
          <h1>no players</h1>
        ) : (
          <h2>players</h2>
        )}

        <div>
          {doc.players === undefined || doc.players.length === 0 ? (
            <>
              <Select
                isSearchable
                placeholder="Select User"
                isMulti
                options={users.docs}
                onChange={setSelectedUsers}
              />
              <button onClick={addPlayers}>add players</button>
            </>
          ) : (
            <div className="players">
              {doc.players &&
                doc.players.map((player) => (
                  <PlayerPoints
                    player={player}
                    rounds={doc.rounds.filter(
                      (doc) => doc.player_id === player.id
                    )}
                    click={addRound}
                  />
                ))}
            </div>
          )}
        </div>

        {/* <button onClick={test}>test</button> */}
        {/* {doc.players.length === 0 ? (
          <button onClick={addPlayers}>add players</button>
        ) : null} */}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default SessionView;
