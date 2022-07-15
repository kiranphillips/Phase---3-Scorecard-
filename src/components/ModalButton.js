import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import EditRound from './EditRound';

function ModalButton ({ scores, player, onScoreDelete }) {
  const [ show, setShow ] = useState(false);
  const { id, username } = player
  const [isEditing, setIsEditing] = useState(false)


  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }

  function handleUpdateScore() {
    setIsEditing(false);
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
          </tbody>
            {isEditing ? (
              <EditRound />
            ): null}
            <button key={id} className='round_button' onClick={() => setIsEditing((isEditing) => !isEditing)}>edit round</button>
            <button key={id} className='round_button' onClick={handleDeleteClick}>delete round</button>
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