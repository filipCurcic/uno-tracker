import React, { useEffect, useState } from 'react';
import useFirestore from '../hooks/UseFirestore';

const Leaderboard = () => {
  const [points, setPoints] = useState([]);
  const { docs } = useFirestore('sessions');

  const userExists = (arr, id) => {
    return arr.some(function (el) {
      return el.player_id === id;
    });
  };
  useEffect(() => {
    const merged = [].concat.apply(
      [],
      docs.map((doc) => doc.rounds)
    );
    const pointPairs = [];
    for (let i = 0; i < merged.length; i++) {
      if (userExists(pointPairs, merged[i].player_id)) {
        pointPairs.find((el) => el.player_id === merged[i].player_id).points +=
          merged[i].points;
      } else {
        pointPairs.push({
          player_id: merged[i].player_id,
          points: merged[i].points,
          player_name: merged[i].player_name,
        });
      }
    }

    setPoints(pointPairs);
  }, [docs]);

  return (
    <div className="container">
      <h1>LEADERBOARD</h1>
      {points
        .sort((a, b) => (a.points > b.points ? 1 : -1))
        .map((points) => (
          <div className="player-points">
            <h2>{points.player_name}</h2>
            <h3>{points.points}</h3>
          </div>
        ))}
    </div>
  );
};

export default Leaderboard;
