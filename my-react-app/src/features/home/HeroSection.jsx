import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero-section">
      {/* Main Hero Block */}
      <div className="hero-main-block">
        <div
          className="hero-bg-wrapper"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAj5gUzEIbithYDcm0CAIbhzPkeMdND9gFaJyTX20kYXsQvbg48iowYSGoM6rdvFKU0KB6owDoKwhqRKUn6JhhB2sYMCuANZOwrQBqBi4-kJ07pLJLN8UGgP863Eo13ebui-0h8H6fZ1nDSH7xajD_Ujb-y5pSHALIMWZe1JLwgy__D2z5wfcAz5difgK6KEJgqXJLxKrRhgNX1GmyGhrKZXvIWjz_5gc1GT5xgla0KD3LtcT6s9XBmzxOKrqrshseRWJ7uJAhwHA')",
          }}
        />
        <div className="hero-bg-overlay" />
        <div className="hero-content">
          <span className="hero-badge">
            Community Network
          </span>
          <h1 className="hero-title">
            Welcome to <br />
            <span className="hero-title-highlight">Medicare Wellington</span>
          </h1>
          <p className="hero-desc">
            A Community of Healthcare Professionals and Families. Built on compassion, unity, and service.
          </p>
          <div className="hero-actions">
            <a className="hero-btn-primary" href="#">
              Explore Events
            </a>
            <a className="hero-btn-secondary" href="#">
              Our Mission
            </a>
          </div>
        </div>
      </div>

      {/* Side Bento Blocks */}
      <div className="hero-side-blocks">
        {/* Stat Block */}
        <div className="hero-stat-card">
          <div className="hero-stat-bg-shape" />
          <div className="hero-stat-content">
            <span
              className="material-symbols-outlined hero-stat-icon"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              groups
            </span>
            <h3 className="hero-stat-val">500+</h3>
            <p className="hero-stat-lbl">Active Members</p>
          </div>
        </div>

        {/* Image Block */}
        <div className="hero-img-card">
          <div
            className="hero-card-img"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDgJxsAv_CjcyoXZ1ef7RW9LfJuTCuabRANKFdJ3Vnc2rbn9nn2S9N1dRYH0JqhweqYFa87wc8EOwLC5EXSXeSIABSeZGKLz4tiA9R_5DogQ3_TWFbND5O47yMp9Sli4WkMFRi3Jz4VB1opr_f6vhYWe_J969DvfUcQhVJBVyCWjL5hQ_OOhpBFXryDS_-nRkgc1IG7GhK1y1m2kcVMYgtDaKvkhGjU9Po9jNXSgLwVpMKlueLZ1Fy0H3gyOQbo0yHmOez6bSdZDw')",
            }}
          />
          <div className="hero-card-img-overlay" />
          <div className="hero-card-img-lbl">
            <span className="material-symbols-outlined text-sm">celebration</span>
            <span className="font-label-md text-sm">Cultural Events</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
