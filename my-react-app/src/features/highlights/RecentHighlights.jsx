import { useState, useEffect } from 'react'
import './RecentHighlights.css'
import { newsArticles } from '../../pages/Events'

function RecentHighlights({ onNavigateToEvents }) {
  const homeEvents = newsArticles.slice(0, 4)

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
    }, 5000)
    return () => clearInterval(timer)
  }, [activeIndex, isFlipping])

  const goToIndex = (newIndex) => {
    if (isFlipping || newIndex === activeIndex) return
    const direction = newIndex > activeIndex ? 'forward' : 'backward'
    
    setFlipDirection(direction)
    setActiveIndex(newIndex)
    setIsFlipping(true)

    // Midpoint of animation: swap content behind the black flipping page
    setTimeout(() => {
      setDisplayIndex(newIndex)
    }, 400) // Half of the 0.8s animation

    // End of animation
    setTimeout(() => {
      setIsFlipping(false)
    }, 800)
  }

  const activeEvent = homeEvents[displayIndex]

  return (
    <section id="highlights" className="highlights-section">
      <div className="highlights-header">
        <div>
          <span className="highlights-subtitle">Stay Updated</span>
          <h2 className="highlights-title">Explore Highlights</h2>
          <p className="highlights-desc">
            Community events, milestones, and news.
          </p>
        </div>
      </div>

      {/* 3D BOOK LAYOUT (Responsive) */}
      <div className="highlights-book-layout">
        
        {/* The 3D Book */}
        <div className={`book-wrapper ${isFlipping ? `is-flipping-${flipDirection}` : ''}`}>
          
          {/* Black Flipping Page Mechanism */}
          {isFlipping && (
            <div className="book-flipper">
              <div className="book-flipper-gradient"></div>
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
                <span className="material-symbols-outlined text-[16px] mr-1">event</span>
                {activeEvent?.tag}
              </div>
            </div>
          </div>

          {/* Right Page: Content */}
          <div className="book-page book-right">
            <div className="book-content-inner">
              <h3 className="book-title">{activeEvent?.title}</h3>
              <div className="book-date">
                <span className="material-symbols-outlined text-[18px]">calendar_month</span> 
                {activeEvent?.date}
              </div>
              <p className="book-desc">{activeEvent?.description}</p>
              
              <button className="book-btn" onClick={onNavigateToEvents}>
                Read Full Story <span className="material-symbols-outlined text-sm ml-2">menu_book</span>
              </button>
            </div>
          </div>
          
          {/* Center Spine Shadow */}
          <div className="book-spine"></div>
        </div>

        {/* Scrolling Content Library (Index) */}
        <div className="scrolling-library">
          <div className="library-header-box">
            <h4 className="library-title">Explore Stories</h4>
            <p className="library-subtitle">Select an event below to view</p>
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
                  <span className="material-symbols-outlined library-active-icon">arrow_left</span>
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
