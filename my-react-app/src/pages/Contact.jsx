import ContactForm from '../features/contact/ContactForm'
import './Contact.css'

function Contact() {
  return (
    <main id="contact-page" className="w-full flex-grow flex flex-col">
      <div className="contact-page-wrapper">
        <div className="contact-page-header">
          <h1 className="contact-page-title">Get in Touch</h1>
          <p className="contact-page-desc">
            We'd love to hear from you. Whether you have a question about our events, membership, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Information */}
          <div className="contact-info-col">
            
            {/* Address Card */}
            <div className="info-card">
              <div className="info-icon-wrapper">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div className="info-content">
                <h3 className="info-label">Our Location</h3>
                <p className="info-text">
                  Wellington, New Zealand<br />
                  <span className="text-sm opacity-80">(Serving healthcare professionals nationwide)</span>
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="info-card">
              <div className="info-icon-wrapper">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div className="info-content">
                <h3 className="info-label">Email Us</h3>
                <p className="info-text">
                  <a href="mailto:info@medicarewellington.co.nz" className="info-link">
                    info@medicarewellington.co.nz
                  </a>
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="info-card">
              <div className="info-icon-wrapper">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div className="info-content">
                <h3 className="info-label">Call Us</h3>
                <p className="info-text">
                  <a href="tel:+64000000000" className="info-link">
                    +64 (0) 000 0000
                  </a>
                </p>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="info-card">
              <div className="info-icon-wrapper">
                <span className="material-symbols-outlined">share</span>
              </div>
              <div className="info-content">
                <h3 className="info-label">Connect with Us</h3>
                <div className="social-links-wrapper">
                  <a href="#" className="contact-social-link" aria-label="Facebook">
                    <span className="material-symbols-outlined">thumb_up</span>
                  </a>
                  <a href="#" className="contact-social-link" aria-label="Instagram">
                    <span className="material-symbols-outlined">photo_camera</span>
                  </a>
                  <a href="#" className="contact-social-link" aria-label="Twitter">
                    <span className="material-symbols-outlined">tag</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
