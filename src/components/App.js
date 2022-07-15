import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import ScoreCard from './ScoreCard'

import Scores from "./Scores";
import Rounds from "./Rounds";

import RouterButton from './RouterButton';




function App () {



  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <ScoreCard /> } />
        <Route path="/rounds" element={ <Rounds /> } />
      </Routes>
      <RouterButton />
    </div>
  );
}


export default App
