import PremiumHero from '@/components/premium/PremiumHero';
import StatsSection from '@/components/premium/StatsSection';
import ServicesSection from '@/components/premium/ServicesSection';
import WhyChooseSection from '@/components/premium/WhyChooseSection';
import ProcessSection from '@/components/premium/ProcessSection';
import ServiceAreaSection from '@/components/premium/ServiceAreaSection';
import PremiumCta from '@/components/premium/PremiumCta';
import { services, cities } from '@/lib/data';

export const metadata = {
  title: 'CCB Landscape Services | Commercial Landscape Maintenance Orange County',
  description: 'Owner-operated commercial landscape maintenance serving Orange County since 2012. Professional service for HOAs, commercial properties, and retail centers. BuildZoom Score: 99.',
};

export default function HomePage() {
  return (
    <>
      <PremiumHero />
      <StatsSection />
      <ServicesSection services={services} />
      <WhyChooseSection />
      <ProcessSection />
      <ServiceAreaSection cities={cities} />
      <PremiumCta />
    </>
  );
}
