import Gallery from './components/Index/Gallery';
import Hero from './components/Index/Hero';
import SponsorBanner from './components/Index/SponsorBanner';
import ExpoSection from './components/Index/ExpoSection';
import ConsultingSection from './components/Index/CCNZSection';
import Contacts from './components/Index/Contacts';

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <SponsorBanner />
        <Gallery />
        <ExpoSection />
        <ConsultingSection />
        <Contacts />
      </div>
    </>
  );
}
