import { useState, useEffect, useRef } from 'react'
import './HeroSection.css'

const HERO_IMAGES = [
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAj5gUzEIbithYDcm0CAIbhzPkeMdND9gFaJyTX20kYXsQvbg48iowYSGoM6rdvFKU0KB6owDoKwhqRKUn6JhhB2sYMCuANZOwrQBqBi4-kJ07pLJLN8UGgP863Eo13ebui-0h8H6fZ1nDSH7xajD_Ujb-y5pSHALIMWZe1JLwgy__D2z5wfcAz5difgK6KEJgqXJLxKrRhgNX1GmyGhrKZXvIWjz_5gc1GT5xgla0KD3LtcT6s9XBmzxOKrqrshseRWJ7uJAhwHA',
    title: (
      <>
        Welcome to <br />
        <span className="hero-title-highlight">Medicare Wellington</span>
      </>
    ),
    desc: 'A Community of Healthcare Professionals and Families. Built on compassion, unity, and service.'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgJxsAv_CjcyoXZ1ef7RW9LfJuTCuabRANKFdJ3Vnc2rbn9nn2S9N1dRYH0JqhweqYFa87wc8EOwLC5EXSXeSIABSeZGKLz4tiA9R_5DogQ3_TWFbND5O47yMp9Sli4WkMFRi3Jz4VB1opr_f6vhYWe_J969DvfUcQhVJBVyCWjL5hQ_OOhpBFXryDS_-nRkgc1IG7GhK1y1m2kcVMYgtDaKvkhGjU9Po9jNXSgLwVpMKlueLZ1Fy0H3gyOQbo0yHmOez6bSdZDw',
    title: (
      <>
        Celebrating <br />
        <span className="hero-title-highlight">Togetherness</span>
      </>
    ),
    desc: 'Uniting Malayalee healthcare professionals and their families in Wellington through rich cultural celebrations.'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo2ypmcSnpuxm5StEUaIzA0CeYj5s-tMwRIJWZMMbVKu2Qm1mKO3UQ2QgglEmJQvaGMXhORQvYnfuI85vzXWM7l50hxsPCTLusm7F0OLSinOTBV7apfMuzuNWX4cLRqoP60Um1KrheOG3mCCq8OPwqQvTGRkEKHRpgeiPVa81wsYTwogSJBfDHDBgECCNXo4VxwTmCaJs_MdE-nAVgxDjzozhADVrBXUkTfxpW02T63EG_3M4uNqSHRHjfqfscPgRLISp_Jcx9ug',
    title: (
      <>
        Nurturing <br />
        <span className="hero-title-highlight">Stronger Bonds</span>
      </>
    ),
    desc: 'Fostering friendships and collaboration among members and their loved ones through picnics and outdoor events.'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAb5hwlaKbGpqohH7CEASzuBt2K9cy2Y4NdQ0RGQUvowXEtLdQwTDawJMlycL1Gx2WioWCp644m2yG5432joMkD71ZWe8zX-NApCPtxaWCF_1emqtmigIslQ1gyOzBg15wXIqCHqDPQJ1gdLhHlMiXQLMoHldm50Gq61-R9aWpVo940A1ZQYzRoGDXaep_WPiz0p6eGIAEGboVB0abvttzPIlPtaE0Uaj2JphOje4CHR4VRHRVHMBxAnll7lHLpXPHzqLkNz9TLA',
    title: (
      <>
        Commencing a <br />
        <span className="hero-title-highlight">Great Journey</span>
      </>
    ),
    desc: 'Official launch of our association, bringing together distinguished guests and our community under one banner.'
  }
]

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timerRef = useRef(null)

  const nextIndex = (currentIndex + 1) % HERO_IMAGES.length

  const startTimer = () => {
    stopTimer()
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length)
    }, 5000)
  }

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
  }

  useEffect(() => {
    startTimer()
    return () => stopTimer()
  }, [])

  const handleNextClick = () => {
    setCurrentIndex(nextIndex)
    startTimer()
  }

  const currentHero = HERO_IMAGES[currentIndex]
  const nextHero = HERO_IMAGES[nextIndex]

  return (
    <section className="hero-section">
      <div className="hero-card-container">
        {/* Full Cover Background Images */}
        {HERO_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className={`hero-bg-wrapper ${idx === currentIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url('${img.url}')`,
            }}
          />
        ))}
        <div className="hero-bg-overlay" />

        {/* Content & Floating Widgets Layout Grid */}
        <div className="hero-grid-layout">
          {/* Left: Main Content */}
          <div className="hero-content" key={currentIndex}>
            <h1 className="hero-title">
              {currentHero.title}
            </h1>
            <p className="hero-desc">
              {currentHero.desc}
            </p>
            <div className="hero-actions">
              <a className="hero-btn-secondary" href="#contact">
                Contact Us
              </a>
            </div>
          </div>

          {/* Right: Floating Glassmorphic Widgets */}
          <div className="hero-floating-widgets">

            {/* Next Image Preview Card */}
            <div className="hero-img-card next-preview-card glass-widget" onClick={handleNextClick}>
              <div
                className="hero-card-img"
                style={{
                  backgroundImage: `url('${nextHero.url}')`,
                }}
              />
              <div className="hero-card-img-overlay next-card-overlay" />
              <div className="hero-card-img-lbl next-card-lbl">
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
