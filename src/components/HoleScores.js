import { useState, useEffect } from 'react'
import Rounds from './Rounds'

function HoleScores ( {onAddRound} ) {

  const [ formData, setFormData] = useState({
        course_name: "",
        round_date: "",
        score_to_par: "",
        strokes: "",
        total_putts: "",
        fairways_hit: "",

})

function handleChange(e) {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}

  function handleSubmit(e) {
    e.preventDefault();

    const newRound = {
        course_name: formData.courseName,
        round_date: formData.roundDate,
        score_to_par: formData.courseTotal,
        strokes: formData.strokes,
        total_putts: formData.putts,
        fairways_hit: formData.fairwaysHit,
      }


    fetch("http://localhost:9292/score_totals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRound),
    })
      .then((r) => r.json())
  }


  return (
      <div id='score_form'>
        <form onSubmit={handleSubmit}>
        <label>Golf Course Name:
          <input name="courseName" value={formData.courseName} onChange={handleChange} placeholder='Enter Course Name' className='course'></input>
        </label>
        <label>Date:
          <input  name="roundDate" value={formData.roundDate} onChange={handleChange} placeholder='mm/dd/yyyy' className='date'></input>
        </label>
        <label>
            Score to Par:
            <input name="courseTotal" value={formData.courseTotal} onChange={handleChange} className='data'></input>
          </label>
          <label>
            Total Strokes:
            <input name="strokes" value={formData.strokes} onChange={handleChange} className='data'></input>
          </label>
          <label>
            Total Putts:
            <input name="putts" value={formData.putts} onChange={handleChange} className='data'></input>
          </label>
          <label>
            Fairways Hit:
            <input name="fairwaysHit" value={formData.fairwaysHit} onChange={handleChange} className='data'></input>
          </label>
          <button id="button" type="submit">Submit Score</button>
        </form>
      </div>
  )
}

export default HoleScores;