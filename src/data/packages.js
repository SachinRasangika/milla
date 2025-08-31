export const scenicFallback = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80';

export const CATEGORIES = [
  {
    id: 'beach',
    label: 'Beach & Relaxation',
    packages: [
      {
        id: 'beach-3d',
        title: '3 Days – Quick Beach Escape',
        destinations: 'Negombo → Bentota',
        highlights: ['Golden beaches', 'Lagoon boat ride', 'Water sports'],
        price: 'Starting $350',
        cta: 'View Details',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        details: {
          duration: '3 Days / 2 Nights',
          bestFor: 'Couples, Weekend Getaways',
          accommodation: '3★ hotels (upgradeable)',
          overview: 'A short and sweet escape to unwind by the coast with a touch of adventure on the lagoon.',
          itinerary: [
            { day: 'Day 1 – Arrival in Negombo', text: 'Airport pickup → check-in → sunset at Negombo Beach.' },
            { day: 'Day 2 – Bentota', text: 'Lagoon boat ride → optional water sports → beach time.' },
            { day: 'Day 3 – Departure', text: 'Relaxing morning → transfer to airport.' }
          ],
          includes: ['Airport transfers', 'Breakfast', 'Private transport'],
          excludes: ['Flights', 'Lunch & dinner', 'Personal expenses', 'Travel insurance'],
          gallery: [
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80'
          ],
          pricingOptions: [
            { name: 'Standard Package', price: '$350', note: '3★ stays' },
            { name: 'Luxury Package', price: '$620', note: '4★–5★ stays' }
          ],
          tips: ['Best season: Nov–Apr', 'Carry sunscreen', 'Try fresh seafood']
        }
      },
      {
        id: 'beach-5d',
        title: '5 Days – Southern Coast Paradise',
        destinations: 'Galle → Mirissa → Hikkaduwa',
        highlights: ['Whale watching', 'Snorkeling', 'Galle Fort visit'],
        price: 'Starting $650',
        cta: 'View Details',
        image: 'https://images.unsplash.com/photo-1524749292158-7540c2494485?auto=format&fit=crop&w=800&q=80',
        details: {
          duration: '5 Days / 4 Nights',
          bestFor: 'Families, Couples',
          accommodation: '3★ / 4★ (customizable)',
          overview: 'Explore the southern coastline with culture in Galle and marine life in Mirissa & Hikkaduwa.',
          itinerary: [
            { day: 'Day 1 – Galle', text: 'Walk inside UNESCO Galle Fort and enjoy sunset ramparts views.' },
            { day: 'Day 2 – Mirissa', text: 'Whale watching tour → relax at Mirissa Beach.' },
            { day: 'Day 3 – Hikkaduwa', text: 'Snorkeling over coral reefs → beachfront dinner.' },
            { day: 'Day 4 – Leisure', text: 'Water sports or spa day.' },
            { day: 'Day 5 – Departure', text: 'Transfer to airport or next destination.' }
          ],
          includes: ['Airport transfers', 'Breakfast', 'Private driver-guide'],
          excludes: ['Flights', 'Lunch & dinner', 'Personal expenses', 'Travel insurance'],
          gallery: [
            'https://images.unsplash.com/photo-1524749292158-7540c2494485?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80'
          ],
          pricingOptions: [
            { name: 'Standard Package', price: '$650', note: '3★ stays' },
            { name: 'Luxury Package', price: '$1,050', note: '5★ resorts' }
          ],
          tips: ['Season: Nov–Apr', 'Carry reef-safe sunscreen']
        }
      },
      {
        id: 'beach-7d',
        title: '7 Days – Southern Coast Paradise',
        destinations: 'Colombo → Galle → Mirissa → Hikkaduwa',
        highlights: ['Golden beaches', 'Historic forts', 'Ocean adventures'],
        price: 'Starting $899',
        cta: 'Book Now',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        details: {
          tagline: 'Golden beaches, historic forts & ocean adventures.',
          duration: '7 Days / 6 Nights',
          bestFor: 'Families, Couples, Beach Lovers',
          accommodation: '3★ / 4★ hotels (customizable)',
          overview: 'Discover Sri Lanka’s southern coast, where golden beaches meet rich culture and vibrant marine life. This 7-day journey takes you through Galle’s colonial charm, Mirissa’s whale-watching waters, and the laid-back vibes of Hikkaduwa.',
          itinerary: [
            { day: 'Day 1 – Arrival in Colombo', text: 'Pickup from Bandaranaike Airport → transfer to hotel → evening city walk.' },
            { day: 'Day 2 – Colombo → Galle', text: 'Scenic drive along the coast → explore UNESCO Galle Fort → sunset at Unawatuna Beach.' },
            { day: 'Day 3 – Galle → Mirissa', text: 'Whale watching boat tour → relax at Mirissa beach.' },
            { day: 'Day 4 – Mirissa → Hikkaduwa', text: 'Snorkeling & coral reef visit → beachfront dinner.' },
            { day: 'Day 5 – Hikkaduwa Leisure Day', text: 'Free time for water sports, beach walks, or spa treatments.' },
            { day: 'Day 6 – Bentota Excursion', text: 'River safari → visit turtle hatchery → return to Hikkaduwa.' },
            { day: 'Day 7 – Departure', text: 'Transfer back to Colombo → airport drop-off.' }
          ],
          includes: [
            'Airport transfers',
            'Accommodation with breakfast',
            'Private transport with driver',
            'Guided tours & entrance fees (listed sites)',
            'Whale watching tour ticket'
          ],
          excludes: [
            'Air tickets',
            'Lunch & dinner (unless mentioned)',
            'Personal expenses (shopping, tips)',
            'Travel insurance'
          ],
          gallery: [
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1524749292158-7540c2494485?auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1544551763-7ef420be2a37?auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1476887334197-56adbf254e1a?auto=format&fit=crop&w=1000&q=80'
          ],
          reviews: [
            { name: 'Anna, Germany', rating: 5, text: 'Whale watching in Mirissa was unforgettable! Hotels were cozy and the guide was super friendly.' }
          ],
          pricingOptions: [
            { name: 'Standard Package', price: '$899', note: '3★ hotels' },
            { name: 'Luxury Package', price: '$1,299', note: '5★ resorts, private tours' }
          ],
          tips: [
            'Best travel season: November–April',
            'Carry sunscreen & light clothing',
            'Try local seafood in Mirissa'
          ]
        }
      },
      {
        id: 'beach-4d',
        title: '4 Days – East Coast Chill',
        destinations: 'Trincomalee → Nilaveli',
        highlights: ['Snorkeling at Pigeon Island', 'Calm turquoise waters', 'Seafood by the bay'],
        price: 'Starting $520',
        cta: 'View Details',
        image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
        details: {
          duration: '4 Days / 3 Nights',
          bestFor: 'Families, Snorkelers',
          accommodation: '3★ / 4★ beach hotels',
          overview: 'Relax on the serene east coast with crystal-clear water and gentle bays ideal for snorkeling and swimming.',
          includes: ['Private transport', 'Breakfast', 'Snorkeling gear (optional)']
        }
      },
      {
        id: 'beach-10d',
        title: '10 Days – Island Beach Circuit',
        destinations: 'Negombo → Kalpitiya → Galle → Mirissa → Tangalle',
        highlights: ['Kitesurfing', 'Dolphin watching', 'Secluded coves'],
        price: 'Starting $1,590',
        cta: 'Plan Trip',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
        details: {
          duration: '10 Days / 9 Nights',
          bestFor: 'Beach lovers, Active travelers',
          accommodation: 'Handpicked 3★–5★ stays',
          overview: 'Circle Sri Lanka’s finest beaches with time for kitesurfing in Kalpitiya and whale watching in Mirissa.',
          includes: ['Private driver', 'Breakfast', 'Activity coordination']
        }
      }
    ]
  },
  {
    id: 'hill-country',
    label: 'Hill Country & Tea Trails',
    packages: [
      {
        id: 'tea-4d',
        title: '4 Days – Tea Plantation Getaway',
        destinations: 'Kandy → Nuwara Eliya',
        highlights: ['Tea tasting', 'Gregory Lake', 'Ramboda Falls'],
        price: 'Starting $499',
        cta: 'Plan Now',
        image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80',
        details: { duration: '4 Days / 3 Nights', bestFor: 'Nature lovers', accommodation: 'Boutique stays' }
      },
      {
        id: 'ella-6d',
        title: '6 Days – Hill Country & Ella',
        destinations: 'Kandy → Nuwara Eliya → Ella',
        highlights: ['Scenic train', "Little Adam's Peak", 'Nine Arches Bridge'],
        price: 'Starting $799',
        cta: 'View Details',
        image: 'https://images.unsplash.com/photo-1544967882-6abec37be2b3?auto=format&fit=crop&w=800&q=80',
        details: { duration: '6 Days / 5 Nights', bestFor: 'Hikers, Photographers', accommodation: '3★ / 4★' }
      }
    ]
  },
  {
    id: 'wildlife',
    label: 'Wildlife & Adventure',
    packages: [
      {
        id: 'yala-3d',
        title: '3 Days – Yala Safari Escape',
        destinations: 'Yala National Park',
        highlights: ['Safari', 'Birdwatching', 'Camping'],
        price: 'Starting $450',
        cta: 'Book Safari',
        image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80',
        details: { duration: '3 Days / 2 Nights', bestFor: 'Wildlife lovers', accommodation: 'Safari lodge' }
      },
      {
        id: 'adventure-7d',
        title: '7 Days – Adventure Explorer',
        destinations: 'Sigiriya → Minneriya → Yala → Bentota',
        highlights: ['Rock fortress climb', 'Wildlife safaris', 'Water sports'],
        price: 'Starting $1,050',
        cta: 'Plan Trip',
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
        details: { duration: '7 Days / 6 Nights', bestFor: 'Adventurers', accommodation: '3★ / 4★' }
      }
    ]
  },
  {
    id: 'culture',
    label: 'Culture & Heritage',
    packages: [
      {
        id: 'heritage-3d',
        title: '3 Days – Heritage Highlights',
        destinations: 'Anuradhapura → Sigiriya',
        highlights: ['Ancient cities', 'Sigiriya Rock', 'Local crafts'],
        price: 'Starting $420',
        cta: 'View Details',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
        details: { duration: '3 Days / 2 Nights', bestFor: 'History lovers', accommodation: '3★ / 4★' }
      },
      {
        id: 'kandy-4d',
        title: '4 Days – Kandy & Cultural Triangle',
        destinations: 'Kandy → Dambulla → Polonnaruwa',
        highlights: ['Temple of the Tooth', 'Cave Temples', 'UNESCO sites'],
        price: 'Starting $680',
        cta: 'View Details',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        details: { duration: '4 Days / 3 Nights', bestFor: 'Culture enthusiasts', accommodation: '3★ / 4★' }
      }
    ]
  },
  {
    id: 'honeymoon',
    label: 'Honeymoon & Romantic',
    packages: [
      {
        id: 'romance-5d',
        title: '5 Days – Tropical Romance',
        destinations: 'Bentota → Galle → Mirissa',
        highlights: ['Sunset cruises', 'Private dinners', 'Spa & wellness'],
        price: 'Starting $980',
        cta: 'Book Now',
        image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80',
        details: { duration: '5 Days / 4 Nights', bestFor: 'Couples', accommodation: 'Boutique resorts' }
      },
      {
        id: 'romance-7d',
        title: '7 Days – Luxe Island Escape',
        destinations: 'Negombo → Galle → Ella → Mirissa',
        highlights: ['Boutique stays', 'Scenic train', 'Beach time'],
        price: 'Starting $1,450',
        cta: 'View Details',
        image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80',
        details: { duration: '7 Days / 6 Nights', bestFor: 'Honeymooners', accommodation: '5★ resorts' }
      }
    ]
  },
  {
    id: 'custom',
    label: 'Custom / Tailor-Made',
    packages: [
      {
        id: 'custom-idea',
        title: 'Design Your Dream Trip',
        destinations: 'Mix beaches, culture, wildlife & more',
        highlights: ['Personal travel expert', 'Flexible dates', 'Handpicked stays'],
        price: 'Fully custom pricing',
        cta: 'Build My Package',
        image: 'https://images.unsplash.com/photo-1460355976672-71c3f0a4bdac?auto=format&fit=crop&w=800&q=80',
        details: { duration: 'Flexible', bestFor: 'Any traveler', accommodation: 'Your choice' }
      }
    ]
  }
];
