import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

function ModalButton ({ scores, player, onScoreDelete }) {
  const [ show, setShow ] = useState(false);
  const { id, username } = player

  // console.log(scores)
  // console.log(scores[ 0 ].score_to_par)

  // const totalStrokes = scores.map(score => <td>{ score.strokes }</td>)


  // useEffect(() => {
  //   fetch("http://localhost:9292/hole_scores")
  //     .then((r) => r.json())
  //     .then((holes) => setHoles(holes));
  // }, []);

  // let holesArray = holes.filter(hole => hole.round_id === 1)

  // const firstRoundNum = holesArray.map(hole => {
  //   return <th>{ hole.hole_num }</th>
  // })
  // const firstRoundStrokes = holesArray.map(hole => {
  //   return <th>{ hole.num_strokes }</th>
  // })
  // const firstRoundPar = holesArray.map(hole => {
  //   return <th>{ hole.par }</th>
  // })
  // const tracker = {
  //   hole: 1,
  //   strokes: 0,
  //   putts: 0,
  //   fairHit: 0,
  //   par: 0
  // }

  // const [ stats, setStats ] = useState(tracker)
  // console.log(stats);

  // if (score.id === id)
  //    return (

  //)



  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }

  const renderScores = scores.map((score) => {
    const { id, score_to_par, strokes, total_putts, course_name, round_date, fairways_hit, } = score
    function handleDeleteClick() {
      fetch(`http://localhost:9292/score_totals/${id}`, {
        method: "DELETE",
      });
      onScoreDelete(id);
    }
    if (score.player_id === player.id)
      return (
        <table>
          <tbody>
            <tr>
              <th className='modal_th'>Round Date</th>
              <th className='modal_th'>Course Name</th>
              <th className='modal_th'>Total Strokes</th>
              <th className='modal_th'>Score to Par</th>
              <th className='modal_th'>Total Putts</th>
              <th className='modal_th'>Fairways Hit</th>
            </tr>
            <tr>
              <td>{ round_date }</td>
              <td>{ course_name }</td>
              <td>{ strokes }</td>
              <td>{ score_to_par }</td>
              <td>{ total_putts }</td>
              <td>{ fairways_hit }</td>
            </tr>
            <button key={id} className='round_button'>edit round</button>
            <button key={id} className='round_button' onClick={handleDeleteClick}>delete round</button>
          </tbody>
        </table>
      )
  })

  return (
    <>
      <Button key={ id } className="round_button" variant="primary" onClick={ handleShow }>
        view rounds
      </Button>

      <Modal className="onshow" show={ show } onHide={ handleClose }>
        <Modal.Header>
          <Modal.Title>Round Totals:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { renderScores }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ handleClose }>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}


export default ModalButton;