function PlayerData ({ players, rounds }) {
  console.log('Players ->', players, 'Rounds ->', rounds);
  const playerCard = players.map(player => <div>{ player.username }</div>)
  const roundCard = rounds.map(round => <div>{ round.round_date }</div>)
  return (
    <table id="player_table">
      <tr className='player_rows'>
        <th>Name</th>
        <th>Round Date</th>
      </tr>
      <tr className='player_rows'>
        <td>{ playerCard[ 0 ] }</td>
        <td>{ roundCard[ 0 ] }</td>
      </tr>
      <tr className='player_rows'>
        <td></td>
        <td>{ roundCard[ 1 ] }</td>
      </tr>
      <tr className='player_rows'>
        <td>{ playerCard[ 1 ] }</td>
        <td>{ roundCard[ 2 ] }</td>
      </tr>
      <tr className='player_rows'>
        <td></td>
        <td>{ roundCard[ 3 ] }</td>
      </tr>
      <tr className='player_rows'>
        <td>{ playerCard[ 2 ] }</td>
        <td></td>
      </tr>
    </table>
  )
}

export default PlayerData;