import Scores from "./Scores"

function Rounds ( {rounds} ) {


  return (
    <div>
      <h1> Add Data Here? </h1>
        <ul>
          {rounds.map((round) => (
            <Scores 
            key={round.id}
            round={round}
            />
          ))}
        </ul>
    </div>
  )
}

export default Rounds