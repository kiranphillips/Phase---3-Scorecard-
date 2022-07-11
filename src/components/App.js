import React from "react";
import Player from "./Player"
import Hole from ".Hole"
import Round from "./Round"
import Login from './Login';

function App() {

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <HeaderMain />
      <Routes>
        {/* <Route path="/" element={<TeamPage isLoggedIn={isLoggedIn}/>} /> */}
        <Route path="/.Player" element={<Player />} />
        <Route path="/.Hole" element={<Hole />} />
        <Route path="/.Round" element={<Round />} />
        <Route path="/.Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>

    </div>
  );
}


export default App
