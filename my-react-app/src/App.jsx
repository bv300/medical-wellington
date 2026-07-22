import { useState } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Events from './pages/Events'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handlePageChange = (pageId) => {
    if (pageId === 'about' || pageId === 'mission-vision' || pageId === 'highlights' || pageId === 'contact') {
      setCurrentPage('home')
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
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col pt-[73px]">
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />

      {currentPage === 'gallery' && <Gallery />}
      {currentPage === 'events' && <Events />}
      {currentPage === 'home' && <Home onPageChange={handlePageChange} />}

      <Footer />
    </div>
  )
}

export default App
