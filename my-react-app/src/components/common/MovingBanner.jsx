import { useState } from 'react'
import './MovingBanner.css'

const MOVING_ANNOUNCEMENTS = [
  {
    id: 'm1',
    icon: 'festival',
    title: 'EVE FEST 2026 – Grand Celebration of Easter, Eid & Vishu at P.I.P.C Hall, Newtown',
    date: 'April 2026',
    linkPage: 'events'
  },
  {
    id: 'm2',
    icon: 'bloodtype',
    title: 'Blood Donation Drive 2026 with NZ Blood Service – Join our life-saving mission!',
    date: '4 March 2026',
    linkPage: 'events'
  },
  {
    id: 'm3',
    icon: 'palette',
    title: "Children's Colouring & Bottle Art Competition – Celebrating Young Creativity",
    date: 'Dec 2025',
    linkPage: 'events'
  },
  {
    id: 'm4',
    icon: 'payments',
    title: 'Financial Investment & Wealth Creation Seminar for Healthcare Families',
    date: 'Dec 2025',
    linkPage: 'events'
  },
  {
    id: 'm5',
    icon: 'celebration',
    title: 'Luminous Fiesta & Santa Parade – Over 400 Community Attendees in Newtown',
    date: '29 Dec 2025',
    linkPage: 'events'
  }
]

function MovingBanner({ onNavigate }) {
  const [isPaused, setIsPaused] = useState(false)

  const handleItemClick = (page) => {
    if (onNavigate) {
      onNavigate(page || 'events')
    }
  }

  // Duplicate items array for continuous seamless infinite marquee loop
  const marqueeItems = [...MOVING_ANNOUNCEMENTS, ...MOVING_ANNOUNCEMENTS]

  return (
    <div
      className="moving-banner-section"
      aria-label="Moving Announcements and Programmes Ticker"
    >
      <div className="moving-banner-container">
        {/* Left Sticky Label Header */}
        <div
          className="moving-banner-header"
          onClick={() => handleItemClick('events')}
          role="button"
          tabIndex={0}
          aria-label="Go to Events and Updates page"
        >
          <div className="moving-header-badge">
            <span className="material-symbols-outlined header-icon">campaign</span>
            <span className="header-text">Announcement</span>
          </div>
          <div className="header-divider-line"></div>
        </div>

        {/* Marquee Motion Track Container */}
        <div
          className="moving-marquee-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`moving-marquee-track ${isPaused ? 'paused' : ''}`}>
            {marqueeItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="moving-ticker-item"
                onClick={() => handleItemClick(item.linkPage)}
                role="button"
                tabIndex={0}
              >
                <span className="material-symbols-outlined item-icon">{item.icon}</span>

                <span className="item-title">{item.title}</span>

                <span className="item-date">
                  <span className="material-symbols-outlined date-icon">calendar_today</span>
                  {item.date}
                </span>

                <span className="item-arrow">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovingBanner
