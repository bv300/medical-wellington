import logo from '../../assets/logo.svg'
import './Footer.css'

const exploreLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Events', href: '#' },
  { label: 'News', href: '#' },
]

const supportLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <div className="footer-brand">
            <div className="footer-brand-icon">
              <img src={logo} alt="Medicare Wellington Logo" className="footer-logo" />
            </div>
          </div>
          <p className="footer-desc">
            Stewardship through Connection. Supporting healthcare professionals and their families in New Zealand.
          </p>
          {/* Socials */}
          <div className="footer-socials">
            <a className="social-link" href="#" aria-label="External link">
              <span className="material-symbols-outlined text-sm">link</span>
            </a>
            <a className="social-link" href="#" aria-label="Email">
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div className="footer-links-col explore-col">
          <h4 className="footer-col-title">Explore</h4>
          <ul className="footer-links-list">
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <a className="footer-link" href={link.href}>
                  <span className="footer-dot bg-primary/40"></span> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Column */}
        <div className="footer-links-col legal-col">
          <h4 className="footer-col-title">Support</h4>
          <ul className="footer-links-list">
            {supportLinks.map((link) => (
              <li key={link.label}>
                <a className="footer-link" href={link.href}>
                  <span className="footer-dot bg-outline/30"></span> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p className="copyright-text">
          © {new Date().getFullYear()} Medicare Wellington. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
