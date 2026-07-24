import GalleryGrid from '../features/gallery/GalleryGrid'
import './Gallery.css'

function Gallery() {
  return (
    <main className="gallery-page">
      {/* Gallery Hero Section */}
      <section className="gallery-hero-section reveal-on-scroll">
        <h1 className="gallery-title">Community in Focus</h1>
        <p className="gallery-subtitle">
          A visual journey through our shared moments of connection, professional excellence, and cultural celebration.
        </p>
      </section>

      <div className="gallery-grid-wrapper reveal-on-scroll stagger-1">
        <GalleryGrid />
      </div>
    </main>
  )
}

export default Gallery
