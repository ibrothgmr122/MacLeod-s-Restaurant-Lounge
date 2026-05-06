import { Heart, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-restaurant-950 border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-restaurant-500 rounded-full flex items-center justify-center text-white font-display font-bold text-xl">
                M
              </div>
              <div>
                <span className="text-white font-display font-semibold text-xl block">
                  MacLeod's
                </span>
                <span className="text-restaurant-400 text-xs tracking-widest uppercase">
                  Restaurant & Lounge
                </span>
              </div>
            </div>
            <p className="text-restaurant-200/50 leading-relaxed max-w-md mb-6">
              Serving exceptional food and warm hospitality in the heart of Fort Macleod, Alberta. Come hungry, leave happy.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-restaurant-500 flex items-center justify-center text-white/50 hover:text-white transition-all text-sm font-bold"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-restaurant-500 flex items-center justify-center text-white/50 hover:text-white transition-all text-sm font-bold"
                aria-label="Instagram"
              >
                IG
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Menu', 'Reviews', 'Visit Us'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '').replace('aboutus', 'about').replace('ourmenu', 'menu').replace('visitus', 'visit')}`}
                    className="text-restaurant-200/50 hover:text-restaurant-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.google.com/maps/dir//271+23+St,+Fort+Macleod,+AB+T0L+0Z0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-restaurant-200/50 hover:text-restaurant-400 transition-colors group"
                >
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-restaurant-500" />
                  <span className="text-sm">
                    271 23 St, Fort Macleod,<br />
                    AB T0L 0Z0, Canada
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+14035538841"
                  className="flex items-center gap-3 text-restaurant-200/50 hover:text-restaurant-400 transition-colors"
                >
                  <Phone size={16} className="flex-shrink-0 text-restaurant-500" />
                  <span className="text-sm">(403) 553-8841</span>
                </a>
              </li>
            </ul>

            {/* Hours Summary */}
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5">
              <p className="text-restaurant-300 text-sm font-medium mb-1">
                Today: 11:00 AM – 9:00 PM
              </p>
              <p className="text-restaurant-200/40 text-xs">
                Fri–Sat until 10:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-restaurant-200/40 text-sm flex items-center gap-1.5">
              © {new Date().getFullYear()} MacLeod's Restaurant & Lounge. All rights reserved.
            </p>
            <p className="text-restaurant-200/30 text-xs flex items-center gap-1.5">
              Made with <Heart size={12} className="text-red-400 fill-red-400" /> in Fort Macleod, Alberta
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
