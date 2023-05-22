import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="container">
    <div className="navbar">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/daeetgsof/image/upload/v1684559090/red-heartbeat-symbol-graphic-illustration_53876-8061_qou6yf.avif"
          alt="Health"
          className="health-image"
        />
        <h1 className="header-heading">Healthy Aging Hub</h1>
      </div>
      <div className="header-title">
        <Link to="/home" className="title">
          Home
        </Link>
        <Link to="/foodhabits" className="title">
          FoodHabits
        </Link>
        <Link to="/exercise" className="title">
          Exercise
        </Link>
        <Link to="/healthproblems" className="title">
          HealthProblems
        </Link>
      </div>
    </div>
  </div>
)

export default Header
