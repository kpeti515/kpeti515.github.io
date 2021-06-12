import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/awards">Awards</Link></li>
        <li><Link to="/about">About me</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  )
}

export default Header