import HoleScores from './HoleScores'
import Card from './Card'

function ScoreCard ({onAddRound}) {
  return (
    <div id="scorecard_container">
      <div>
        <img id='pin_image' src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/golf_flag.png" />
      </div>
      <HoleScores onaddRound={onAddRound}/>
    </div>
  )
}

export default ScoreCard