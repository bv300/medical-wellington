import { useState } from 'react'
import './GalleryGrid.css'

const categories = ['All Photos', 'EVE FEST', 'Community Service', 'Youth', 'Luminous Fiesta']

const galleryItems = [
  {
    id: 1,
    title: 'Opening Ceremony',
    description: 'Celebrating our cultural heritage with the community.',
    category: 'EVE FEST',
    tag: 'EVE FEST 2026',
    tagColor: 'bg-secondary-container text-on-secondary-container',
    size: 'large',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAo2ypmcSnpuxm5StEUaIzA0CeYj5s-tMwRIJWZMMbVKu2Qm1mKO3UQ2QgglEmJQvaGMXhORQvYnfuI85vzXWM7l50hxsPCTLusm7F0OLSinOTBV7apfMuzuNWX4cLRqoP60Um1KrheOG3mCCq8OPwqQvTGRkEKHRpgeiPVa81wsYTwogSJBfDHDBgECCNXo4VxwTmCaJs_MdE-nAVgxDjzozhADVrBXUkTfxpW02T63EG_3M4uNqSHRHjfqfscPgRLISp_Jcx9ug',
  },
  {
    id: 2,
    title: 'Annual Drive',
    category: 'Community Service',
    tag: 'Community Service',
    tagColor: 'bg-primary-container text-on-primary-container',
    size: 'tall',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ3BsWLToF0MPkmeWe8v4tEmFyLDzIbOOgiSsCpreqVxMt0G6OMCe5iNbd3gdZmvlHKZJt0l44SNP02K2TZaVdZyFBgpQYkFqi-NTosgTLuOnvOFq9oZljnEhTmAwBPSIqCovQSttSoI0c9RDqXROgxlkdfpbyhsG1iNqFrDOvuCx39tsY3TDh-KeNo_PG4OuSw24haicJOYCvOQmHy0TSuwJZE-3TYmz0gzzsZkf9-_IPJ2yh4MO3MVIkPbGXfhrIe7ADU2gdkQ',
  },
  {
    id: 3,
    title: 'Youth Workshop',
    category: 'Youth',
    size: 'standard',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDyeF6yLeDzlNsrFvfoyvZ9Q5abjtoj5TB0CdjTfZMMUMbMW2FrvRvmrtjqvuNKFIEp-jkY4xJ66Yop0qmyav9WK7g57sQbJN59jgMToO2jPbbrQ34nGPwnFqkCgOFSAH9BSYuK-SHjzaKf_K98Xg8YROjtqzB644NSo258VZFSRuTwYzloQvO2Lrq14Kx7BLN2td3lcqQg4pTo4ZZTVdAcXFSLXM75YmrYPaX_x3w4ZKPNCRZ6oQHZl5UXuNCb10C409x4i6hxEQ',
  },
  {
    id: 4,
    title: 'Elder Care Day',
    category: 'Community Service',
    size: 'standard',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPq_bIEJeXbmFL7xAXpGZPio4gTmopfUHMfuvd2T2T1XNKoXEwiSwJwyqkcaQcgMApBT4Gk872S4DH8OAHOQE6SVwrunr_fosP5BzoZwR9nbpVW-r0RDoMPMLlos2RnmWt7fCoAkPi_yNBQ224VYXdtIN0YiHM0zRJwfmpw5U5FN5fy1W8qNX9tp5CTKNzEr8dTI-S6I9tDLMGNYbLrc0t96ccG-IAuDWkMZR4-k2rzsVia9CyFfBC7Y29BAsEUyWgWqmWWaB0fQ',
  },
  {
    id: 5,
    title: 'Evening Gala',
    category: 'Luminous Fiesta',
    tag: 'Luminous Fiesta',
    tagColor: 'bg-tertiary-container text-on-tertiary-container',
    size: 'wide',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDpl7YJ4wqYAo2aHqZB9aLYCaL-1_a2kfijcLG5hAlVLWEvf_Vc4Z4NZgfjQgEw0MtAWwvwFNVN61ptiiEQ_-NHjQjdlTjG1nHStia8duL3ONjt0sUomB_YkkV2DHpoBmzZIcTBirmJ72rZiJBhMFSmx3IdrPoLQF3nZBoDdDU-GX6Lk28m3rGWIIl3q8qWFvF-KmQ1qzL5ETofmoqyCmAkFDIK052iI7AlPIIDGGGOGguNHvKNK1AdlrtE718Ir0CufzngL6UVKA',
  },
  {
    id: 6,
    title: 'Awards Ceremony',
    category: 'EVE FEST',
    size: 'standard',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC625HUFwRECxMHAyz_BEpbpaDazzXQdmhA8OtpUwE7NrV4jiiJ-u3PNk1YtrltqLFL7eTnd1CadC9bnIOXtmrftUryHT8fM3QhRYHJUfdo6bPoQAlSQb_-XU5XyrM4VAU0Z405QDRrh-sKA_bMHm5esJV64Z3TmEMSWCkomnPUAmajcv8LxhDAIYsARSUSLxF238qYjQMg2JTPuYCidKxEQHEk4kA-HwG03p7F0JysiMQozCBqhnuUFa_ZeUU09fkW7sdiNs5N9g',
  },
  {
    id: 7,
    title: 'Annual Symposium',
    category: 'Community Service',
    size: 'standard',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAR9X4x5Q3QOx9oUaIpaDuZHeQDlnLyfxqxPloiIanyT2EEVmt5Tpor_2nsOc0cWlKlcaUTYGAZvVpXfA-YuTa22pr_dJlhrLnZX2oKG4vmC3KtkZ3fim1AK93TFn4ZkRdwIc8TxpaXuQ7Pvrfkl68u9SlDdIVRxwYwuYofUq67z_YBri7aFuxj1V7vpeOzrJvyOJNbZMPLHDTVusAovZpjriQZPJe-E2_IMzsoEZHlTZ3sNxg0glgn1MrIRuPg_cCE9fnD9xMAwA',
  },
]

function GalleryCard({ item }) {
  const isLargeOrWide = item.size === 'large' || item.size === 'wide'

  return (
    <div className={`gallery-card size-${item.size}`}>
      <img
        className="gallery-card-img"
        src={item.image}
        alt={item.title}
        loading="lazy"
      />
      <div className={`gallery-card-overlay ${isLargeOrWide ? 'heavy-gradient' : ''}`}>
        {item.tag && (
          <span className={`gallery-card-tag ${item.tagColor}`}>
            {item.tag}
          </span>
        )}
        <h3 className="gallery-card-title">
          {item.title}
        </h3>
        {item.description && (
          <p className="gallery-card-desc">{item.description}</p>
        )}
      </div>
    </div>
  )
}

function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All Photos')

  const filteredItems =
    activeCategory === 'All Photos'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

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
