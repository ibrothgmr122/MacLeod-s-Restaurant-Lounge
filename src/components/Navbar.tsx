import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit Us', href: '#visit' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-restaurant-950/95 backdrop-blur-md shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-restaurant-500 rounded-full flex items-center justify-center text-white font-display font-bold text-lg group-hover:bg-restaurant-400 transition-colors">
              M
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-display font-semibold text-lg tracking-wide">
                MacLeod's
              </span>
              <span className="block text-restaurant-300 text-xs tracking-widest uppercase -mt-1">
                Restaurant & Lounge
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-restaurant-400 px-4 py-2 text-sm font-medium tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+14035538841"
              className="ml-4 flex items-center gap-2 bg-restaurant-500 hover:bg-restaurant-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-restaurant-500/30"
            >
              <Phone size={14} />
              (403) 553-8841
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-restaurant-950/98 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/80 hover:text-restaurant-400 hover:bg-white/5 px-4 py-3 rounded-lg text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href="tel:+14035538841"
                className="flex items-center gap-2 text-restaurant-400 px-4 py-2"
              >
                <Phone size={16} />
                (403) 553-8841
              </a>
              <div className="flex items-center gap-2 text-white/60 px-4 py-2">
                <MapPin size={16} />
                271 23 St, Fort Macleod, AB
              </div>
              <div className="flex items-center gap-2 text-white/60 px-4 py-2">
                <Clock size={16} />
                Open today: 11 AM – 9 PM
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
