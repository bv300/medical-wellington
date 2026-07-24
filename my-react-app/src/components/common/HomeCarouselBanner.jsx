import { useState, useEffect, useRef } from 'react'
import onamImg from '../../assets/onam-event-medicare.png'
import newProgramImg from '../../assets/New-program-2026.png'
import './HomeCarouselBanner.css'

const BANNER_IMAGES = [
  {
    id: 1,
    url: onamImg,
    alt: 'Medicare Wellington Onam Celebration 2026'
  },
  {
    id: 2,
    url: newProgramImg,
    alt: 'Medicare Wellington New Programmes 2026'
  }
]

function HomeCarouselBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)

  const startTimer = () => {
    stopTimer()
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BANNER_IMAGES.length)
    }, 4500)
  }

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
  }

  useEffect(() => {
    if (!isPaused) {
      startTimer()
    } else {
      stopTimer()
    }
    return () => stopTimer()
  }, [isPaused])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % BANNER_IMAGES.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + BANNER_IMAGES.length) % BANNER_IMAGES.length)
  }

  return (
    <section
      className="home-carousel-banner-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Home Image Carousel Banner"
    >
      <div className="carousel-banner-wrapper">
        {BANNER_IMAGES.map((img, idx) => (
          <div
            key={img.id}
            className={`carousel-banner-slide ${idx === currentIndex ? 'active' : ''}`}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="carousel-banner-img"
            />
          </div>
        ))}

        {/* Previous Button */}
        <button
          className="carousel-banner-arrow prev"
          onClick={handlePrev}
          aria-label="Previous Banner"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        {/* Next Button */}
        <button
          className="carousel-banner-arrow next"
          onClick={handleNext}
          aria-label="Next Banner"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>

        {/* Pagination Dots */}
        {/* {BANNER_IMAGES.length > 1 && (
          <div className="carousel-banner-dots">
            {BANNER_IMAGES.map((_, idx) => (
              <button
                key={idx}
                className={`banner-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )} */}
      </div>
    </section>
  )
}

export default HomeCarouselBanner
