import { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you shortly.')
    setFormData({ firstName: '', lastName: '', phone: '', message: '' })
  }

  return (
    <section className="contact-section">
      <div className="contact-card">
        <div className="contact-header">
          <h2 className="contact-title">Quick Contact</h2>
          <p className="contact-desc">
            Have a question? Send us a message and we'll get back to you shortly.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group col-span-2">
            <label className="form-label" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+64 00 000 0000"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group col-span-2">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              rows="4"
              id="message"
              name="message"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              required
            />
          </div>
          <div className="form-submit-wrapper">
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
