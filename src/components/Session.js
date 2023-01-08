import React from 'react';
import { Link } from 'react-router-dom';
import { projectFirestore } from '../firebase/config';

const Session = (session) => {
  const deleteSession = (sessionId) => {
    projectFirestore.collection('sessions').doc(sessionId).delete();
  };
  return (
    <Link
      to={{
        pathname: `/session/${session.session.id}`,
        state: session.session,
      }}
    >
      <div className="session">
        <span
          className="delete-button"
          onClick={() => deleteSession(session.session.id)}
        >
          X
        </span>
        <h2>
          {session.session.createdAt &&
            session.session.createdAt.toDate().toDateString()}
        </h2>
        {session.session.players && session.session.players.length === 0 ? (
          <h1>No players</h1>
        ) : (
          <div className="player-container">
            <h2>Players: </h2>
            {session.session.players.map((player) => (
              <h4> {player.value} </h4>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Session;
