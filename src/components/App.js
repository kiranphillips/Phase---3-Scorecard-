import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import ScoreCard from './ScoreCard'
import Rounds from "./Rounds";

function App () {

  return (
    <div class="bg-image">
      <Header />
      <Routes>
        <Route path="/" element={ <ScoreCard /> } />
        <Route path="/rounds" element={ <Rounds /> } />
      </Routes>
    </div>
  );
}


export default App
