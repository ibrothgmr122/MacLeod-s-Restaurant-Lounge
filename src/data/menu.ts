export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  icon: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'appetizers',
    title: 'Appetizers & Starters',
    icon: '🍽️',
    items: [
      { name: 'Appetizer Platter', description: 'A generous selection of onion rings, chicken fingers, mozzarella sticks, and potato wedges served with dipping sauces', price: '$18.99', tag: 'Popular' },
      { name: 'Soup of the Day', description: 'Fresh homemade soup served with a warm dinner roll', price: '$6.99' },
      { name: 'Caesar Salad', description: 'Crisp romaine lettuce, parmesan, croutons, and our house-made Caesar dressing', price: '$10.99' },
      { name: 'Loaded Nachos', description: 'Tortilla chips topped with seasoned beef, melted cheese, jalapeños, salsa, and sour cream', price: '$14.99' },
      { name: 'Garlic Bread', description: 'Toasted bread with garlic butter and melted mozzarella cheese', price: '$7.99' },
      { name: 'Chicken Wings (1 lb)', description: 'Crispy wings tossed in your choice of sauce: Buffalo, BBQ, Honey Garlic, or Hot', price: '$13.99' },
    ],
  },
  {
    id: 'burgers',
    title: 'Burgers & Sandwiches',
    icon: '🍔',
    items: [
      { name: 'MacLeod\'s Classic Burger', description: '6oz beef patty, lettuce, tomato, onion, pickles, and our signature sauce on a toasted bun. Served with fries.', price: '$14.99', tag: '⭐ Must Try' },
      { name: 'Bacon Cheddar Burger', description: 'Thick-cut bacon, aged cheddar, lettuce, tomato, and mayo on a toasted bun. Served with fries.', price: '$16.99', tag: 'Popular' },
      { name: 'Mushroom Swiss Burger', description: 'Sautéed mushrooms, Swiss cheese, and garlic aioli on a toasted bun. Served with fries.', price: '$15.99' },
      { name: 'BBQ Bacon Burger', description: 'BBQ-glazed patty, crispy bacon, onion rings, cheddar, and smoky BBQ sauce. Served with fries.', price: '$17.99' },
      { name: 'Western Burger', description: 'Burger topped with a fried egg, bacon, lettuce, tomato, and mayo. Served with fries.', price: '$16.99' },
      { name: 'Club Sandwich', description: 'Triple-decker with turkey, bacon, lettuce, tomato, and mayo on toasted bread. Served with fries.', price: '$14.99' },
      { name: 'Philly Cheese Steak', description: 'Thinly sliced beef with sautéed onions, peppers, and melted provolone on a hoagie roll', price: '$15.99' },
      { name: 'Grilled Chicken Sandwich', description: 'Marinated grilled chicken breast with lettuce, tomato, and chipotle mayo. Served with fries.', price: '$14.99' },
    ],
  },
  {
    id: 'mains',
    title: 'Main Entrées',
    icon: '🥩',
    items: [
      { name: 'Spaghetti & Meatballs', description: 'Al dente spaghetti with our homemade marinara sauce and seasoned meatballs, served with garlic bread', price: '$16.99', tag: 'Popular' },
      { name: 'Chicken Fried Steak', description: 'Tender breaded steak smothered in creamy gravy, served with mashed potatoes and vegetables', price: '$18.99' },
      { name: 'Fish & Chips', description: 'Beer-battered haddock with golden fries, coleslaw, tartar sauce, and lemon', price: '$17.99', tag: 'Popular' },
      { name: '8oz AAA Sirloin Steak', description: 'Grilled to your liking, served with baked potato, seasonal vegetables, and garlic bread', price: '$26.99' },
      { name: 'Half Chicken Dinner', description: 'Half a roasted chicken with mashed potatoes, gravy, coleslaw, and a dinner roll', price: '$18.99' },
      { name: 'Hot Hamburger Sandwich', description: 'Open-faced roast beef or hamburger on white bread, smothered in gravy with fries on the side', price: '$15.99' },
      { name: 'Hot Turkey Sandwich', description: 'Sliced turkey on white bread, smothered in gravy with mashed potatoes and vegetables', price: '$16.99' },
      { name: 'Chicken Parmesan', description: 'Breaded chicken breast topped with marinara and melted mozzarella, served with spaghetti and garlic bread', price: '$19.99' },
      { name: 'Pasta Alfredo', description: 'Fettuccine in a creamy parmesan Alfredo sauce. Add grilled chicken for $4 or shrimp for $6', price: '$16.99' },
    ],
  },
  {
    id: 'sides',
    title: 'Sides & Extras',
    icon: '🥗',
    items: [
      { name: 'French Fries', description: 'Golden crispy fries seasoned to perfection', price: '$5.99' },
      { name: 'Sweet Potato Fries', description: 'Crispy sweet potato fries with chipotle dipping sauce', price: '$6.99' },
      { name: 'Onion Rings', description: 'Beer-battered thick-cut onion rings', price: '$7.99' },
      { name: 'Mashed Potatoes & Gravy', description: 'Creamy mashed potatoes with rich savoury gravy', price: '$5.99' },
      { name: 'Caesar Salad (Side)', description: 'Side portion of our classic Caesar salad', price: '$5.99' },
      { name: 'Garden Salad', description: 'Mixed greens with your choice of dressing', price: '$4.99' },
      { name: 'Coleslaw', description: 'Creamy homemade coleslaw', price: '$3.99' },
      { name: 'Baked Potato', description: 'Loaded with butter, sour cream, chives, and cheese', price: '$6.99' },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    icon: '🍰',
    items: [
      { name: 'New York Cheesecake', description: 'Rich and creamy classic cheesecake with berry compote', price: '$8.99' },
      { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a molten centre, served with vanilla ice cream', price: '$9.99', tag: 'Popular' },
      { name: 'Apple Crumble', description: 'Warm apple crumble with cinnamon, served à la mode', price: '$8.99' },
      { name: 'Ice Cream Sundae', description: 'Three scoops of your choice with toppings, whipped cream, and a cherry', price: '$7.99' },
      { name: 'Tiramisu', description: 'Classic Italian dessert with espresso-soaked ladyfingers and mascarpone', price: '$9.99' },
    ],
  },
  {
    id: 'drinks',
    title: 'Beverages',
    icon: '🍺',
    items: [
      { name: 'Local Craft Beer (Draft)', description: 'Rotating selection of Alberta craft beers — ask your server for today\'s options', price: '$6.99', tag: 'Local Favourite' },
      { name: 'Domestic Beer (Bottle)', description: 'Selection of Canadian favourites', price: '$5.49' },
      { name: 'Imported Beer (Bottle)', description: 'Premium imported beer selection', price: '$6.49' },
      { name: 'House Wine (Glass)', description: 'Red or white — ask for today\'s selection', price: '$7.99' },
      { name: 'Premium Cocktails', description: 'Classic and signature cocktails — see your server for the full cocktail menu', price: '$9.99' },
      { name: 'Soft Drinks', description: 'Coke, Diet Coke, Sprite, Ginger Ale, Root Beer', price: '$2.99' },
      { name: 'Iced Tea / Lemonade', description: 'Freshly brewed iced tea or homemade lemonade', price: '$3.49' },
      { name: 'Coffee / Tea', description: 'Freshly brewed coffee or hot tea selection', price: '$2.99' },
      { name: 'Milkshake', description: 'Thick and creamy — chocolate, vanilla, or strawberry', price: '$6.99' },
    ],
  },
];

export const hours = [
  { day: 'Monday', hours: '11:00 AM – 9:00 PM', isOpen: true },
  { day: 'Tuesday', hours: '11:00 AM – 9:00 PM', isOpen: true },
  { day: 'Wednesday', hours: '11:00 AM – 9:00 PM', isOpen: true },
  { day: 'Thursday', hours: '11:00 AM – 9:00 PM', isOpen: true },
  { day: 'Friday', hours: '11:00 AM – 10:00 PM', isOpen: true },
  { day: 'Saturday', hours: '11:00 AM – 10:00 PM', isOpen: true },
  { day: 'Sunday', hours: '11:00 AM – 9:00 PM', isOpen: true },
];
