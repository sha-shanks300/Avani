// data/products.js — Avani catalogue: perfumes, NFC album keychains, posters.

// ---------------------------------------------------------------------------
// PERFUMES — 20ml bottles, fixed. Priced 320 (premium houses) / 300 (mid-tier).
// ---------------------------------------------------------------------------
const perfumes = [
  {
    name: "Chanel N°5",
    description:
      "The aldehydic floral that defined modern perfumery. Bright aldehydes and neroli open sharp and clean, settling into a powdery heart of jasmine, rose and ylang-ylang, with sandalwood and vanilla holding the base. Composed, formal, unmistakable.",
    price: 320,
    countInStock: 25,
    sku: "PF-001",
    category: "Perfumes",
    brand: "Chanel",
    sizes: ["20ml"],
    colors: [],
    collections: "Floral",
    material: "Eau de Parfum",
    gender: "Women",
    tags: ["aldehydic", "floral", "classic", "evening"],
    images: [
      { url: "https://picsum.photos/600/750?random=101", altText: "Chanel N°5 bottle" },
      { url: "https://picsum.photos/600/750?random=102", altText: "Chanel N°5 detail" },
    ],
    rating: 4.9,
    numReviews: 48,
  },
  {
    name: "Miss Dior",
    description:
      "A romantic floral built around Grasse rose and peony, lifted by blood orange and softened with a musky, faintly powdery drydown. Bright at first spray, warm and skin-close after an hour.",
    price: 320,
    countInStock: 30,
    sku: "PF-002",
    category: "Perfumes",
    brand: "Dior",
    sizes: ["20ml"],
    colors: [],
    collections: "Floral",
    material: "Eau de Parfum",
    gender: "Women",
    tags: ["rose", "peony", "romantic", "daytime"],
    images: [
      { url: "https://picsum.photos/600/750?random=103", altText: "Miss Dior bottle" },
      { url: "https://picsum.photos/600/750?random=104", altText: "Miss Dior detail" },
    ],
    rating: 4.8,
    numReviews: 41,
  },
  {
    name: "Black Opium",
    description:
      "Black coffee poured over white flowers. A jolt of espresso and pink pepper up top, jasmine through the middle, then vanilla, patchouli and cedar settling into something dark and addictive. Built for night.",
    price: 320,
    countInStock: 35,
    sku: "PF-003",
    category: "Perfumes",
    brand: "Yves Saint Laurent",
    sizes: ["20ml"],
    colors: [],
    collections: "Gourmand",
    material: "Eau de Parfum",
    gender: "Women",
    tags: ["coffee", "vanilla", "gourmand", "night"],
    images: [
      { url: "https://picsum.photos/600/750?random=105", altText: "Black Opium bottle" },
      { url: "https://picsum.photos/600/750?random=106", altText: "Black Opium detail" },
    ],
    rating: 4.8,
    numReviews: 52,
  },
  {
    name: "Gucci Flora Gorgeous Gardenia",
    description:
      "Sheer gardenia and jasmine over candied pear and red berries, finished with brown sugar and patchouli. Sweet without being heavy — the kind of floral that reads cheerful rather than formal.",
    price: 320,
    countInStock: 28,
    sku: "PF-004",
    category: "Perfumes",
    brand: "Gucci",
    sizes: ["20ml"],
    colors: [],
    collections: "Floral",
    material: "Eau de Parfum",
    gender: "Women",
    tags: ["gardenia", "pear", "sweet", "daytime"],
    images: [
      { url: "https://picsum.photos/600/750?random=107", altText: "Gucci Flora bottle" },
      { url: "https://picsum.photos/600/750?random=108", altText: "Gucci Flora detail" },
    ],
    rating: 4.7,
    numReviews: 36,
  },
  {
    name: "Burberry Her",
    description:
      "A berry gourmand — dark and red fruits stacked over a violet heart, drying down to musk and amber woods. Youthful and cosy, and it lingers on fabric longer than it does on skin.",
    price: 320,
    countInStock: 30,
    sku: "PF-005",
    category: "Perfumes",
    brand: "Burberry",
    sizes: ["20ml"],
    colors: [],
    collections: "Gourmand",
    material: "Eau de Parfum",
    gender: "Women",
    tags: ["berry", "violet", "musk", "everyday"],
    images: [
      { url: "https://picsum.photos/600/750?random=109", altText: "Burberry Her bottle" },
      { url: "https://picsum.photos/600/750?random=110", altText: "Burberry Her detail" },
    ],
    rating: 4.7,
    numReviews: 39,
  },
  {
    name: "Kayali Eden Juicy Apple 01",
    description:
      "Crisp red apple over jasmine and rose, grounded by amberwood and a touch of vanilla. Reads fresh and fruity for the first hour, then turns warmer and softer as it sits.",
    price: 320,
    countInStock: 32,
    sku: "PF-006",
    category: "Perfumes",
    brand: "Kayali",
    sizes: ["20ml"],
    colors: [],
    collections: "Gourmand",
    material: "Eau de Parfum",
    gender: "Women",
    tags: ["apple", "fruity", "amberwood", "viral"],
    images: [
      { url: "https://picsum.photos/600/750?random=111", altText: "Kayali Eden Juicy Apple bottle" },
      { url: "https://picsum.photos/600/750?random=112", altText: "Kayali Eden detail" },
    ],
    rating: 4.8,
    numReviews: 44,
  },
  {
    name: "Marc Jacobs Daisy",
    description:
      "Wild strawberry and violet leaf over a jasmine heart, closing on white woods and vanilla. Light, clean and uncomplicated — a daytime floral that never asks for attention.",
    price: 300,
    countInStock: 30,
    sku: "PF-007",
    category: "Perfumes",
    brand: "Marc Jacobs",
    sizes: ["20ml"],
    colors: [],
    collections: "Floral",
    material: "Eau de Toilette",
    gender: "Women",
    tags: ["strawberry", "violet", "fresh", "daytime"],
    images: [
      { url: "https://picsum.photos/600/750?random=113", altText: "Marc Jacobs Daisy bottle" },
      { url: "https://picsum.photos/600/750?random=114", altText: "Marc Jacobs Daisy detail" },
    ],
    rating: 4.6,
    numReviews: 33,
  },
  {
    name: "Victoria's Secret Bombshell",
    description:
      "Purple passionfruit and Shangri-la peony with a shot of vanilla orchid. Loud, fruity-floral and unmistakably itself — one spray carries further than you expect.",
    price: 300,
    countInStock: 40,
    sku: "PF-008",
    category: "Perfumes",
    brand: "Victoria's Secret",
    sizes: ["20ml"],
    colors: [],
    collections: "Floral",
    material: "Eau de Parfum",
    gender: "Women",
    tags: ["passionfruit", "peony", "fruity", "everyday"],
    images: [
      { url: "https://picsum.photos/600/750?random=115", altText: "Bombshell bottle" },
      { url: "https://picsum.photos/600/750?random=116", altText: "Bombshell detail" },
    ],
    rating: 4.6,
    numReviews: 37,
  },
  {
    name: "Lattafa Yara",
    description:
      "Orange blossom and tropical fruit over a creamy heart of gardenia and heliotrope, finished with vanilla, musk and sandalwood. Sweet, milky and heavy in the best way — enormous projection for its size.",
    price: 300,
    countInStock: 45,
    sku: "PF-009",
    category: "Perfumes",
    brand: "Lattafa",
    sizes: ["20ml"],
    colors: [],
    collections: "Gourmand",
    material: "Eau de Parfum",
    gender: "Women",
    tags: ["orange blossom", "vanilla", "creamy", "long lasting"],
    images: [
      { url: "https://picsum.photos/600/750?random=117", altText: "Lattafa Yara bottle" },
      { url: "https://picsum.photos/600/750?random=118", altText: "Lattafa Yara detail" },
    ],
    rating: 4.7,
    numReviews: 51,
  },
  {
    name: "Royal Oud",
    description:
      "A Middle Eastern oud built on smoky agarwood and rose, layered with saffron and warm spice over a resinous amber base. Dense and long-wearing — a cold-weather and occasion scent.",
    price: 300,
    countInStock: 25,
    sku: "PF-010",
    category: "Perfumes",
    brand: "Lattafa",
    sizes: ["20ml"],
    colors: [],
    collections: "Oud",
    material: "Eau de Parfum",
    gender: "Unisex",
    tags: ["oud", "agarwood", "saffron", "occasion"],
    images: [
      { url: "https://picsum.photos/600/750?random=119", altText: "Royal Oud bottle" },
      { url: "https://picsum.photos/600/750?random=120", altText: "Royal Oud detail" },
    ],
    rating: 4.6,
    numReviews: 29,
  },
];

// ---------------------------------------------------------------------------
// NFC ALBUM KEYCHAINS — flat 120. `brand` carries the ARTIST, which is what the
// storefront filters on. Add a row here to add a product.
// ---------------------------------------------------------------------------
const albums = [
  // Kanye West
  { album: "Graduation", artist: "Kanye West", genre: "Hip-Hop", year: 2007 },
  { album: "Late Registration", artist: "Kanye West", genre: "Hip-Hop", year: 2005 },
  { album: "808s & Heartbreak", artist: "Kanye West", genre: "Hip-Hop", year: 2008 },
  { album: "My Beautiful Dark Twisted Fantasy", artist: "Kanye West", genre: "Hip-Hop", year: 2010 },
  { album: "The Life of Pablo", artist: "Kanye West", genre: "Hip-Hop", year: 2016 },
  // Travis Scott
  { album: "Rodeo", artist: "Travis Scott", genre: "Hip-Hop", year: 2015 },
  { album: "Days Before Rodeo", artist: "Travis Scott", genre: "Hip-Hop", year: 2014 },
  { album: "Astroworld", artist: "Travis Scott", genre: "Hip-Hop", year: 2018 },
  { album: "Utopia", artist: "Travis Scott", genre: "Hip-Hop", year: 2023 },
  { album: "JACKBOYS", artist: "Travis Scott", genre: "Hip-Hop", year: 2019 },
  // Kendrick Lamar
  { album: "good kid, m.A.A.d city", artist: "Kendrick Lamar", genre: "Hip-Hop", year: 2012 },
  { album: "To Pimp a Butterfly", artist: "Kendrick Lamar", genre: "Hip-Hop", year: 2015 },
  { album: "DAMN.", artist: "Kendrick Lamar", genre: "Hip-Hop", year: 2017 },
  { album: "Mr. Morale & The Big Steppers", artist: "Kendrick Lamar", genre: "Hip-Hop", year: 2022 },
  { album: "GNX", artist: "Kendrick Lamar", genre: "Hip-Hop", year: 2024 },
  // Metro Boomin
  { album: "Without Warning", artist: "Metro Boomin", genre: "Hip-Hop", year: 2017, with: ["21 Savage", "Offset"] },
  { album: "Heroes & Villains", artist: "Metro Boomin", genre: "Hip-Hop", year: 2022 },
  { album: "Not All Heroes Wear Capes", artist: "Metro Boomin", genre: "Hip-Hop", year: 2018 },
  { album: "Spider-Man: Across the Spider-Verse", artist: "Metro Boomin", genre: "Hip-Hop", year: 2023 },
  // Future
  { album: "We Don't Trust You", artist: "Future", genre: "Hip-Hop", year: 2024, with: ["Metro Boomin"] },
  // Don Toliver
  { album: "Heaven or Hell", artist: "Don Toliver", genre: "R&B", year: 2020 },
  { album: "Life of a DON", artist: "Don Toliver", genre: "R&B", year: 2021 },
  { album: "Love Sick", artist: "Don Toliver", genre: "R&B", year: 2023 },
  { album: "Hardstone Psycho", artist: "Don Toliver", genre: "R&B", year: 2024 },
  // Playboi Carti
  { album: "Playboi Carti", artist: "Playboi Carti", genre: "Hip-Hop", year: 2017 },
  { album: "Die Lit", artist: "Playboi Carti", genre: "Hip-Hop", year: 2018 },
  { album: "Whole Lotta Red", artist: "Playboi Carti", genre: "Hip-Hop", year: 2020 },
  { album: "I AM MUSIC", artist: "Playboi Carti", genre: "Hip-Hop", year: 2025 },
  // The Weeknd
  { album: "Starboy", artist: "The Weeknd", genre: "R&B", year: 2016 },
  { album: "After Hours", artist: "The Weeknd", genre: "R&B", year: 2020 },
  { album: "Dawn FM", artist: "The Weeknd", genre: "R&B", year: 2022 },
  // Lana Del Rey
  { album: "Born to Die", artist: "Lana Del Rey", genre: "Alternative", year: 2012 },
  { album: "Ultraviolence", artist: "Lana Del Rey", genre: "Alternative", year: 2014 },
  { album: "Norman Fucking Rockwell!", artist: "Lana Del Rey", genre: "Alternative", year: 2019 },
  // 21 Savage
  { album: "i am > i was", artist: "21 Savage", genre: "Hip-Hop", year: 2018 },
  { album: "Savage Mode II", artist: "21 Savage", genre: "Hip-Hop", year: 2020, with: ["Metro Boomin"] },
  // Drake
  { album: "Take Care", artist: "Drake", genre: "Hip-Hop", year: 2011 },
  { album: "Certified Lover Boy", artist: "Drake", genre: "Hip-Hop", year: 2021 },
  // Eminem
  { album: "The Eminem Show", artist: "Eminem", genre: "Hip-Hop", year: 2002 },
  { album: "Music to Be Murdered By", artist: "Eminem", genre: "Hip-Hop", year: 2020 },
  // Billie Eilish
  { album: "Happier Than Ever", artist: "Billie Eilish", genre: "Pop", year: 2021 },
  { album: "Hit Me Hard and Soft", artist: "Billie Eilish", genre: "Pop", year: 2024 },
  // Olivia Rodrigo
  { album: "SOUR", artist: "Olivia Rodrigo", genre: "Pop", year: 2021 },
  { album: "GUTS", artist: "Olivia Rodrigo", genre: "Pop", year: 2023 },
  // Anirudh Ravichander
  { album: "Vikram", artist: "Anirudh Ravichander", genre: "Indian Cinema", year: 2022 },
  { album: "Master", artist: "Anirudh Ravichander", genre: "Indian Cinema", year: 2021 },
  // Single releases
  { album: "Thriller", artist: "Michael Jackson", genre: "Pop", year: 1982 },
  { album: "Blonde", artist: "Frank Ocean", genre: "R&B", year: 2016 },
  { album: "Nectar", artist: "Joji", genre: "Alternative", year: 2020 },
  { album: "Awaken, My Love!", artist: "Childish Gambino", genre: "R&B", year: 2016 },
  { album: "LONG.LIVE.A$AP", artist: "A$AP Rocky", genre: "Hip-Hop", year: 2013 },
  { album: "PARTYNEXTDOOR 2", artist: "PARTYNEXTDOOR", genre: "R&B", year: 2014 },
  { album: "SOS", artist: "SZA", genre: "R&B", year: 2022 },
  { album: "Midnights", artist: "Taylor Swift", genre: "Pop", year: 2022 },
  { album: "More Chaos", artist: "Ken Carson", genre: "Hip-Hop", year: 2025 },
  { album: "Alone at Prom (Deluxe)", artist: "Tory Lanez", genre: "R&B", year: 2021 },
  { album: "Let God Sort Em Out", artist: "Pusha T", genre: "Hip-Hop", year: 2025, with: ["Clipse", "Malice"] },
  { album: "Enthiran", artist: "A.R. Rahman", genre: "Indian Cinema", year: 2010 },
  { album: "Dhurandhar", artist: "Shashwat Sachdev", genre: "Indian Cinema", year: 2025 },
  { album: "Gully Boy", artist: "Ankur Tiwari", genre: "Indian Cinema", year: 2019 },
  { album: "Short n' Sweet", artist: "Sabrina Carpenter", genre: "Pop", year: 2024 },
];

const keychains = albums.map((a, i) => ({
  name: a.album,
  description:
    a.album + " by " + a.artist + " (" + a.year + "), pressed onto a scannable " +
    "NFC album keychain. Tap it to any phone and the record opens instantly — no " +
    "app, no pairing, no battery. Brushed metal tag on a reinforced split ring.",
  price: 120,
  countInStock: 50,
  sku: "KC-" + String(i + 1).padStart(3, "0"),
  category: "NFC Keychains",
  brand: a.artist,
  sizes: [],
  colors: ["Black", "Silver", "Gold"],
  collections: a.genre,
  material: "Stainless Steel",
  tags: [a.artist, a.album, a.genre, String(a.year)].concat(a.with || []),
  images: [
    { url: "https://picsum.photos/600/600?random=" + (200 + i * 2), altText: a.album + " keychain front" },
    { url: "https://picsum.photos/600/600?random=" + (201 + i * 2), altText: a.album + " keychain back" },
  ],
  rating: Number((4.5 + (i % 5) * 0.1).toFixed(1)),
  numReviews: 8 + (i % 23),
}));

// ---------------------------------------------------------------------------
// POSTERS — placeholder catalogue. Flat 249; sizes are selectable but the schema
// holds one price per product, so per-size pricing isn't expressed yet.
// ---------------------------------------------------------------------------
const posterSeeds = [
  { name: "Astroworld Ferris Wheel", theme: "Album Art" },
  { name: "Graduation Bear", theme: "Album Art" },
  { name: "Blonde Wash", theme: "Album Art" },
  { name: "Neo-Tokyo Alley", theme: "Anime" },
  { name: "Samurai at Dusk", theme: "Anime" },
  { name: "Grain & Static", theme: "Abstract" },
  { name: "Gradient Study No.3", theme: "Abstract" },
  { name: "Stay Unbothered", theme: "Typography" },
  { name: "Do It Anyway", theme: "Typography" },
  { name: "Midnight Coupe", theme: "Retro" },
  { name: "Sunset Palms 1987", theme: "Retro" },
  { name: "Film Noir Frame", theme: "Film" },
];

const posters = posterSeeds.map((p, i) => ({
  name: p.name,
  description:
    p.name + " — a " + p.theme.toLowerCase() + " print for walls that need a " +
    "focal point. Giclee-printed on heavyweight stock with a matte finish, " +
    "shipped rolled in a rigid tube. Frame not included.",
  price: 249,
  countInStock: 40,
  sku: "PS-" + String(i + 1).padStart(3, "0"),
  category: "Posters",
  brand: "Avani Studio",
  sizes: ["A4", "A3", "A2"],
  colors: [],
  collections: p.theme,
  material: "Matte Paper",
  tags: [p.theme, "wall art", "print"],
  images: [
    { url: "https://picsum.photos/600/850?random=" + (400 + i * 2), altText: p.name + " poster" },
    { url: "https://picsum.photos/600/850?random=" + (401 + i * 2), altText: p.name + " detail" },
  ],
  rating: Number((4.4 + (i % 6) * 0.1).toFixed(1)),
  numReviews: 5 + (i % 17),
}));

module.exports = [...perfumes, ...keychains, ...posters];
