import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import StatsBar from './components/StatsBar'
import MissionSection from './components/MissionSection'
import KikaGallery from './components/KikaGallery'
import VideoSection from './components/VideoSection'
import OutreachSection from './components/OutreachSection'
import DonateSection from './components/DonateSection'
import Footer from './components/Footer'

export default function Home() {
    return (
        <div className="site">
            <Navigation />
            <HeroSection />
            <StatsBar />
            <MissionSection />
            <KikaGallery />
            <VideoSection />
            <OutreachSection />
            <DonateSection />
            <Footer />
        </div>
    )
}
