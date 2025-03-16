import HeroSection from '@/shared/components/hero-section';
import OurTeam from '@/shared/components/our-team';
import Services from '@/shared/components/services';
import Faq from '@/shared/components/faq';
import PartnersClients from '@/shared/components/partners-clients';
import GetAdvice from '@/shared/components/forms/get-advice';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <PartnersClients />
      <Services />
      <Faq flares={true} />
      <OurTeam />
      <GetAdvice />
    </main>
  );
}
