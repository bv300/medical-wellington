import logo from '../../assets/medicare-logo.png'
import './Footer.css'

const exploreLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Vision/Mission', href: '#mission-vision' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
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
            <a className="social-link" href="#" aria-label="WhatsApp">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12.03 2.5a9.66 9.66 0 00-8.24 14.7l-1.35 4.92 5.04-1.32A9.66 9.66 0 1012.03 2.5zm0 17.65a7.99 7.99 0 01-4.07-1.12l-.29-.17-3.03.8.8-2.95-.19-.3a7.99 7.99 0 116.78 3.74zm4.4-6c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06a6.52 6.52 0 01-1.92-1.19c-.66-.56-1.1-1.25-1.23-1.49-.13-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.54-1.3-.74-1.78c-.2-.47-.4-.4-.54-.41-.14 0-.3-.01-.46-.01s-.42.06-.64.3c-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64 1.43.6 2.01.65 2.7.55.78-.11 2.37-.97 2.7-1.9.33-.93.33-1.73.23-1.9-.1-.17-.34-.27-.58-.39z"/></svg>
            </a>
            <a className="social-link" href="#" aria-label="Facebook">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.48-10 10.02 0 5 3.66 9.15 8.44 9.9v-7h-2.54v-2.9h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.45-9.9c0-5.54-4.5-10.02-10-10.02z"/></svg>
            </a>
            <a className="social-link" href="#" aria-label="Instagram">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.36.88.4.4.66.8.88 1.36.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.88 1.36-.4.4-.8.66-1.36.88-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41-.56-.22-.96-.48-1.36-.88-.4-.4-.66-.8-.88-1.36-.16-.42-.36-1.05-.41-2.22C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.88-1.36.4-.4.8-.66 1.36-.88.42-.16 1.05-.36 2.22-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.77.13 4.9.33 4.14.63c-.8.3-1.47.73-2.14 1.4-.67.67-1.1 1.34-1.4 2.14-.3.76-.5 1.63-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.3.8.73 1.47 1.4 2.14.67.67 1.34 1.1 2.14 1.4.76.3 1.63.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56.8-.3 1.47-.73 2.14-1.4.67-.67 1.1-1.34 1.4-2.14.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91-.3-.8-.73-1.47-1.4-2.14-.67-.67-1.34-1.1-2.14-1.4-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm5.22-10.43a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
            </a>
            <a className="social-link" href="#" aria-label="Email">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
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
