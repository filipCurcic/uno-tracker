import React, { useState } from 'react';

const PlayerPoints = ({ player, rounds, click }) => {
  const [points, setPoints] = useState(0);
  const test = () => {
    console.log(points);
  };
  const handleChange = (e) => {
    setPoints(e.target.value);
  };
  console.log(rounds);
  return (
    <div className="player">
      <div className="player-name">{player && player.label}</div>
      <div className="rounds-container">
        {rounds && rounds.map((round) => <h1>{round.points}</h1>)}
      </div>
      <button onClick={() => click(player.id, points)}>add round</button>
      <button onClick={test}>test</button>
      <input placeholder="Points" type="number" onChange={handleChange} />
    </div>
  );
};

export default PlayerPoints;
