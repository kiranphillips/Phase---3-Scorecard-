import HoleScores from './HoleScores'
import Card from './Card'

function ScoreCard ({onAddRound}) {
  return (
    <div id="scorecard_container">
      <div>
        <img id='pin_image' src="https://www.kindpng.com/picc/m/83-839152_golf-flag-golf-clipart-explore-pictures-golf-pin.png" />
      </div>
      <HoleScores onaddRound={onAddRound}/>
    </div>
  )
}

export default ScoreCard