import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import InitialSitePreloader from './components/common/InitialSitePreloader'
import GlassScrollIndicator from './components/common/GlassScrollIndicator'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [showPreloader, setShowPreloader] = useState(true)
  const [pageKey, setPageKey] = useState('home')

  // Setup scroll reveal observer for all animated elements
  useEffect(() => {
    const handleObserve = () => {
      const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      }

      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1,
      }

      const observer = new IntersectionObserver(observerCallback, observerOptions)
      const elements = document.querySelectorAll(
        '.reveal-on-scroll, .reveal-scale, .reveal-slide-left, .reveal-slide-right'
      )
      elements.forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }

    const timer = setTimeout(handleObserve, 100)
    return () => clearTimeout(timer)
  }, [currentPage, pageKey, showPreloader])

  const handlePageChange = (pageId) => {
    if (pageId === currentPage && pageId !== 'about' && pageId !== 'mission-vision' && pageId !== 'highlights' && pageId !== 'contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (pageId === 'about' || pageId === 'mission-vision' || pageId === 'highlights' || pageId === 'contact') {
      setCurrentPage('home')
      setPageKey(`home-${pageId}`)

      setTimeout(() => {
        let selector = ''
        if (pageId === 'about') selector = '#about'
        else if (pageId === 'mission-vision') selector = '.mv-section'
        else if (pageId === 'highlights') selector = '.highlights-section'
        else if (pageId === 'contact') selector = '.contact-section'

        const el = document.querySelector(selector)
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 73
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 100)
      return
    }

    setCurrentPage(pageId)
    setPageKey(pageId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col pt-[73px]">
      {/* Initial Website Open Entrance Preloader */}
      {showPreloader && (
        <InitialSitePreloader onFinish={() => setShowPreloader(false)} />
      )}

      {/* Top Glass Scroll Indicator & Back-to-Top Pill */}
      <GlassScrollIndicator />

      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />

      <div key={pageKey} className="page-transition-enter flex-grow w-full">
        {currentPage === 'gallery' && <Gallery />}
        {currentPage === 'events' && <Events />}
        {currentPage === 'home' && <Home onPageChange={handlePageChange} />}
      </div>

      <Footer />
    </div>
  )
}

export default App
