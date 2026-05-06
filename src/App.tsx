import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import HoursLocation from './components/HoursLocation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-restaurant-50">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Reviews />
      <HoursLocation />
      <Footer />
    </div>
  );
}
