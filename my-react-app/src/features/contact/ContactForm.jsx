import { useState } from 'react'
import './ContactForm.css'

// Get your free access key at https://web3forms.com — no signup/activation email needed,
// just enter your email and it gives you a key instantly.
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE'

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'phone') {
      // Allow only digits, spaces, plus signs, dashes, and parentheses in real time
      const cleanValue = value.replace(/[^0-9\s\-\(\)\+]/g, '')
      setFormData((prev) => ({ ...prev, [name]: cleanValue }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate New Zealand phone number format if provided
    if (formData.phone.trim() !== '') {
      const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '')
      // NZ Mobile: starts with 02 or +642 followed by 7-9 digits
      // NZ Landline: starts with 03,04,06,07,09 or +64 followed by 7 digits
      const nzPhoneRegex = /^(?:\+64|0)(?:2\d{7,9}|[34679]\d{7})$/

      if (!nzPhoneRegex.test(cleanPhone)) {
        alert('Please enter a valid New Zealand phone number (e.g., 021 123 4567 or 04 123 4567).')
        return
      }
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New Contact Form Submission - Medicare Wellington',
          from_name: `${formData.firstName} ${formData.lastName}`,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
          // Honeypot field for spam protection — must stay empty
          botcheck: '',
        }),
      })

      const result = await response.json()

      if (result.success) {
        alert('Thank you for your message! It has been sent successfully.')
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
      } else {
        throw new Error(result.message || 'Form submission failed.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('Oops! Something went wrong while sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <div className="contact-header">
          <h2 className="contact-title">Quick Contact</h2>
          <p className="contact-desc">
            Have a question? Send us a message and we'll get back to you shortly.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Honeypot field — hidden from real users, catches bots */}
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

          <div className="form-group">
            <label className="form-label" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
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
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group full-width">
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
            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm