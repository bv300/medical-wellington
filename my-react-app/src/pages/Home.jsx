import MovingBanner from '../components/common/MovingBanner'
import HomeCarouselBanner from '../components/common/HomeCarouselBanner'
import HeroSection from '../features/home/HeroSection'
import MissionVision from '../features/home/MissionVision'
import RecentHighlights from '../features/highlights/RecentHighlights'
import ContactForm from '../features/contact/ContactForm'
import About from './About'
import './Home.css'

function Home({ onPageChange }) {
  return (
    <div className="home-page">
      {/* Top Carousel Banner under Navbar */}
      <HomeCarouselBanner />
      <MovingBanner onNavigate={onPageChange} />
      <main id="home" className="home-main-container">
        <div className="home-section-wrapper reveal-on-scroll">
          <HeroSection />
        </div>
        <div className="home-section-wrapper reveal-on-scroll">
          <About />
        </div>
        <div className="home-section-wrapper reveal-on-scroll">
          <MissionVision />
        </div>
        <div className="home-section-wrapper reveal-on-scroll">
          <RecentHighlights onNavigateToEvents={() => onPageChange('events')} />
        </div>
      </main>
      <div className="home-contact-wrapper reveal-on-scroll">
        <ContactForm />
      </div>
    </div>
  )
}

export default Home
