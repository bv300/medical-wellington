import { useState } from 'react'
import logo from '../../assets/logo.svg'
import './Navbar.css'

function Navbar({ currentPage, onPageChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Vision/Mission', id: 'mission-vision' },
    { label: 'Highlights', id: 'highlights' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => {
            onPageChange('home')
          }}
          className="navbar-brand"
        >
          <img src={logo} alt="Medicare Wellington Logo" className="navbar-logo" />
         
        </a>

        {/* Navigation Links */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.id}`}
              onClick={(e) => {
                onPageChange(link.id)
              }}
              className={`nav-link ${currentPage === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Desktop) - Removed per user request */}

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`#${link.id}`}
                onClick={(e) => {
                  onPageChange(link.id)
                  setMobileMenuOpen(false)
                }}
                className={`mobile-nav-link ${currentPage === link.id ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            {/* Mobile Actions - Removed per user request */}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
