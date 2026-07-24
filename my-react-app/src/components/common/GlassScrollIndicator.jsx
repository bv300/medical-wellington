import { useState, useEffect } from 'react'
import './GlassScrollIndicator.css'

function GlassScrollIndicator() {
  const [scrollPercent, setScrollPercent] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const current = window.scrollY
        const percent = Math.min(100, Math.max(0, Math.round((current / totalHeight) * 100)))
        setScrollPercent(percent)
        setShowScrollTop(current > 250)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!showScrollTop) return null

  return (
    <button
      onClick={scrollToTop}
      className="glass-scroll-pill"
      aria-label="Scroll back to top"
    >
      <div
        className="glass-pill-ring"
        style={{
          background: `conic-gradient(#00606a ${scrollPercent * 3.6}deg, rgba(0, 96, 106, 0.15) 0deg)`,
        }}
      >
        <div className="glass-pill-inner">
          <span className="material-symbols-outlined glass-arrow">arrow_upward</span>
        </div>
      </div>
      <span className="glass-pill-text">{scrollPercent}%</span>
    </button>
  )
}

export default GlassScrollIndicator
