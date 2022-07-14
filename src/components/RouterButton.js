import { BrowserRouter as Router, Link } from 'react-router-dom'

function RouterButton () {
  return (
    <Link to='/data'>
      <button id="router_button">View All Rounds</button>
    </Link>
  )
}

export default RouterButton;