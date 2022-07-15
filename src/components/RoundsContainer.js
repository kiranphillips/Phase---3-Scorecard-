import { useState, useEffect } from 'react'
import PlayerData from './PlayerData';

function RoundsContainer () {
  const [ rounds, setRounds ] = useState([])
  const [ players, setPlayers ] = useState([])
  // -----------------------------
  useEffect(() => {
    fetch("http://localhost:9292/players")
      .then((r) => r.json())
      .then((players) => setPlayers(players));
  }, []);

  console.log(players)

  const playerInfo = players.map((player) =>
    <PlayerData
    key={player.id}
    player={player} 
    />
  )

  return (
    <div id="rounds_div">
      {playerInfo}
    </div>
  )
}

export default RoundsContainer;