import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import ScoreCard from './ScoreCard'
import RouterButton from './RouterButton';
import Rounds from './Rounds';



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
