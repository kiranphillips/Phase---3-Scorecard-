import { useState } from 'react'

function Card ( {onAddRound} ) {
  let totStrokes;
  let totPutts;
  let totPar;

  const [ course, setCourse ] = useState('')
  const [ date, setDate ] = useState('')


  const [ hole1, setHole1 ] = useState('')
  const [ hole2, setHole2 ] = useState('')
  const [ hole3, setHole3 ] = useState('')
  const [ hole4, setHole4 ] = useState('')
  const [ hole5, setHole5 ] = useState('')
  const [ hole6, setHole6 ] = useState('')
  const [ hole7, setHole7 ] = useState('')
  const [ hole8, setHole8 ] = useState('')
  const [ hole9, setHole9 ] = useState('')
  const [ hole10, setHole10 ] = useState('')
  const [ hole11, setHole11 ] = useState('')
  const [ hole12, setHole12 ] = useState('')
  const [ hole13, setHole13 ] = useState('')
  const [ hole14, setHole14 ] = useState('')
  const [ hole15, setHole15 ] = useState('')
  const [ hole16, setHole16 ] = useState('')
  const [ hole17, setHole17 ] = useState('')
  const [ hole18, setHole18 ] = useState('')
  // ---------------------------------------
  const [ putt1, setPutt1 ] = useState('')
  const [ putt2, setPutt2 ] = useState('')
  const [ putt3, setPutt3 ] = useState('')
  const [ putt4, setPutt4 ] = useState('')
  const [ putt5, setPutt5 ] = useState('')
  const [ putt6, setPutt6 ] = useState('')
  const [ putt7, setPutt7 ] = useState('')
  const [ putt8, setPutt8 ] = useState('')
  const [ putt9, setPutt9 ] = useState('')
  const [ putt10, setPutt10 ] = useState('')
  const [ putt11, setPutt11 ] = useState('')
  const [ putt12, setPutt12 ] = useState('')
  const [ putt13, setPutt13 ] = useState('')
  const [ putt14, setPutt14 ] = useState('')
  const [ putt15, setPutt15 ] = useState('')
  const [ putt16, setPutt16 ] = useState('')
  const [ putt17, setPutt17 ] = useState('')
  const [ putt18, setPutt18 ] = useState('')
  // ---------------------------------------
  const [ par1, setPar1 ] = useState(3)
  const [ par2, setPar2 ] = useState(3)
  const [ par3, setPar3 ] = useState(3)
  const [ par4, setPar4 ] = useState(3)
  const [ par5, setPar5 ] = useState(3)
  const [ par6, setPar6 ] = useState(3)
  const [ par7, setPar7 ] = useState(3)
  const [ par8, setPar8 ] = useState(3)
  const [ par9, setPar9 ] = useState(3)
  const [ par10, setPar10 ] = useState(3)
  const [ par11, setPar11 ] = useState(3)
  const [ par12, setPar12 ] = useState(3)
  const [ par13, setPar13 ] = useState(3)
  const [ par14, setPar14 ] = useState(3)
  const [ par15, setPar15 ] = useState(3)
  const [ par16, setPar16 ] = useState(3)
  const [ par17, setPar17 ] = useState(3)
  const [ par18, setPar18 ] = useState(3)
  // ------------------------------------
  const [ fair1, setFair1 ] = useState(false)
  const [ fair2, setFair2 ] = useState(false)
  const [ fair3, setFair3 ] = useState(false)
  const [ fair4, setFair4 ] = useState(false)
  const [ fair5, setFair5 ] = useState(false)
  const [ fair6, setFair6 ] = useState(false)
  const [ fair7, setFair7 ] = useState(false)
  const [ fair8, setFair8 ] = useState(false)
  const [ fair9, setFair9 ] = useState(false)
  const [ fair10, setFair10 ] = useState(false)
  const [ fair11, setFair11 ] = useState(false)
  const [ fair12, setFair12 ] = useState(false)
  const [ fair13, setFair13 ] = useState(false)
  const [ fair14, setFair14 ] = useState(false)
  const [ fair15, setFair15 ] = useState(false)
  const [ fair16, setFair16 ] = useState(false)
  const [ fair17, setFair17 ] = useState(false)
  const [ fair18, setFair18 ] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    totStrokes = parseInt(hole1) + parseInt(hole2) + parseInt(hole3) + parseInt(hole4) + parseInt(hole5) + parseInt(hole6) + parseInt(hole7) + parseInt(hole8) + parseInt(hole9) + parseInt(hole10) + parseInt(hole11) + parseInt(hole12) + parseInt(hole13) + parseInt(hole14) + parseInt(hole15) + parseInt(hole16) + parseInt(hole17) + parseInt(hole18)

    totPutts = parseInt(putt1) + parseInt(putt2) + parseInt(putt3) + parseInt(putt4) + parseInt(putt5) + parseInt(putt6) + parseInt(putt7) + parseInt(putt8) + parseInt(putt9) + parseInt(putt10) + parseInt(putt11) + parseInt(putt12) + parseInt(putt13) + parseInt(putt14) + parseInt(putt15) + parseInt(putt16) + parseInt(putt17) + parseInt(putt18)

    totPar = parseInt(par1) + parseInt(par2) + parseInt(par3) + parseInt(par4) + parseInt(par5) + parseInt(par6) + parseInt(par7) + parseInt(par8) + parseInt(par9) + parseInt(par10) + parseInt(par11) + parseInt(par12) + parseInt(par13) + parseInt(par14) + parseInt(par15) + parseInt(par16) + parseInt(par17) + parseInt(par18)
    console.log(course)
    console.log(date)
    console.log(totStrokes)
  }

  // function handleAddScores(e) {
  //   e.preventDefault();

  //   fetch("http://localhost:9292/hole_scores", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       hole_num: ,
  //       par: ,
  //       num_strokes: ,
  //       num_putts: ,
  //       fairway_hit: ,
  //       round_date: date,
  //     }),
  //   })
  //     .then((r) => r.json())
  //     .then((newRound) => {
  //       onAddRound(newRound);
  //     });
  // }



  return (
    <>
      <form onSubmit={ handleSubmit }>
        <label>Golf Course Name:
          <input value={ course } onChange={ e => setCourse(e.target.value) } placeholder='Enter Course Name' className='course'></input>
        </label>
      </form>
      <form onSubmit={ handleSubmit }>
        <label>Date:
          <input value={ date } onChange={ e => setDate(e.target.value) } placeholder='mm/dd/yy' className='date'></input>
        </label>
      </form>
      <div id='score_form'>
        <table>
          <tbody>
            <tr>
              <th>Hole:</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
              <th>11</th>
              <th>12</th>
              <th>13</th>
              <th>14</th>
              <th>15</th>
              <th>16</th>
              <th>17</th>
              <th>18</th>
            </tr>
          </tbody>
        </table>
        <form onSubmit={ handleSubmit }>
          <label>
            Strokes:
            <input className='data' value={ hole1 } onChange={ e => setHole1(e.target.value) }></input>
            <input className='data' value={ hole2 } onChange={ e => setHole2(e.target.value) }></input>
            <input className='data' value={ hole3 } onChange={ e => setHole3(e.target.value) }></input>
            <input className='data' value={ hole4 } onChange={ e => setHole4(e.target.value) }></input>
            <input className='data' value={ hole5 } onChange={ e => setHole5(e.target.value) }></input>
            <input className='data' value={ hole6 } onChange={ e => setHole6(e.target.value) }></input>
            <input className='data' value={ hole7 } onChange={ e => setHole7(e.target.value) }></input>
            <input className='data' value={ hole8 } onChange={ e => setHole8(e.target.value) }></input>
            <input className='data' value={ hole9 } onChange={ e => setHole9(e.target.value) }></input>
            <input className='data' value={ hole10 } onChange={ e => setHole10(e.target.value) }></input>
            <input className='data' value={ hole11 } onChange={ e => setHole11(e.target.value) }></input>
            <input className='data' value={ hole12 } onChange={ e => setHole12(e.target.value) }></input>
            <input className='data' value={ hole13 } onChange={ e => setHole13(e.target.value) }></input>
            <input className='data' value={ hole14 } onChange={ e => setHole14(e.target.value) }></input>
            <input className='data' value={ hole15 } onChange={ e => setHole15(e.target.value) }></input>
            <input className='data' value={ hole16 } onChange={ e => setHole16(e.target.value) }></input>
            <input className='data' value={ hole17 } onChange={ e => setHole17(e.target.value) }></input>
            <input className='data' value={ hole18 } onChange={ e => setHole18(e.target.value) }></input>
          </label>
          <label>
            Par:
            <select className='dropdown' value={ par1 } onChange={ e => setPar1(parseInt(e.target.value)) }>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <select className='dropdown' value={ par2 } onChange={ e => setPar2(e.target.value) }>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <select className='dropdown' value={ par3 } onChange={ e => setPar3(e.target.value) }>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <select className='dropdown' value={ par4 } onChange={ e => setPar4(e.target.value) }>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <select className='dropdown' value={ par5 } onChange={ e => setPar5(e.target.value) }>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <select className='dropdown' value={ par6 } onChange={ e => setPar6(e.target.value) }>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <select className='dropdown' value={ par7 } onChange={ e => setPar7(e.target.value) }>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <select className='dropdown' value={ par8 } onChange={ e => setPar8(e.target.value) }>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <select className='dropdown' value={ par9 } onChange={ e => setPar9(e.target.value) }>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <select className='dropdown' value={ par10 } onChange={ e => setPar10(e.target.value) }>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <select className='dropdown' value={ par11 } onChange={ e => setPar11(e.target.value) }>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <select className='dropdown' value={ par12 } onChange={ e => setPar12(e.target.value) }>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <select className='dropdown' value={ par13 } onChange={ e => setPar13(e.target.value) }>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <select className='dropdown' value={ par14 } onChange={ e => setPar14(e.target.value) }>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <select className='dropdown' value={ par15 } onChange={ e => setPar15(e.target.value) }>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <select className='dropdown' value={ par16 } onChange={ e => setPar16(e.target.value) }>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <select className='dropdown' value={ par17 } onChange={ e => setPar17(e.target.value) }>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <select className='dropdown' value={ par18 } onChange={ e => setPar18(e.target.value) }>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </label>
          <label>
            Putts:
            <input className='data' value={ putt1 } onChange={ e => setPutt1(e.target.value) }></input>
            <input className='data' value={ putt2 } onChange={ e => setPutt2(e.target.value) }></input>
            <input className='data' value={ putt3 } onChange={ e => setPutt3(e.target.value) }></input>
            <input className='data' value={ putt4 } onChange={ e => setPutt4(e.target.value) }></input>
            <input className='data' value={ putt5 } onChange={ e => setPutt5(e.target.value) }></input>
            <input className='data' value={ putt6 } onChange={ e => setPutt6(e.target.value) }></input>
            <input className='data' value={ putt7 } onChange={ e => setPutt7(e.target.value) }></input>
            <input className='data' value={ putt8 } onChange={ e => setPutt8(e.target.value) }></input>
            <input className='data' value={ putt9 } onChange={ e => setPutt9(e.target.value) }></input>
            <input className='data' value={ putt10 } onChange={ e => setPutt10(e.target.value) }></input>
            <input className='data' value={ putt11 } onChange={ e => setPutt11(e.target.value) }></input>
            <input className='data' value={ putt12 } onChange={ e => setPutt12(e.target.value) }></input>
            <input className='data' value={ putt13 } onChange={ e => setPutt13(e.target.value) }></input>
            <input className='data' value={ putt14 } onChange={ e => setPutt14(e.target.value) }></input>
            <input className='data' value={ putt15 } onChange={ e => setPutt15(e.target.value) }></input>
            <input className='data' value={ putt16 } onChange={ e => setPutt16(e.target.value) }></input>
            <input className='data' value={ putt17 } onChange={ e => setPutt17(e.target.value) }></input>
            <input className='data' value={ putt18 } onChange={ e => setPutt18(e.target.value) }></input>
          </label>
          <label>
            Fairway:
            <select className='dropdown' value={ fair1 } onChange={ e => setFair1(e.target.value === 'true') }>
              <option value='true'>✅</option>
              <option value='false'>❌</option>
            </select>
            <select className='dropdown' value={ fair2 } onChange={ e => setFair2(e.target.value === 'true') }>
              <option value='true'>✅</option>
              <option value='false'>❌</option>
            </select>
            <select className='dropdown' value={ fair3 } onChange={ e => setFair3(e.target.value === 'true') }>
              <option value='true'>✅</option>
              <option value='false'>❌</option>
            </select>
            <select className='dropdown' value={ fair4 } onChange={ e => setFair4(e.target.value === 'true') }>
              <option value='true'>✅</option>
              <option value='false'>❌</option>
            </select>
            <select className='dropdown' value={ fair5 } onChange={ e => setFair5(e.target.value === 'true') }>
              <option value='true'>✅</option>
              <option value='false'>❌</option>
            </select>
            <select className='dropdown' value={ fair6 } onChange={ e => setFair6(e.target.value === 'true') }>
              <option value='true'>✅</option>
              <option value='false'>❌</option>
            </select>
            <select className='dropdown' value={ fair7 } onChange={ e => setFair7(e.target.value === 'true') }>
              <option value='true'>✅</option>
              <option value='false'>❌</option>
            </select>
            <select className='dropdown' value={ fair8 } onChange={ e => setFair8(e.target.value === 'true') }>
              <option value='true'>✅</option>
              <option value='false'>❌</option>
            </select>
            <select className='dropdown' value={ fair9 } onChange={ e => setFair9(e.target.value === 'true') }>
              <option value='true'>✅</option>
              <option value='false'>❌</option>
            </select>
            <select className='dropdown' value={ fair10 } onChange={ e => setFair10(e.target.value === 'true') }>
              <option value='true'>✅</option>
              <option value='false'>❌</option>
            </select>
            <select className='dropdown' value={ fair11 } onChange={ e => setFair11(e.target.value === 'true') }>
              <option value='true'>✅</option>
              <option value='false'>❌</option>
            </select>
            <select className='dropdown' value={ fair12 } onChange={ e => setFair12(e.target.value === 'true') }>
              <option value='true'>✅</option>
              <option value='false'>❌</option>
            </select>
            <select className='dropdown' value={ fair13 } onChange={ e => setFair13(e.target.value === 'true') }>
              <option value='true'>✅</option>
              <option value='false'>❌</option>
            </select>
            <select className='dropdown' value={ fair14 } onChange={ e => setFair14(e.target.value === 'true') }>
              <option value='true'>✅</option>
              <option value='false'>❌</option>
            </select>
            <select className='dropdown' value={ fair15 } onChange={ e => setFair15(e.target.value === 'true') }>
              <option value='true'>✅</option>
              <option value='false'>❌</option>
            </select>
            <select className='dropdown' value={ fair16 } onChange={ e => setFair16(e.target.value === 'true') }>
              <option value='true'>✅</option>
              <option value='false'>❌</option>
            </select>
            <select className='dropdown' value={ fair17 } onChange={ e => setFair17(e.target.value === 'true') }>
              <option value='true'>✅</option>
              <option value='false'>❌</option>
            </select>
            <select className='dropdown' value={ fair18 } onChange={ e => setFair18(e.target.value === 'true') }>
              <option value='true'>✅</option>
              <option value='false'>❌</option>
            </select>
          </label>
          <button id="button" type="submit">Submit Score</button>
        </form>
      </div>

    </>
  )
}

export default Card;