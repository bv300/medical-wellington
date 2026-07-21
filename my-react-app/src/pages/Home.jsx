import HeroSection from '../features/home/HeroSection'
import MissionVision from '../features/home/MissionVision'
import RecentHighlights from '../features/highlights/RecentHighlights'
import ContactForm from '../features/contact/ContactForm'

function Home({ onPageChange }) {
  return (
    <>
      <main id="home" className="w-full flex flex-col">
        <HeroSection />
        <MissionVision />
        <RecentHighlights onNavigateToEvents={() => onPageChange('events')} />
      </main>
      <ContactForm />
    </>
  )
}

export default Home
