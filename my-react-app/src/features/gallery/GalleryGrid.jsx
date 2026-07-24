import { useState, useMemo, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import './GalleryGrid.css'

import grandInaguration1 from '../../assets/grand-inaguration-1.jpeg'
import grandInaguration2 from '../../assets/grand-inaguration-2.jpeg'
import grandInaguration3 from '../../assets/grand-inaguration-3.jpeg'
import grandInaguration4 from '../../assets/grand-inaguration-4.jpeg'
import grandInaguration5 from '../../assets/grand-inaguration-5.jpeg'
import grandInaguration6 from '../../assets/grand-inaguration-6.jpeg'
import grandInaguration7 from '../../assets/grand-inaguration-7.jpeg'
import grandInaguration8 from '../../assets/grand-inaguration-8.jpeg'

const MAIN_FILTERS = ['All Photos', 'Festivals', 'Grand Inauguration', 'Charity']

const FESTIVALS_LIST = [
  { name: 'All Festivals', icon: 'auto_awesome' },
  { name: 'Onam', icon: 'spa' },
  { name: 'Christmas', icon: 'celebration' },
  { name: 'Eid', icon: 'nightlight' },
  { name: 'Vishu', icon: 'wb_sunny' },
  { name: 'Easter', icon: 'egg' }
]

const GALLERY_ITEMS = [
  // --- ONAM ---
  {
    id: 1,
    category: 'Onam',
    festival: 'Onam',
    title: 'Onam Celebration 2026',
    span: 2,
    colorNum: 1,
    url: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    category: 'Onam',
    festival: 'Onam',
    title: 'Pookkalam Floral Carpet',
    span: 1,
    colorNum: 2,
    url: 'https://images.unsplash.com/photo-1599818818556-9d3c52a46618?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    category: 'Onam',
    festival: 'Onam',
    title: 'Grand Onam Sadya',
    span: 1,
    colorNum: 3,
    url: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    category: 'Onam',
    festival: 'Onam',
    title: 'Thiruvathira Dance Ensemble',
    span: 2,
    colorNum: 4,
    url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80'
  },

  // --- CHRISTMAS ---
  {
    id: 5,
    category: 'Christmas',
    festival: 'Christmas',
    title: 'Luminous Fiesta Christmas 2025',
    span: 2,
    colorNum: 1,
    url: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    category: 'Christmas',
    festival: 'Christmas',
    title: 'Santa Parade & Gift Distribution',
    span: 1,
    colorNum: 2,
    url: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 7,
    category: 'Christmas',
    festival: 'Christmas',
    title: 'Community Carol Choir',
    span: 1,
    colorNum: 3,
    url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 8,
    category: 'Christmas',
    festival: 'Christmas',
    title: 'Bottle Art Competition Winners',
    span: 2,
    colorNum: 4,
    url: 'https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&w=800&q=80'
  },

  // --- EID ---
  {
    id: 9,
    category: 'Eid',
    festival: 'Eid',
    title: 'Eid Mubarak Community Harmony Banquet',
    span: 2,
    colorNum: 1,
    url: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 10,
    category: 'Eid',
    festival: 'Eid',
    title: 'Oppana Cultural Performance',
    span: 1,
    colorNum: 2,
    url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 11,
    category: 'Eid',
    festival: 'Eid',
    title: 'Festive Gathering & Sweets',
    span: 1,
    colorNum: 3,
    url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80'
  },

  // --- VISHU ---
  {
    id: 12,
    category: 'Vishu',
    festival: 'Vishu',
    title: 'Vishu Vishukkani & Spring Festival',
    span: 2,
    colorNum: 1,
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 13,
    category: 'Vishu',
    festival: 'Vishu',
    title: 'Kani Konna & Traditional Lamp',
    span: 1,
    colorNum: 2,
    url: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 14,
    category: 'Vishu',
    festival: 'Vishu',
    title: 'Vishu Youth Talent Showcase',
    span: 2,
    colorNum: 4,
    url: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80'
  },

  // --- EASTER ---
  {
    id: 15,
    category: 'Easter',
    festival: 'Easter',
    title: 'Easter Sunday Community Celebration',
    span: 2,
    colorNum: 1,
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 16,
    category: 'Easter',
    festival: 'Easter',
    title: 'Easter Children Egg Hunt & Festivities',
    span: 1,
    colorNum: 2,
    url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80'
  },

  // --- GRAND INAUGURATION (1 to 8 IMAGES) ---
  {
    id: 17,
    category: 'Grand Inauguration',
    title: 'Grand Inauguration 1 - Official Launch at Kilbirnie',
    span: 2,
    colorNum: 1,
    url: grandInaguration1
  },
  {
    id: 18,
    category: 'Grand Inauguration',
    title: 'Grand Inauguration 2 - Nilavilakku Lamp Lighting Ceremony',
    span: 1,
    colorNum: 2,
    url: grandInaguration2
  },
  {
    id: 19,
    category: 'Grand Inauguration',
    title: 'Grand Inauguration 3 - M. G. Sreekumar Mega Musical Show',
    span: 1,
    colorNum: 3,
    url: grandInaguration3
  },
  {
    id: 20,
    category: 'Grand Inauguration',
    title: 'Grand Inauguration 4 - Address by Chief Guests & Councillors',
    span: 2,
    colorNum: 4,
    url: grandInaguration4
  },
  {
    id: 21,
    category: 'Grand Inauguration',
    title: 'Grand Inauguration 5 - Healthcare Professionals & Families',
    span: 1,
    colorNum: 5,
    url: grandInaguration5
  },
  {
    id: 22,
    category: 'Grand Inauguration',
    title: 'Grand Inauguration 6 - Cultural Dance & Music Segment',
    span: 1,
    colorNum: 1,
    url: grandInaguration6
  },
  {
    id: 23,
    category: 'Grand Inauguration',
    title: 'Grand Inauguration 7 - Association Leaders & Executive Members',
    span: 2,
    colorNum: 2,
    url: grandInaguration7
  },
  {
    id: 24,
    category: 'Grand Inauguration',
    title: 'Grand Inauguration 8 - Inaugural Dinner & Fellowship',
    span: 1,
    colorNum: 3,
    url: grandInaguration8
  },

  // --- CHARITY ---
  {
    id: 25,
    category: 'Charity',
    title: 'Medicare Blood Donation Drive 2026',
    span: 2,
    colorNum: 1,
    url: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 26,
    category: 'Charity',
    title: 'Health Outreach & Relief Support',
    span: 1,
    colorNum: 2,
    url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 27,
    category: 'Charity',
    title: 'Community Fundraiser & Charity Drive',
    span: 1,
    colorNum: 3,
    url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 28,
    category: 'Charity',
    title: 'Healthcare Equipment & Medical Volunteer Aid',
    span: 2,
    colorNum: 4,
    url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80'
  }
]

function GalleryCard({ item, onClick }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      style={{ backgroundImage: `url(${item.url})` }}
      className={`gallery-card span-${item.span} c-${item.colorNum}`}
      role="button"
      tabIndex={0}
      aria-label={`Open ${item.title}`}
    >
      <div className="gallery-card-overlay">
        <span className="gallery-card-category">{item.category}</span>
        <h3 className="gallery-card-title">{item.title}</h3>
      </div>
    </div>
  )
}

function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All Photos')
  const [selectedFestival, setSelectedFestival] = useState('All Festivals')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const dropdownRef = useRef(null)

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All Photos') {
      return GALLERY_ITEMS
    }
    if (activeCategory === 'Festivals') {
      if (selectedFestival === 'All Festivals') {
        return GALLERY_ITEMS.filter((item) => item.festival)
      }
      return GALLERY_ITEMS.filter((item) => item.festival === selectedFestival)
    }
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory)
  }, [activeCategory, selectedFestival])

  useEffect(() => {
    setSelectedIndex(null)
  }, [activeCategory, selectedFestival])

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedIndex])

  const handleMainFilterClick = (filter) => {
    if (filter === 'Festivals') {
      setIsDropdownOpen((prev) => !prev)
      if (activeCategory !== 'Festivals') {
        setActiveCategory('Festivals')
      }
    } else {
      setActiveCategory(filter)
      setIsDropdownOpen(false)
    }
  }

  const handleSelectFestival = (festivalName) => {
    setActiveCategory('Festivals')
    setSelectedFestival(festivalName)
    setIsDropdownOpen(false)
  }

  const handleNext = (e) => {
    e?.stopPropagation()
    setSelectedIndex((prevIndex) => (prevIndex + 1) % filteredItems.length)
  }

  const handlePrev = (e) => {
    e?.stopPropagation()
    setSelectedIndex((prevIndex) => (prevIndex - 1 + filteredItems.length) % filteredItems.length)
  }

  const handleClose = () => {
    setSelectedIndex(null)
  }

  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'Escape') {
        handleClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedIndex, filteredItems.length])

  const selectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null

  const isFestivalsActive = activeCategory === 'Festivals'
  const festivalButtonLabel = isFestivalsActive && selectedFestival !== 'All Festivals'
    ? `Festivals: ${selectedFestival}`
    : 'Festivals'

  return (
    <>
      {/* Category Filters with Festivals Dropdown */}
      <section className="gallery-filters-section">
        <div className="filters-wrapper">
          {MAIN_FILTERS.map((filter) => {
            if (filter === 'Festivals') {
              return (
                <div key="Festivals" className="dropdown-container" ref={dropdownRef}>
                  <button
                    onClick={() => handleMainFilterClick('Festivals')}
                    className={`btn-filter ${isFestivalsActive ? 'active' : 'inactive'} dropdown-btn`}
                    aria-expanded={isDropdownOpen}
                  >
                    <span>{festivalButtonLabel}</span>
                    <span className={`material-symbols-outlined dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>
                      expand_more
                    </span>
                  </button>

                  {isDropdownOpen && (
                    <div className="festival-dropdown-menu">
                      {FESTIVALS_LIST.map((fest) => (
                        <button
                          key={fest.name}
                          onClick={() => handleSelectFestival(fest.name)}
                          className={`dropdown-item ${selectedFestival === fest.name && isFestivalsActive ? 'selected' : ''}`}
                        >
                          <span className="material-symbols-outlined text-sm">{fest.icon}</span>
                          <span>{fest.name}</span>
                          {selectedFestival === fest.name && isFestivalsActive && (
                            <span className="material-symbols-outlined check-icon">check</span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <button
                key={filter}
                onClick={() => handleMainFilterClick(filter)}
                className={`btn-filter ${activeCategory === filter ? 'active' : 'inactive'}`}
              >
                {filter}
              </button>
            )
          })}
        </div>
      </section>

      {/* Bento Grid Gallery */}
      <section className="gallery-grid-section">
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <GalleryCard key={item.id} item={item} onClick={() => setSelectedIndex(index)} />
          ))}
        </div>
      </section>

      {/* Lightbox Modal (Rendered to document.body via Portal for 100% Viewport Overlay) */}
      {selectedIndex !== null && selectedItem && createPortal(
        <div className="gallery-lightbox" onClick={handleClose}>
          <button className="lightbox-close-btn" onClick={handleClose} aria-label="Close lightbox">
            <span className="material-symbols-outlined">close</span>
          </button>

          <button className="lightbox-nav-btn prev" onClick={handlePrev} aria-label="Previous photo">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              key={selectedItem.id}
              src={selectedItem.url}
              alt={selectedItem.title}
              className="lightbox-image"
            />
          </div>

          <button className="lightbox-nav-btn next" onClick={handleNext} aria-label="Next photo">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          <div className="lightbox-info" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-category">{selectedItem.category}</div>
            <h3 className="lightbox-title">{selectedItem.title}</h3>
            <div className="lightbox-counter">
              {selectedIndex + 1} of {filteredItems.length}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default GalleryGrid
