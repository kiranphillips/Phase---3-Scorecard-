import { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

function RouterButton () {
  const [show, setShow] = useState(true)


  return (
    <Link to='/rounds'>
      <button onClick={() => setShow(prev => !prev)} id="router_button">View All Rounds</button>
      {show && <box><RouterButton/></box>}
    </Link>
  )
}

export default RouterButton;