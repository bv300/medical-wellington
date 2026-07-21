import GalleryGrid from '../features/gallery/GalleryGrid'

function Gallery() {
  return (
    <main className="flex-grow w-full">
      {/* Gallery Hero Section */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-[1200px] mx-auto text-center flex flex-col items-center">
        <h1 className="font-display text-display text-on-surface mb-sm">Community in Focus</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          A visual journey through our shared moments of connection, professional excellence, and cultural celebration.
        </p>
      </section>

      <GalleryGrid />
    </main>
  )
}

export default Gallery
