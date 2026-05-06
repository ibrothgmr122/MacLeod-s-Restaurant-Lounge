import { MapPin, Phone, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-restaurant-950/80 via-restaurant-950/70 to-restaurant-950/90" />
        {/* Warm glow effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-restaurant-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-restaurant-950 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-restaurant-500/20 border border-restaurant-400/30 rounded-full px-5 py-2 mb-8 animate-fade-in-up">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot" />
          <span className="text-restaurant-200 text-sm font-medium tracking-wide">
            Open Today · 11:00 AM – 9:00 PM
          </span>
        </div>

        {/* Main heading */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <p className="font-script text-restaurant-400 text-2xl sm:text-3xl mb-3">
            Welcome to
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-2">
            MacLeod's
          </h1>
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="h-px w-12 bg-restaurant-500" />
            <span className="text-restaurant-300 text-sm sm:text-base tracking-[0.3em] uppercase font-medium">
              Restaurant & Lounge
            </span>
            <div className="h-px w-12 bg-restaurant-500" />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-restaurant-100/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Exceptional food, warm hospitality, and unforgettable flavours in the heart of Fort Macleod, Alberta.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#menu"
            className="group bg-restaurant-500 hover:bg-restaurant-600 text-white px-8 py-4 rounded-full font-semibold text-base transition-all hover:shadow-xl hover:shadow-restaurant-500/30 flex items-center gap-2"
          >
            View Our Menu
            <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="tel:+14035538841"
            className="flex items-center gap-2 text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-full font-semibold text-base transition-all"
          >
            <Phone size={16} />
            (403) 553-8841
          </a>
        </div>

        {/* Address */}
        <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex items-center gap-2 text-restaurant-300/60 text-sm">
            <MapPin size={14} />
            271 23 St, Fort Macleod, AB T0L 0Z0
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-restaurant-400/50" />
      </div>
    </section>
  );
}
