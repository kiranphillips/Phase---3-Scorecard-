import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import ScoreCard from './ScoreCard'
import Scores from "./Scores";
import RouterButton from './RouterButton';


function App () {

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
