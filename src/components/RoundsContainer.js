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

  useEffect(() => {
    fetch("http://localhost:9292/rounds")
      .then((r) => r.json())
      .then((rounds) => setRounds(rounds));
  }, []);
  // -----------------------------

  return (
    <div id="rounds_div">
      <PlayerData players={ players } rounds={ rounds } />
    </div>
  )
}

export default RoundsContainer;