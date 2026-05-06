import { useState } from 'react';
import { menuCategories } from '../data/menu';
import { ChefHat } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const currentCategory = menuCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="menu" className="py-20 lg:py-28 bg-restaurant-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-script text-restaurant-500 text-2xl mb-2">What We Serve</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-restaurant-950 mb-6">
            Our Menu
          </h2>
          <p className="text-restaurant-700/70 text-lg leading-relaxed">
            From signature burgers to hearty entrées, every dish is made fresh with quality ingredients at prices that won't break the bank.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-restaurant-600 text-white shadow-lg shadow-restaurant-600/30'
                  : 'bg-white text-restaurant-700 hover:bg-restaurant-100 border border-restaurant-200'
              }`}
            >
              <span>{category.icon}</span>
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentCategory.items.map((item, index) => (
            <div
              key={index}
              className="menu-card bg-white rounded-2xl p-6 border border-restaurant-100 shadow-sm hover:border-restaurant-200 relative overflow-hidden"
            >
              {/* Tag */}
              {item.tag && (
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                  item.tag.includes('Must Try')
                    ? 'bg-amber-100 text-amber-700'
                    : item.tag.includes('Popular') || item.tag.includes('Favourite')
                    ? 'bg-restaurant-100 text-restaurant-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {item.tag}
                </div>
              )}

              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-restaurant-900 mb-2 pr-20">
                    {item.name}
                  </h3>
                  <p className="text-restaurant-600/70 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="font-display text-2xl font-bold text-restaurant-600">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-md border border-restaurant-100">
            <ChefHat size={20} className="text-restaurant-500" />
            <span className="text-restaurant-700 font-medium">
              Ask your server about our daily specials!
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-restaurant-500 text-sm mt-8">
          Prices may vary. Please inform your server of any allergies or dietary restrictions.
        </p>
      </div>
    </section>
  );
}
