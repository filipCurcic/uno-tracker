import React from 'react';

const PlayerPoints = ({ player, rounds, click }) => {
  console.log(rounds);
  return (
    <div className="player">
      <div className="player-name">{player && player.label}</div>
      <div className="rounds-container">
        {rounds && rounds.map((round) => <h1>{round.points}</h1>)}
      </div>
      <button onClick={() => click(player.id)}>add round</button>
    </div>
  );
};

export default PlayerPoints;
