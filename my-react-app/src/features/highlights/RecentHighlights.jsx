import { useState, useEffect } from 'react'
import { newsArticles } from '../../pages/Events'
import './RecentHighlights.css'

function RecentHighlights() {
  const homeEvents = newsArticles?.slice(0, 4) ?? []

  const [activeIndex, setActiveIndex] = useState(0)
  const [displayIndex, setDisplayIndex] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState('forward')

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isFlipping) {
        const nextIndex = (activeIndex + 1) % homeEvents.length
        goToIndex(nextIndex)
      }
    }, 6000)
    return () => clearInterval(timer)
  }, [activeIndex, isFlipping, homeEvents.length])

  const goToIndex = (newIndex) => {
    if (isFlipping || newIndex === activeIndex) return
    const direction = newIndex > activeIndex ? 'forward' : 'backward'

    setFlipDirection(direction)
    setActiveIndex(newIndex)
    setIsFlipping(true)

    // Midpoint of animation: swap underlying displayed page content at 400ms
    setTimeout(() => {
      setDisplayIndex(newIndex)
    }, 400)

    // End of 3D animation (800ms)
    setTimeout(() => {
      setIsFlipping(false)
    }, 800)
  }

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + homeEvents.length) % homeEvents.length
    goToIndex(prevIndex)
  }

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % homeEvents.length
    goToIndex(nextIndex)
  }

  const activeEvent = homeEvents[displayIndex]
  const currentFlippingEvent = homeEvents[activeIndex]

  if (homeEvents.length === 0) return null

  return (
    <section id="highlights" className="highlights-section">
      {/* Section Header */}
      <div className="highlights-header">
        <div>
          <span className="highlights-subtitle">Stay Updated</span>
          <h2 className="highlights-title">Explore Highlights</h2>
          <p className="highlights-desc">
            Recent community events, milestones, and news.
          </p>
        </div>

      </div>

      {/* Horizontal Story Selector Pills */}
      <div className="highlights-story-pills">
        {homeEvents.map((ev, idx) => (
          <button
            key={ev.id}
            className={`story-pill ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => goToIndex(idx)}
          >
            <span className="pill-dot"></span>
            <span className="pill-title">{ev.title}</span>
          </button>
        ))}
      </div>

      {/* 3D BOOK & RESPONSIVE LAYOUT */}
      <div className="highlights-book-layout">

        {/* The 3D Book Component */}
        <div className={`book-wrapper ${isFlipping ? `is-flipping-${flipDirection}` : ''}`}>

          {/* Real 3D Flipping Leaf (Desktop) */}
          {isFlipping && (
            <div className="book-flipper">
              <div className="flipper-face flipper-front">
                <div
                  className="book-image"
                  style={{ backgroundImage: `url('${activeEvent?.image}')` }}
                >
                  <div className="book-image-overlay" />
                  <div className={`book-tag ${activeEvent?.tagClass || 'bg-primary/90 text-on-primary'}`}>
                    <span className="material-symbols-outlined text-[15px] mr-1">event</span>
                    {activeEvent?.tag}
                  </div>
                </div>
              </div>
              <div className="flipper-face flipper-back">
                <div
                  className="book-image"
                  style={{ backgroundImage: `url('${currentFlippingEvent?.image}')` }}
                >
                  <div className="book-image-overlay" />
                </div>
              </div>
            </div>
          )}

          {/* Left Page: Image */}
          <div className="book-page book-left">
            <div
              className="book-image"
              style={{ backgroundImage: `url('${activeEvent?.image}')` }}
            >
              <div className="book-image-overlay"></div>
              <div className={`book-tag ${activeEvent?.tagClass || 'bg-primary/90 text-on-primary'}`}>
                <span className="material-symbols-outlined text-[15px] mr-1">event</span>
                {activeEvent?.tag}
              </div>

              {/* Quick Arrow Controls over Image for Mobile */}
              <div className="mobile-img-arrows">
                <button className="img-arrow-btn" onClick={handlePrev} aria-label="Previous story">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="img-arrow-btn" onClick={handleNext} aria-label="Next story">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Page: Content */}
          <div className="book-page book-right">
            <div className="book-content-inner">
              <div className="book-date">
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                {activeEvent?.date}
              </div>
              <h3 className="book-title">{activeEvent?.title}</h3>
              <p className="book-desc">{activeEvent?.description}</p>
            </div>
          </div>

          {/* Center Spine Shadow */}
          <div className="book-spine"></div>
        </div>

        {/* Desktop Sidebar Directory */}
        <div className="scrolling-library desktop-only">
          <div className="library-header-box">
            <h4 className="library-title">Story Directory</h4>
            <p className="library-subtitle">Select to turn page</p>
          </div>
          <div className="library-list">
            {homeEvents.map((ev, idx) => (
              <button
                key={ev.id}
                className={`library-item ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => goToIndex(idx)}
              >
                <div className="library-item-text">
                  <span className="library-item-title">{ev.title}</span>
                  <span className="library-item-date">{ev.date}</span>
                </div>
                {idx === activeIndex && (
                  <span className="material-symbols-outlined library-active-icon">menu_book</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentHighlights
