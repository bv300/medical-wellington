import './About.css'

function About() {
  return (
    <section id="about" className="about-section-single">
      {/* Dynamic Background Glows */}
      <div className="about-hero-glow shape-1"></div>
      <div className="about-hero-glow shape-2"></div>

      <div className="about-hero-container">
        {/* Left Column: Concise Text Content */}
        <div className="about-hero-text-content reveal-slide-left">
          <div className="about-hero-badge">
            <span className="material-symbols-outlined text-sm">groups</span>
            About Us
          </div>

          <h1 className="about-hero-title">
            Medicare <br />
            <span className="text-gradient">Wellington</span>
          </h1>

          <div className="about-hero-description">
            <p className="lead-text">
              Medicare Wellington is an inclusive community bringing together healthcare professionals and their families across the Wellington region.
            </p>
            <p>
              Built on compassion, unity, and service, we nurture lifelong friendships, promote wellbeing, celebrate cultural diversity, and support local community outreach.
            </p>

            {/* Compact Inauguration Milestone Callout */}
            <div className="about-milestone-callout">
              <div className="milestone-header">
                <span className="material-symbols-outlined text-sm">event</span>
                <span className="milestone-title">Grand Inauguration</span>
              </div>
              <p className="milestone-desc">
                Officially launched on <strong>25 October 2025</strong> at the Indian Association Hall, Kilbirnie, in the presence of distinguished community leaders and healthcare managers.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Compact 3D Visual Stack */}
        <div className="about-hero-visual reveal-scale stagger-2">
          <div className="about-hero-images">
            <div className="about-img-back">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgJxsAv_CjcyoXZ1ef7RW9LfJuTCuabRANKFdJ3Vnc2rbn9nn2S9N1dRYH0JqhweqYFa87wc8EOwLC5EXSXeSIABSeZGKLz4tiA9R_5DogQ3_TWFbND5O47yMp9Sli4WkMFRi3Jz4VB1opr_f6vhYWe_J969DvfUcQhVJBVyCWjL5hQ_OOhpBFXryDS_-nRkgc1IG7GhK1y1m2kcVMYgtDaKvkhGjU9Po9jNXSgLwVpMKlueLZ1Fy0H3gyOQbo0yHmOez6bSdZDw"
                alt="Community picnic"
              />
              <div className="glass-overlay"></div>
            </div>
            <div className="about-img-front">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo2ypmcSnpuxm5StEUaIzA0CeYj5s-tMwRIJWZMMbVKu2Qm1mKO3UQ2QgglEmJQvaGMXhORQvYnfuI85vzXWM7l50hxsPCTLusm7F0OLSinOTBV7apfMuzuNWX4cLRqoP60Um1KrheOG3mCCq8OPwqQvTGRkEKHRpgeiPVa81wsYTwogSJBfDHDBgECCNXo4VxwTmCaJs_MdE-nAVgxDjzozhADVrBXUkTfxpW02T63EG_3M4uNqSHRHjfqfscPgRLISp_Jcx9ug"
                alt="Community event"
              />
              <div className="glass-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
