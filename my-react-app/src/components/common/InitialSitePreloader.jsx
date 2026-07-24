import { useState, useEffect } from 'react'
import Logo from '../layout/Logo'
import './InitialSitePreloader.css'

function InitialSitePreloader({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Smooth progress counter from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsClosing(true), 150)
          setTimeout(() => {
            if (onFinish) onFinish()
          }, 800)
          return 100
        }
        const diff = Math.floor(Math.random() * 15 + 8)
        return Math.min(100, prev + diff)
      })
    }, 40)

    return () => clearInterval(interval)
  }, [onFinish])

  return (
    <div className={`site-preloader-overlay ${isClosing ? 'preloader-closing' : ''}`}>
      <div className="preloader-content">
        <div className="preloader-logo-pulse">
          <Logo className="preloader-logo-img" />
        </div>
        <div className="preloader-title">Medicare Wellington</div>
        <div className="preloader-progress-track">
          <div className="preloader-progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="preloader-num">{progress}%</div>
      </div>
      <div className="preloader-curtain curtain-top" />
      <div className="preloader-curtain curtain-bottom" />
    </div>
  )
}

export default InitialSitePreloader
