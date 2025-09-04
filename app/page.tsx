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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <About />
      <Partners />
      <NewReleases />
      <Bestsellers />
      <BookCategories />
      <ComingSoon />
      <AwardWinners />
      <AboutUs />
      <Authors />
      <NewsEvents />
      <Footer />
    </main>
  );
}
