import React, { useState, useRef } from 'react';

const PlayerPoints = ({ player, rounds, click, deleteRound }) => {
  const [points, setPoints] = useState(0);
  const inputRef = useRef(null);
  const totalPoints = rounds
    .map((round) => round.points)
    .reduce((a, b) => a + b, 0);
  console.log(totalPoints);

  const handleChange = (e) => {
    setPoints(e.target.value);
  };
  return (
    <div className="player">
      <div className="player-name">
        {player && player.label}
        <br />
        <span className="center">
          Total points: <h2> {totalPoints} </h2>
        </span>
        <span className="center">
          Average score: {(totalPoints / rounds.length).toFixed(1)}
        </span>
      </div>
      <div className="rounds-container">
        {rounds &&
          rounds.map((round) => (
            <div className="round">
              <h3>{round.points}</h3>
            </div>
          ))}
      </div>
      <div className="input-container center">
        <input
          placeholder={player && player.label}
          onChange={handleChange}
          ref={inputRef}
        />
        <button
          onClick={() => {
            inputRef.current.value = '';
            click(player.id, points, player.label);
          }}
        >
          add round
        </button>
      </div>
    </div>
  );
};

export default PlayerPoints;
