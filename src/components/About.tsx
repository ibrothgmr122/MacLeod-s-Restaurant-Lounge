import { Heart, Award, Users, UtensilsCrossed } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Heart size={28} className="text-restaurant-500" />,
      title: 'Made with Love',
      description: 'Every dish is prepared with care, using quality ingredients and recipes crafted to delight.',
    },
    {
      icon: <Award size={28} className="text-restaurant-500" />,
      title: 'Exceptional Quality',
      description: 'We\'re proud of our reputation for great food, generous portions, and incredible value.',
    },
    {
      icon: <Users size={28} className="text-restaurant-500" />,
      title: 'Community Focused',
      description: 'A neighbourhood gem that welcomes everyone — families, travellers, and locals alike.',
    },
    {
      icon: <UtensilsCrossed size={28} className="text-restaurant-500" />,
      title: 'Local Craft Beer',
      description: 'Enjoy a rotating selection of Alberta\'s finest craft beers to complement your meal.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-script text-restaurant-500 text-2xl mb-2">Our Story</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-restaurant-950 mb-6">
            A Fort Macleod Tradition
          </h2>
          <p className="text-restaurant-700/70 text-lg leading-relaxed">
            Nestled in the heart of historic Fort Macleod, MacLeod's Restaurant & Lounge has been a beloved gathering place for locals and travellers alike. We're proud to serve hearty, home-style meals at prices that keep our community coming back.
          </p>
        </div>

        {/* Split Layout: Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/burger-hero.jpg"
              alt="MacLeod's famous burger with crispy fries"
              className="w-full h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-restaurant-950/50 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-restaurant-700 font-bold text-sm">
                ⭐ Famous MacLeod's Burger
              </span>
            </div>
          </div>
          {/* Story Text */}
          <div>
            <p className="font-script text-restaurant-500 text-2xl mb-3">Our Passion</p>
            <h3 className="font-display text-3xl font-bold text-restaurant-900 mb-4">
              Great Food, Honest Prices
            </h3>
            <p className="text-restaurant-700/70 leading-relaxed mb-4">
              At MacLeod's, we believe everyone deserves a great meal. From our signature burgers and hearty spaghetti to our famous appetizer platters, every dish is made from scratch with fresh, quality ingredients.
            </p>
            <p className="text-restaurant-700/70 leading-relaxed mb-6">
              Whether you're grabbing a quick lunch, celebrating a special occasion, or just passing through Fort Macleod on the highway — we've got a warm seat and a hot meal waiting for you. Pair it with a local craft beer from our rotating tap selection and you'll understand why our guests keep coming back.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-restaurant-600">50+</div>
                <div className="text-restaurant-500 text-xs">Menu Items</div>
              </div>
              <div className="w-px h-12 bg-restaurant-200" />
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-restaurant-600">4.7</div>
                <div className="text-restaurant-500 text-xs">Google Rating</div>
              </div>
              <div className="w-px h-12 bg-restaurant-200" />
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-restaurant-600">7</div>
                <div className="text-restaurant-500 text-xs">Days a Week</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl bg-restaurant-50 hover:bg-white border border-transparent hover:border-restaurant-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-restaurant-100 mb-5 group-hover:bg-restaurant-200 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-restaurant-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-restaurant-600/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider Quote */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <div className="relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-7xl text-restaurant-200 font-display leading-none">
              "
            </span>
            <blockquote className="font-display text-2xl sm:text-3xl text-restaurant-800 italic leading-relaxed pt-4">
              Lucky to have a great restaurant in a small town. The food is always good and cooked to perfection.
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-restaurant-300" />
              <span className="text-restaurant-500 font-medium">— Larry Lauder, Local Guide</span>
              <div className="h-px w-8 bg-restaurant-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
