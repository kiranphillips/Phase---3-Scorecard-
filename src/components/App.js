import React from "react";
import { Routes, Route} from "react-router-dom";
import Header from './Header';
import ScoreCard from './ScoreCard'
import Data from "./Data";
import Scores from "./Scores";


function App () {

  return (
    <div>
      <Header />
      {/* <ScoreCard/> */}
      <Routes> 
        <Route path="/" element={<ScoreCard />} />
         <Route path="/Data" element={<Data/>} /> 
        <Route path="/.Scores" element={<Scores />} />
      </Routes>
    </div>
  );
}


export default App
