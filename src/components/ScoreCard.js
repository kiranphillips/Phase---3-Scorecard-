import ScoreCard from "./ScoreCard"

function ScoreCard({ score }) {
    const {score, golf_course} = score
  
    return (
      <div id="scoreCard">
            <span class="name">
              {golf_course}
            </span>
          </div>
    );
  }
fetch("http://localhost:9292/test")
  .then((r) => r.json())
  .then((data) => console.log(data));


export default ScoreCard