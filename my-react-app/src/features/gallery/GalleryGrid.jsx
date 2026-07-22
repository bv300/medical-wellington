import { useState, useMemo, useEffect } from 'react'
import './GalleryGrid.css'

const categories = ['All Photos', 'EVE FEST', 'Community Service', 'Youth', 'Luminous Fiesta']
const CATEGORIES_MAP = ['EVE FEST', 'Community Service', 'Youth', 'Luminous Fiesta']

const weightedRand = (spec) => {
  let i, sum = 0, r = Math.random();
  for (i in spec) {
    sum += spec[i];
    if (r <= sum) return Number(i);
  }
  return 1;
}

// Generate the 40 random items on initial load so they persist across filter clicks
const GENERATED_ITEMS = Array.from({ length: 40 }, (_, index) => {
  const span = weightedRand({ 1: 0.7, 2: 0.2, 3: 0.1 });
  const colorNum = weightedRand({ 1: 0.2, 2: 0.2, 3: 0.2, 4: 0.2, 5: 0.2 });
  const sizePx = span * 200;
  // Use picsum.photos for fast, reliable random images
  const url = `https://picsum.photos/${sizePx}/${sizePx}?random=${index}`;
  const category = CATEGORIES_MAP[index % CATEGORIES_MAP.length];
  return {
    id: index,
    span,
    colorNum,
    url,
    category
  }
})

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
      aria-label={`Open Photo #${item.id + 1} details`}
    >
      <div className="gallery-card-overlay">
        <span className="gallery-card-category">{item.category}</span>
        <h3 className="gallery-card-title">Photo #{item.id + 1}</h3>
      </div>
    </div>
  )
}

function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All Photos')
  const [selectedIndex, setSelectedIndex] = useState(null)

  const filteredItems = useMemo(() => {
    return activeCategory === 'All Photos'
      ? GENERATED_ITEMS
      : GENERATED_ITEMS.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  // Reset selected image index when category changes
  useEffect(() => {
    setSelectedIndex(null)
  }, [activeCategory])

  // Disable background scrolling when lightbox is active
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

  // Keyboard navigation
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

  return (
    <>
      {/* Category Filters */}
      <section className="gallery-filters-section">
        <div className="filters-wrapper">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`btn-filter ${activeCategory === category ? 'active' : 'inactive'}`}
            >
              {category}
            </button>
          ))}
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

      {/* Lightbox Modal */}
      {selectedIndex !== null && selectedItem && (
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
              alt={`Photo #${selectedItem.id + 1}`}
              className="lightbox-image"
            />
          </div>

          <button className="lightbox-nav-btn next" onClick={handleNext} aria-label="Next photo">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          <div className="lightbox-info" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-category">{selectedItem.category}</div>
            <h3 className="lightbox-title">Photo #{selectedItem.id + 1}</h3>
            <div className="lightbox-counter">
              {selectedIndex + 1} of {filteredItems.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default GalleryGrid
