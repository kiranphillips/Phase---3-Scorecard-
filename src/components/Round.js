import Round from "./Round"

function Round({ score }) {
    const {score, golf_course} = score
  
    return (
      <div id="round">
            <span class="name">
              {golf_course}
            </span>
          </div>
    );
  }
fetch("http://localhost:9292/test")
  .then((r) => r.json())
  .then((data) => console.log(data));


export default Round