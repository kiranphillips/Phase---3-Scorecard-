import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import ScoreCard from './ScoreCard'
import Scores from "./Scores";
import Rounds from "./Rounds";
import RouterButton from './RouterButton';
import { useEffect, useState } from "react";


function App () {
  const [rounds, setRounds] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/rounds")
    .then((r) => r.json())
    .then((rounds) => setRounds(rounds));
}, []);


function handleAddRound(newRound) {
  setRounds(...rounds, newRound)
}



  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <ScoreCard onAddRound={handleAddRound}/> } />
      </Routes>
      <RouterButton />
      <Rounds 
      rounds={rounds}
      />
    </div>
  );
}


export default App
