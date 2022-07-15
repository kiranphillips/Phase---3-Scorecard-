
import RoundsContainer from './RoundsContainer';
import RouterButton from './RouterButton';
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Rounds () {

  return (
    <div>
      <RoundsContainer />
      <Link to='/'>
        <button id="router_button">Back</button>
      </Link>
    </div>
  )
}

export default Rounds