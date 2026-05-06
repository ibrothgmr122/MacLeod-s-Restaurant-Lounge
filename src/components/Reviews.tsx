import { Star, Quote, ThumbsUp, ExternalLink } from 'lucide-react';

interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
  time: string;
  highlighted?: string;
}

const reviews: Review[] = [
  {
    name: 'Len Wheeler',
    role: 'Local Guide · 145 Reviews',
    rating: 5,
    text: 'Exceptional!!! The food was incredible and check out that burger!! I pass by here every month and I will definitely be stopping again! Love the heart. ❤️',
    time: '3 months ago',
    highlighted: 'The food was incredible and check out that burger!!',
  },
  {
    name: 'Gordon Pitt',
    role: 'Local Guide · 44 Reviews',
    rating: 5,
    text: 'Went there for the first time yesterday. Really good food with large portions, great service and a good assortment of local craft beer. BTW very inexpensive too!!',
    time: '2 months ago',
    highlighted: 'Large portions, great service and local craft beer',
  },
  {
    name: 'Larry Lauder',
    role: 'Local Guide · 325 Reviews',
    rating: 5,
    text: 'Lucky to have a great restaurant in a small town. The food is always good and cooked to perfection. Lots of variety. Very reasonable prices. They seem to try to keep the prices down. The food is plentiful and delicious.',
    time: '3 years ago',
    highlighted: 'Cooked to perfection. Lots of variety. Very reasonable prices.',
  },
  {
    name: 'Nicholas Lainof',
    role: '5 Reviews',
    rating: 5,
    text: 'Four great stars of epicness and awesomeness. Food was delicious, the staff were so kind. The only thing I put an O.K. rating for was the atmosphere, but that doesn\'t matter when the food is great!',
    time: '9 months ago',
    highlighted: 'Food was delicious, the staff were so kind.',
  },
  {
    name: 'Tanner Leavitt',
    role: 'Local Guide · 587 Reviews',
    rating: 5,
    text: 'Stopped in after seeing Clue at the Empress. We just got an appetizer platter. Decent food, service was really good. Thanks for being open later so we didn\'t have to go to McDonald\'s!',
    time: '1 year ago',
    highlighted: 'Decent food, service was really good.',
  },
  {
    name: 'Rina S',
    role: 'Local Guide · 78 Reviews',
    rating: 4,
    text: 'Loved the atmosphere and food. Great value for your money and a wonderful dining experience overall.',
    time: '6 months ago',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating
              ? 'fill-amber-400 text-amber-400'
              : 'fill-gray-200 text-gray-200'
          }
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-script text-restaurant-500 text-2xl mb-2">What People Say</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-restaurant-950 mb-6">
            Loved by Our Guests
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="font-display text-2xl font-bold text-restaurant-900">4.7</span>
            <span className="text-restaurant-500">/ 5.0</span>
          </div>
          <p className="text-restaurant-700/70 text-lg">
            Based on reviews from our wonderful guests and local guides
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card bg-restaurant-50 rounded-2xl p-6 border border-restaurant-100 hover:shadow-lg relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-restaurant-200">
                <Quote size={24} />
              </div>

              {/* Reviewer info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-restaurant-200 flex items-center justify-center text-restaurant-700 font-bold text-sm">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-restaurant-900 text-sm">
                    {review.name}
                  </h4>
                  <p className="text-restaurant-500 text-xs">{review.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <StarRating rating={review.rating} />
                <span className="text-restaurant-400 text-xs">{review.time}</span>
              </div>

              {/* Review text */}
              <p className="text-restaurant-700/80 text-sm leading-relaxed mb-4">
                {review.highlighted && (
                  <>
                    <span className="font-semibold text-restaurant-800">
                      {review.highlighted}{' '}
                    </span>
                    {review.text.replace(review.highlighted, '')}
                  </>
                )}
                {!review.highlighted && review.text}
              </p>

              {/* Like button */}
              <div className="flex items-center gap-2 text-restaurant-400">
                <ThumbsUp size={14} />
                <span className="text-xs">Helpful</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/MacLeod's+Restaurant+%26+Lounge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-restaurant-600 hover:text-restaurant-700 font-medium transition-colors border-b-2 border-restaurant-300 hover:border-restaurant-600 pb-1"
          >
            Read more reviews on Google
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
