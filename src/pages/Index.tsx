import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import CoursesSection from '@/components/CoursesSection';
import TrustSection from '@/components/TrustSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import FAQContactSection from '@/components/FAQContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <IntroSection />
        <CoursesSection />
        <TrustSection />
        <TestimonialsSection />
        <CTASection />
        <FAQContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
