import { useState, useMemo } from 'react'
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

function GalleryCard({ item }) {
  return (
    <div
      style={{ backgroundImage: `url(${item.url})` }}
      className={`gallery-card span-${item.span} c-${item.colorNum}`}
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

  const filteredItems = useMemo(() => {
    return activeCategory === 'All Photos'
      ? GENERATED_ITEMS
      : GENERATED_ITEMS.filter((item) => item.category === activeCategory)
  }, [activeCategory])

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
          {filteredItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  )
}

export default GalleryGrid
