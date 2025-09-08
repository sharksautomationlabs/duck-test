import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Partners from './components/Partners';
import NewReleases from './components/NewReleases';
import Bestsellers from './components/Bestsellers';
import BookCategories from './components/BookCategories';
import ComingSoon from './components/ComingSoon';
import AwardWinners from './components/AwardWinners';
import AboutUs from './components/AboutUs';
import Authors from './components/Authors';
import NewsEvents from './components/NewsEvents';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AnimatedSection delay={0.2}>
        <Features />
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <About />
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <Partners />
      </AnimatedSection>
      <AnimatedSection delay={0.5}>
        <NewReleases />
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <Bestsellers />
      </AnimatedSection>
      <AnimatedSection delay={0.7}>
        <BookCategories />
      </AnimatedSection>
      <AnimatedSection delay={0.8}>
        <ComingSoon />
      </AnimatedSection>
      <AnimatedSection delay={0.9}>
        <AwardWinners />
      </AnimatedSection>
      <AnimatedSection delay={1.0}>
        <AboutUs />
      </AnimatedSection>
      <AnimatedSection delay={1.1}>
        <Authors />
      </AnimatedSection>
      <AnimatedSection delay={1.2}>
        <NewsEvents />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
