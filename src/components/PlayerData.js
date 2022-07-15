import ModalButton from './ModalButton';
import { useState, useEffect } from 'react';


function PlayerData ({player}) {
  const {id, username} = player
  const [ scores, setScores ] = useState([])

  //fetch of score totals with players and scores logged ---->
  useEffect(() => {
    fetch("http://localhost:9292/score_totals")
      .then((r) => r.json())
      .then((scores) => setScores(scores));
  }, []);
  // ==================================================


  function handleDeleteScore(id) {
    const updatedScores = scores.filter((score) => score.id !== id);
    setScores(updatedScores);
  }

  return (
    <div>
      <table id="player_table">
        <thead>
          <tr className='player_rows'>
            <th className='content_row'>Player Name</th>
            <th className='content_row'>Round History</th>
          </tr>
          <tr className='player_rows'>
            <td>{username}</td>
            <td><ModalButton scores={scores} player={player} onScoreDelete = {handleDeleteScore}/></td>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default PlayerData;