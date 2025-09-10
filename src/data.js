// src/data.js
export const animalData = [
  {
    category: 'Freshwater Fish',
    id: 'freshwater-fish',
    items: [
      {
        id: "neon-tetra",
        name: "Neon Tetra",
        description: "A small, vibrant fish known for its bright blue and red stripes.",
        price: "₹20 / fish",
        image: "/Neon Tetra.jpeg" // ✅ Corrected
      },
      {
        id: "betta-fish",
        name: "Betta Fish",
        description: "Known as the 'Siamese fighting fish', bettas are famous for their stunning fins.",
        price: "₹150 / fish",
        image: "/Betta Fish.jpg" // ✅ Corrected
      },
      {
        name: 'Guppy',
        description: 'A popular and colorful livebearer, guppies are easy to care for and breed.',
        price: '₹30 / pair',
        image: '/Guppy.webp'
      },
      {
        name: 'Angel Fish',
        description: 'With their distinctive triangular shape and elegant fins, angelfish add grace to any large aquarium.',
        price: '₹120 / fish',
        image: '/Angel Fish.webp'
      },
      {
        name: 'Zebra Danio',
        description: 'An active, striped fish that is excellent for beginners. They love to swim in groups.',
        price: '₹25 / fish',
        image: '/ZebraDanio.webp'
      },
    ]
  },
  {
    category: 'Saltwater Fish',
    id: 'saltwater-fish',
    items: [
      {
        id: "clownfish",
        name: "Clownfish",
        description: "Made famous by a movie, clownfish live symbiotically with sea anemones.",
        price: "₹500 / fish",
        image: "/Clownfish.webp" // ✅ Corrected
      },
      {
        name: 'Yellow Tang',
        description: 'A vibrant yellow fish that helps control algae in the tank.',
        price: '₹2500 / fish',
        image: '/Yellow Tang.webp'
      },
      {
        name: 'Blue Tang',
        description: 'A stunningly colored fish known for its playful personality.',
        price: '₹3000 / fish',
        image: '/Blue Tang.webp'
      }
    ]
  },
  {
    category: 'Turtles',
    id: 'turtles',
    items: [
      {
        name: 'Red-eared Slider',
        description: 'A popular pet turtle known for the distinctive red stripes on the sides of its head. Requires a proper aquatic setup.',
        price: '₹800 / turtle',
        image: '/Red-eared Slider.jpg'
      },
      {
        name: 'Spotted Turtle',
        description: 'Small, semi-aquatic turtles with smooth, dark shells covered in yellow spots.',
        price: '₹1200 / turtle',
        image: '/Spotted Turtle.jpg'
      },
      {
        name: 'Painted Turtle',
        description: 'Painted Turtle (Chrysemys picta) is a colorful, hardy turtle species ideal for aquariums and ponds.',
        price: '₹950 / turtle',
        image: '/Painted Turtle.webp'
      }
    ]
  },
  {
    category: 'Invertebrates',
    id: 'invertebrates',
    items: [
      {
        name: 'Cherry Shrimp',
        description: 'A colorful and active cleaner for your tank. They are great for small aquariums.',
        price: '₹50 / shrimp',
        image: '/CherryShrimp.jpg'
      },
      {
        name: 'Nerite Snail',
        description: 'An excellent algae eater and a peaceful tank mate. Comes in a variety of shell patterns.',
        price: '₹40 / snail',
        image: '/Nerite Snail.webp'
      },
      {
        name: 'Hermit Crab',
        description: 'Hermit Crab is a fascinating invertebrate known for living in scavenged shells.',
        price: '₹120 / crab',
        image: '/Hermit Crab.webp'
      }
    ]
  },
  {
    category: 'Aquatic Plants',
    id: 'aquatic-plants',
    items: [
      {
        name: 'Anubias',
        description: 'A hardy and easy-to-care-for plant that can thrive in a wide range of conditions.',
        price: '₹150 / plant',
        image: '/Anubias.webp'
      },
      {
        name: 'Java Fern',
        description: 'A beginner-friendly plant that adds a lush look to any aquarium. It attaches to wood or rocks.',
        price: '₹100 / plant',
        image: '/Java Fern.webp'
      },
      {
        name: 'Foreground Plants',
        description: 'Low-growing aquatic plants perfect for the front of your aquarium, creates a carpet effect.',
        price: '₹120 / plant',
        image: '/Foreground plants.jpg'
      }
    ]
  }
];

export const foodData = [
  {
    category: 'Fish Food',
    id: 'fish-food',
    items: [
      {
        name: 'TetraBits Complete',
        description: 'Balanced daily nutrition for tropical fish.',
        price: '₹200 / 100g',
        image: '/tetrabits.jpeg'
      },
      {
        name: 'Hikari Gold',
        description: 'Color enhancing pellets for fish.',
        price: '₹350 / 150g',
        image: '/hikari gold.jpg'
      },
      {
        name: 'Aquafin Flakes',
        description: 'Floating flakes suitable for all freshwater fish.',
        price: '₹180 / 100g',
        image: '/Aquafin flakes.webp'
      }
    ]
  },
  {
    category: 'Turtle Food',
    id: 'turtle-food',
    items: [
      {
        name: 'ReptoMin Sticks',
        description: 'Floating sticks for turtles. Rich in calcium.',
        price: '₹250 / 200g',
        image: '/Reptomin.webp'
      },
      {
        name: 'Tetra ReptoTreat',
        description: 'Natural shrimp treats for turtles.',
        price: '₹300 / 100g',
        image: '/Reptomin treat.webp'
      },
      {
        name: 'Nutrafin Turtle Pellets',
        description: 'Fortified daily nutrition for turtles.',
        price: '₹220 / 150g',
        image: '/nutrafin.webp'
      }
    ]
  },
  {
    category: 'Water Treatments',
    id: 'water-treatments',
    items: [
      {
        name: 'AquaSafe Conditioner',
        description: 'Removes chlorine and balances pH.',
        price: '₹150 / 100ml',
        image: '/AquaSafeConditioner.webp'
      },
      {
        name: 'API Quick Start',
        description: 'Starts aquarium cycle instantly.',
        price: '₹320 / 100ml',
        image: '/API Quick Start.webp'
      },
      {
        name: 'Seachem Prime',
        description: 'Concentrated conditioner for freshwater and saltwater.',
        price: '₹500 / 250ml',
        image: '/Seachem Prime.webp'
      }
    ]
  },
  {
    category: 'Filtration',
    id: 'filtration',
    items: [
      {
        name: 'Aquarium Net',
        description: 'Soft mesh net for safely catching fish.',
        price: '₹90',
        image: '/Aquarium Net.webp'
      },
      {
        name: 'Submersible Filter Pump',
        description: 'Efficient motor for tank water circulation.',
        price: '₹1200',
        image: '/Submersible Filter Pump.webp'
      },
      {
        name: 'Flexible Pipe',
        description: 'Silicon pipe for air/water flow connections.',
        price: '₹60 / meter',
        image: '/Flexible Pipe.webp'
      }
    ]
  },
  {
    category: 'Decor',
    id: 'decor',
    items: [
      {
        name: 'Aquarium Pebbles',
        description: 'Colorful stones for tank flooring.',
        price: '₹150 / kg',
        image: '/Aquarium Pebbles.jpg' // ✅ Corrected backslash to forward slash
      },
      {
        name: 'Artificial Plants',
        description: 'Bright plastic plants for visual appeal.',
        price: '₹100 each',
        image: '/Artificial Plants.webp'
      },
      {
        name: 'Decor Rocks & Hideouts',
        description: 'Natural rocks with hiding spaces for fish.',
        price: '₹300 each',
        image: '/Decor Rocks & Hideouts.webp'
      }
    ]
  }
];