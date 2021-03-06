import { useState, useEffect } from 'react'
import RouterButton from './RouterButton'

function HoleScores () {


  const [ formData, setFormData ] = useState({
    course_name: "",
    round_date: "",
    username: "",
    score_to_par: "",
    strokes: "",
    total_putts: "",
    fairways_hit: "",

  })

  function handleChange (e) {
    console.log(formData.username)

    setFormData({
      ...formData,
      [ e.target.name ]: e.target.value
    })
  }

  function handleSubmit (e) {
    e.preventDefault();


    const newRound = {
      course_name: formData.courseName,
      round_date: formData.roundDate,
      score_to_par: formData.courseTotal,
      strokes: formData.strokes,
      total_putts: formData.putts,
      fairways_hit: formData.fairwaysHit,
      username: formData.username
    }

    fetch("http://localhost:9292/score_totals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newRound)
    })
  }

  return (
    <>
      <div id='score_form'>
        <form onSubmit={ handleSubmit }>
          <div className='entry_data'>
            <label >Golf Course Name:
              <input name="courseName" value={ formData.courseName } onChange={ handleChange } placeholder='Enter Course Name' className='course'></input>
            </label>
            <label>Date:
              <input name="roundDate" value={ formData.roundDate } onChange={ handleChange } placeholder='mm/dd/yyyy' className='date'></input>
            </label>
            <label>Player:
              <input name="username" value={ formData.username } onChange={ handleChange } placeholder='player' className='date'></input>
            </label>
          </div>
          <label>
            Score to Par:
            <input name="courseTotal" value={ formData.courseTotal } onChange={ handleChange } className='data'></input>
          </label>
          <label>
            Total Strokes:
            <input name="strokes" value={ formData.strokes } onChange={ handleChange } className='data'></input>
          </label>
          <label>
            Total Putts:
            <input name="putts" value={ formData.putts } onChange={ handleChange } className='data'></input>
          </label>
          <label>
            Fairways Hit:
            <input name="fairwaysHit" value={ formData.fairwaysHit } onChange={ handleChange } className='data'></input>
          </label>
          <button id="button" type="submit">Submit Score</button>
        </form>
      </div>
      <RouterButton />
    </>
  )
}

export default HoleScores;