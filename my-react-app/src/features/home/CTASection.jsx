import './CTASection.css'

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-card">
        {/* Abstract shapes */}
        <div className="cta-bg-shape-1" />
        <div className="cta-bg-shape-2" />

        <div className="cta-content">
          <div className="cta-icon-wrapper">
            <span
              className="material-symbols-outlined cta-icon"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
          </div>
          <h2 className="cta-title">Join Our Community</h2>
          <p className="cta-desc">
            Are you a healthcare professional in Wellington looking to connect with a supportive, vibrant community? We
            welcome you and your family to grow with us.
          </p>
          <div className="cta-actions">
            <button className="cta-btn-primary">
              Become a Member
            </button>
            <button className="cta-btn-secondary">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
