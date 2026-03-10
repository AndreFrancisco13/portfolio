import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/images/logo.png'

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const handleNavClick = (e, sectionId) => {
    if (isHome) {
      e.preventDefault()
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img src={logo} alt="Andre Francisco" />
      </Link>
      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <Link to={isHome ? '#work' : '/#work'} onClick={(e) => handleNavClick(e, 'work')}>
              Trabalho
            </Link>
          </li>
          <li>
            <Link to={isHome ? '#about' : '/#about'} onClick={(e) => handleNavClick(e, 'about')}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to={isHome ? '#contact' : '/#contact'} onClick={(e) => handleNavClick(e, 'contact')}>
              Contacto
            </Link>
          </li>
        </ul>
        <Link
          to={isHome ? '#contact' : '/#contact'}
          className="nav-cta"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Falar comigo
        </Link>
      </div>
    </nav>
  )
}
