import { Clock, MapPin, Phone, Navigation, CalendarDays } from 'lucide-react';
import { hours } from '../data/menu';

function getTodayIndex(): number {
  const day = new Date().getDay();
  return day === 0 ? 6 : day - 1; // Convert Sun=0 -> 6, Mon=1 -> 0, etc.
}

function isCurrentlyOpen(): boolean {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour + currentMinute / 60;

  const todayIdx = getTodayIndex();

  // Parse hours
  const openTime = 11; // 11 AM
  let closeTime = 21; // 9 PM default
  if (todayIdx === 4 || todayIdx === 5) {
    closeTime = 22; // 10 PM Fri-Sat
  }

  return currentTime >= openTime && currentTime < closeTime;
}

export default function HoursLocation() {
  const todayIdx = getTodayIndex();
  const open = isCurrentlyOpen();

  return (
    <section id="visit" className="py-20 lg:py-28 bg-restaurant-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d6822e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-script text-restaurant-400 text-2xl mb-2">Come Visit Us</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Hours & Location
          </h2>
          <p className="text-restaurant-200/60 text-lg leading-relaxed">
            We're conveniently located on 23 Street in the heart of Fort Macleod. Walk in or give us a call!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hours */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-restaurant-500/20 flex items-center justify-center">
                <Clock size={24} className="text-restaurant-400" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Opening Hours
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2.5 h-2.5 rounded-full ${open ? 'bg-green-400 animate-pulse-dot' : 'bg-red-400'}`} />
                  <span className={`text-sm font-medium ${open ? 'text-green-400' : 'text-red-400'}`}>
                    {open ? 'Open Now' : 'Currently Closed'}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {hours.map((day, index) => {
                const isToday = index === todayIdx;
                return (
                  <div
                    key={index}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all ${
                      isToday
                        ? 'bg-restaurant-500/15 border border-restaurant-500/30'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && <CalendarDays size={14} className="text-restaurant-400" />}
                      <span className={`font-medium ${isToday ? 'text-restaurant-300' : 'text-white/70'}`}>
                        {day.day}
                        {isToday && (
                          <span className="ml-2 text-restaurant-400 text-xs font-semibold bg-restaurant-500/20 px-2 py-0.5 rounded-full">
                            Today
                          </span>
                        )}
                      </span>
                    </div>
                    <span className={`text-sm ${isToday ? 'text-restaurant-300 font-semibold' : 'text-white/50'}`}>
                      {day.hours}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Location & Contact */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.5!2d-113.3945!3d49.7174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53689b2c0f5c5b0d%3A0x4e3e0c6d3b5c8a00!2s271%2023%20St%2C%20Fort%20Macleod%2C%20AB%20T0L%200Z0!5e0!3m2!1sen!2sca!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                title="MacLeod's Restaurant Location"
              />
            </div>

            {/* Contact Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>

              <div className="space-y-5">
                {/* Address */}
                <a
                  href="https://www.google.com/maps/dir//271+23+St,+Fort+Macleod,+AB+T0L+0Z0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-restaurant-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-restaurant-500/30 transition-colors">
                    <MapPin size={18} className="text-restaurant-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-restaurant-200/60 text-sm">271 23 St, Fort Macleod, AB T0L 0Z0</p>
                    <p className="text-restaurant-400 text-xs mt-1 flex items-center gap-1">
                      Get Directions
                      <Navigation size={10} className="group-hover:translate-x-0.5 transition-transform" />
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+14035538841"
                  className="flex items-start gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-restaurant-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-restaurant-500/30 transition-colors">
                    <Phone size={18} className="text-restaurant-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-restaurant-200/60 text-sm">(403) 553-8841</p>
                    <p className="text-restaurant-400 text-xs mt-1">Call to reserve or order</p>
                  </div>
                </a>
              </div>

              {/* Quick actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+14035538841"
                  className="flex-1 flex items-center justify-center gap-2 bg-restaurant-500 hover:bg-restaurant-600 text-white px-6 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-restaurant-500/30 text-sm"
                >
                  <Phone size={16} />
                  Call Now
                </a>
                <a
                  href="https://www.google.com/maps/dir//271+23+St,+Fort+Macleod,+AB+T0L+0Z0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-6 py-3.5 rounded-xl font-semibold transition-all border border-white/20 text-sm"
                >
                  <Navigation size={16} />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
