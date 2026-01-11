import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import ProductSection from '@/components/sections/ProductSection';
import JourneySection from '@/components/sections/JourneySection';
import ManifestoSection from '@/components/sections/ManifestoSection';
import CheckoutSection from '@/components/sections/CheckoutSection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <SocialProofSection />
      <ProductSection />
      <JourneySection />
      <ManifestoSection />
      <CheckoutSection />
      <Footer />
    </main>
  );
};

export default Index;
