import { useState, useEffect } from 'react'

function RoundsContainer () {
  const [ rounds, setRounds ] = useState('')
  const [ players, setPlayers ] = useState('')
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
  console.log('Players -->', players);
  console.log('Rounds --->', rounds);

  return (
    <div id="rounds_div">

    </div>
  )
}

export default RoundsContainer;