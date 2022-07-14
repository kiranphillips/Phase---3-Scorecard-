import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import ScoreCard from './ScoreCard'
import Scores from "./Scores";
import RouterButton from './RouterButton';
import { useEffect, useState } from "react";


function App () {
  const [rounds, setRounds] = useState

  useEffect(() => {
    fetch("http://localhost:9292/rounds")
    .then((r) => r.json())
    .then((rounds) => setRounds(rounds));
}, []);



  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <ScoreCard /> } />
      </Routes>
      <RouterButton />
    </div>
  );
}


export default App
