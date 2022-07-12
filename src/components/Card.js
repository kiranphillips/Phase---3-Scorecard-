import { useState } from 'react'

function Card () {
  let totStrokes;
  let totPutts;
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

  const handleSubmit = (e) => {
    e.preventDefault()
    totStrokes = parseInt(hole1) + parseInt(hole2) + parseInt(hole3) + parseInt(hole4) + parseInt(hole5) + parseInt(hole6) + parseInt(hole7) + parseInt(hole8) + parseInt(hole9) + parseInt(hole10) + parseInt(hole11) + parseInt(hole12) + parseInt(hole13) + parseInt(hole14) + parseInt(hole15) + parseInt(hole16) + parseInt(hole17) + parseInt(hole18)
    totPutts = parseInt(putt1) + parseInt(putt2) + parseInt(putt3) + parseInt(putt4) + parseInt(putt5) + parseInt(putt6) + parseInt(putt7) + parseInt(putt8) + parseInt(putt9) + parseInt(putt10) + parseInt(putt11) + parseInt(putt12) + parseInt(putt13) + parseInt(putt14) + parseInt(putt15) + parseInt(putt16) + parseInt(putt17) + parseInt(putt18)
    console.log('Total Strokes -->', totStrokes)
    console.log('Total Putts -->', totPutts);

  }



  return (
    <div id='score_form'>
      <table>
        <tbody>
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
          <select className='dropdown'>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select className='dropdown'>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select className='dropdown'>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select className='dropdown'>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select className='dropdown'>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select className='dropdown'>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select className='dropdown'>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select className='dropdown'>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select className='dropdown'>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select className='dropdown'>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select className='dropdown'>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select className='dropdown'>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select className='dropdown'>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select className='dropdown'>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select className='dropdown'>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select className='dropdown'>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select className='dropdown'>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select className='dropdown'>
            <option>3</option>
            <option>4</option>
            <option>5</option>
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
          <select className='dropdown'>
            <option value={ true }>✅</option>
            <option value={ false }>❌</option>
          </select>
          <select className='dropdown'>
            <option value={ true }>✅</option>
            <option value={ false }>❌</option>
          </select>
          <select className='dropdown'>
            <option value={ true }>✅</option>
            <option value={ false }>❌</option>
          </select>
          <select className='dropdown'>
            <option value={ true }>✅</option>
            <option value={ false }>❌</option>
          </select>
          <select className='dropdown'>
            <option value={ true }>✅</option>
            <option value={ false }>❌</option>
          </select>
          <select className='dropdown'>
            <option value={ true }>✅</option>
            <option value={ false }>❌</option>
          </select>
          <select className='dropdown'>
            <option value={ true }>✅</option>
            <option value={ false }>❌</option>
          </select>
          <select className='dropdown'>
            <option value={ true }>✅</option>
            <option value={ false }>❌</option>
          </select>
          <select className='dropdown'>
            <option value={ true }>✅</option>
            <option value={ false }>❌</option>
          </select>
          <select className='dropdown'>
            <option value={ true }>✅</option>
            <option value={ false }>❌</option>
          </select>
          <select className='dropdown'>
            <option value={ true }>✅</option>
            <option value={ false }>❌</option>
          </select>
          <select className='dropdown'>
            <option value={ true }>✅</option>
            <option value={ false }>❌</option>
          </select>
          <select className='dropdown'>
            <option value={ true }>✅</option>
            <option value={ false }>❌</option>
          </select>
          <select className='dropdown'>
            <option value={ true }>✅</option>
            <option value={ false }>❌</option>
          </select>
          <select className='dropdown'>
            <option value={ true }>✅</option>
            <option value={ false }>❌</option>
          </select>
          <select className='dropdown'>
            <option value={ true }>✅</option>
            <option value={ false }>❌</option>
          </select>
          <select className='dropdown'>
            <option value={ true }>✅</option>
            <option value={ false }>❌</option>
          </select>
          <select className='dropdown'>
            <option value={ true }>✅</option>
            <option value={ false }>❌</option>
          </select>
        </label>
        <button id="button" type="submit">Submit Score</button>
      </form>
    </div>
  )
}

export default Card;