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
      { url: "/products/perfumes/chanel-no5.jpg", altText: "Chanel N°5 20ml bottle" },
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
      { url: "/products/perfumes/miss-dior.jpg", altText: "Miss Dior 20ml bottle" },
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
      { url: "/products/perfumes/black-opium.jpg", altText: "Black Opium 20ml bottle" },
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
      { url: "/products/perfumes/flora-gorgeous-gardenia.jpg", altText: "Gucci Flora Gorgeous Gardenia 20ml bottle" },
    ],
    rating: 4.7,
    numReviews: 36,
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
      { url: "/products/perfumes/eden-juicy-apple.jpg", altText: "Kayali Eden Juicy Apple 01 20ml bottle" },
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
      { url: "/products/perfumes/daisy.jpg", altText: "Marc Jacobs Daisy 20ml bottle" },
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
      { url: "/products/perfumes/bombshell.jpg", altText: "Victoria's Secret Bombshell 20ml bottle" },
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
      { url: "/products/perfumes/yara.jpg", altText: "Lattafa Yara 20ml bottle" },
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
      { url: "/products/perfumes/royal-ouudh.jpg", altText: "Royal Oud 20ml bottle" },
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
  { album: "The College Dropout", artist: "Kanye West", genre: "Hip-Hop", year: 2004, cover: "kanye-west-the-college-dropout" },
  { album: "Graduation", artist: "Kanye West", genre: "Hip-Hop", year: 2007, cover: "kanye-west-graduation" },
  { album: "808s & Heartbreak", artist: "Kanye West", genre: "Hip-Hop", year: 2008, cover: "kanye-west-808s-and-heartbreak" },
  { album: "My Beautiful Dark Twisted Fantasy", artist: "Kanye West", genre: "Hip-Hop", year: 2010, cover: "kanye-west-my-beautiful-dark-twisted-fantasy" },
  { album: "The Life of Pablo", artist: "Kanye West", genre: "Hip-Hop", year: 2016, cover: "kanye-west-the-life-of-pablo" },
  // Travis Scott
  { album: "Days Before Rodeo", artist: "Travis Scott", genre: "Hip-Hop", year: 2014, cover: "travis-scott-days-before-rodeo" },
  { album: "Rodeo", artist: "Travis Scott", genre: "Hip-Hop", year: 2015, cover: "travis-scott-rodeo" },
  { album: "Astroworld", artist: "Travis Scott", genre: "Hip-Hop", year: 2018, cover: "travis-scott-astroworld" },
  { album: "JACKBOYS", artist: "Travis Scott", genre: "Hip-Hop", year: 2019, with: ["JACKBOYS"], cover: "jackboys-and-travis-scott-jackboys" },
  { album: "Utopia", artist: "Travis Scott", genre: "Hip-Hop", year: 2023, cover: "travis-scott-utopia" },
  // Kendrick Lamar
  { album: "good kid, m.A.A.d city", artist: "Kendrick Lamar", genre: "Hip-Hop", year: 2012, cover: "kendrick-lamar-good-kid-m-a-a-d-city" },
  { album: "To Pimp a Butterfly", artist: "Kendrick Lamar", genre: "Hip-Hop", year: 2015, cover: "kendrick-lamar-to-pimp-a-butterfly" },
  { album: "DAMN.", artist: "Kendrick Lamar", genre: "Hip-Hop", year: 2017, cover: "kendrick-lamar-damn" },
  { album: "Mr. Morale & The Big Steppers", artist: "Kendrick Lamar", genre: "Hip-Hop", year: 2022, cover: "kendrick-lamar-mr-morale-and-the-big-steppers" },
  { album: "GNX", artist: "Kendrick Lamar", genre: "Hip-Hop", year: 2024, cover: "kendrick-lamar-gnx" },
  // Metro Boomin
  { album: "Without Warning", artist: "Metro Boomin", genre: "Hip-Hop", year: 2017, with: ["21 Savage", "Offset"], cover: "21-savage-offset-and-metro-boomin-without-warning" },
  { album: "Not All Heroes Wear Capes", artist: "Metro Boomin", genre: "Hip-Hop", year: 2018, cover: "metro-boomin-not-all-heroes-wear-capes" },
  { album: "Heroes & Villains", artist: "Metro Boomin", genre: "Hip-Hop", year: 2022, cover: "metro-boomin-heroes-and-villains" },
  { album: "Spider-Man: Across the Spider-Verse", artist: "Metro Boomin", genre: "Hip-Hop", year: 2023, cover: "metro-boomin-metro-boomin-presents-spider-man-across-the-spider-verse" },
  // Future
  { album: "We Don't Trust You", artist: "Future", genre: "Hip-Hop", year: 2024, with: ["Metro Boomin"], cover: "future-and-metro-boomin-we-don-t-trust-you" },
  // Don Toliver
  { album: "Heaven or Hell", artist: "Don Toliver", genre: "R&B", year: 2020, cover: "don-toliver-heaven-or-hell" },
  { album: "Love Sick", artist: "Don Toliver", genre: "R&B", year: 2023, cover: "don-toliver-love-sick" },
  { album: "Hardstone Psycho", artist: "Don Toliver", genre: "R&B", year: 2024, cover: "don-toliver-hardstone-psycho" },
  // Playboi Carti
  { album: "Playboi Carti", artist: "Playboi Carti", genre: "Hip-Hop", year: 2017, cover: "playboi-carti-playboi-carti" },
  { album: "Die Lit", artist: "Playboi Carti", genre: "Hip-Hop", year: 2018, cover: "playboi-carti-die-lit" },
  { album: "Whole Lotta Red", artist: "Playboi Carti", genre: "Hip-Hop", year: 2020, cover: "playboi-carti-whole-lotta-red" },
  { album: "MUSIC", artist: "Playboi Carti", genre: "Hip-Hop", year: 2025, cover: "playboi-carti-music" },
  // The Weeknd
  { album: "Beauty Behind the Madness", artist: "The Weeknd", genre: "R&B", year: 2015, cover: "the-weeknd-beauty-behind-the-madness" },
  { album: "Starboy", artist: "The Weeknd", genre: "R&B", year: 2016, cover: "the-weeknd-starboy" },
  { album: "After Hours", artist: "The Weeknd", genre: "R&B", year: 2020, cover: "the-weeknd-after-hours" },
  { album: "Dawn FM", artist: "The Weeknd", genre: "R&B", year: 2022, cover: "the-weeknd-dawn-fm" },
  { album: "Hurry Up Tomorrow", artist: "The Weeknd", genre: "R&B", year: 2025, cover: "the-weeknd-hurry-up-tomorrow" },
  // 21 Savage
  { album: "i am > i was", artist: "21 Savage", genre: "Hip-Hop", year: 2018, cover: "21-savage-i-am-i-was" },
  { album: "Savage Mode II", artist: "21 Savage", genre: "Hip-Hop", year: 2020, with: ["Metro Boomin"], cover: "21-savage-and-metro-boomin-savage-mode-ii" },
  // Drake
  { album: "Take Care", artist: "Drake", genre: "Hip-Hop", year: 2011, cover: "drake-take-care" },
  { album: "Certified Lover Boy", artist: "Drake", genre: "Hip-Hop", year: 2021, cover: "drake-certified-lover-boy" },
  // Eminem
  { album: "The Eminem Show", artist: "Eminem", genre: "Hip-Hop", year: 2002, cover: "eminem-the-eminem-show" },
  { album: "Music to Be Murdered By", artist: "Eminem", genre: "Hip-Hop", year: 2020, cover: "eminem-music-to-be-murdered-by" },
  // Frank Ocean
  { album: "channel ORANGE", artist: "Frank Ocean", genre: "R&B", year: 2012, cover: "frank-ocean-channel-orange" },
  { album: "Blonde", artist: "Frank Ocean", genre: "R&B", year: 2016, cover: "frank-ocean-blonde" },
  // A$AP Rocky
  { album: "AT.LONG.LAST.A$AP", artist: "A$AP Rocky", genre: "Hip-Hop", year: 2015, cover: "asap-rocky-at-long-last-asap" },
  { album: "TESTING", artist: "A$AP Rocky", genre: "Hip-Hop", year: 2018, cover: "asap-rocky-testing" },
  // Tyler, The Creator
  { album: "Flower Boy", artist: "Tyler, The Creator", genre: "Hip-Hop", year: 2017, cover: "tyler-the-creator-flower-boy" },
  { album: "IGOR", artist: "Tyler, The Creator", genre: "Hip-Hop", year: 2019, cover: "tyler-the-creator-igor" },
  // Single releases
  { album: "Thriller", artist: "Michael Jackson", genre: "Pop", year: 1982, cover: "michael-jackson-thriller" },
  { album: "Madvillainy", artist: "Madvillain", genre: "Hip-Hop", year: 2004, cover: "madvillain-madvillainy" },
  { album: "Awaken, My Love!", artist: "Childish Gambino", genre: "R&B", year: 2016, cover: "childish-gambino-awaken-my-love" },
  { album: "PARTYNEXTDOOR TWO", artist: "PARTYNEXTDOOR", genre: "R&B", year: 2014, cover: "partynextdoor-partynextdoor-two" },
  { album: "SOS", artist: "SZA", genre: "R&B", year: 2022, cover: "sza-sos" },
  { album: "A Great Chaos", artist: "Ken Carson", genre: "Hip-Hop", year: 2023, cover: "ken-carson-a-great-chaos" },
  { album: "Alone at Prom (Deluxe)", artist: "Tory Lanez", genre: "R&B", year: 2021, cover: "tory-lanez-alone-at-prom-deluxe" },
  { album: "Let God Sort Em Out", artist: "Clipse", genre: "Hip-Hop", year: 2025, with: ["Pusha T", "Malice"], cover: "clipse-let-god-sort-em-out" },
  { album: "Spider-Man: Into the Spider-Verse", artist: "Various Artists", genre: "Hip-Hop", year: 2018, cover: "various-artists-spider-man-into-the-spider-verse" },
];

// Images are rendered from frontend/src/assets/covers into the keychain product
// card template and served by the frontend from /products/keychains/.
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
    { url: "/products/keychains/" + a.cover + ".jpg", altText: a.album + " NFC keychain" },
    { url: "/products/keychains/" + a.cover + "-cover.jpg", altText: a.album + " album cover" },
  ],
  rating: Number((4.5 + (i % 5) * 0.1).toFixed(1)),
  numReviews: 8 + (i % 23),
}));

// ---------------------------------------------------------------------------
// POSTERS — flat 249; sizes are selectable but the schema holds one price per
// product, so per-size pricing isn't expressed yet. `brand` carries the ARTIST.
// Images are rendered from frontend/src/assets/posters into the poster product
// card template and served by the frontend from /products/posters/.
// ---------------------------------------------------------------------------
const posterSeeds = [
  { name: "To Pimp a Butterfly", artist: "Kendrick Lamar", genre: "Hip-Hop", file: "kendrick-lamar-to-pimp-a-butterfly" },
  { name: "K-Dot", artist: "Kendrick Lamar", genre: "Hip-Hop", file: "kendrick-lamar-k-dot" },
  { name: "Tupac", artist: "Tupac", genre: "Hip-Hop", file: "tupac" },
  { name: "Timeless", artist: "The Weeknd", genre: "R&B", with: ["Playboi Carti"], file: "the-weeknd-and-playboi-carti-timeless" },
  { name: "Operation: Doomsday", artist: "MF DOOM", genre: "Hip-Hop", file: "mf-doom-operation-doomsday" },
  { name: "Rockstar", artist: "Anirudh Ravichander", genre: "Indian Cinema", file: "anirudh-rockstar" },
  { name: "Blinding Lights", artist: "The Weeknd", genre: "R&B", file: "the-weeknd-blinding-lights" },
  { name: "Love Sick", artist: "Don Toliver", genre: "R&B", file: "don-toliver-love-sick" },
  { name: "Global Icon", artist: "A.R. Rahman", genre: "Indian Cinema", file: "a-r-rahman-global-icon" },
  { name: "We Don't Trust You (White)", artist: "Future", genre: "Hip-Hop", with: ["Metro Boomin"], file: "future-and-metro-boomin-we-don-t-trust-you-white" },
  { name: "The Ultimate Villain", artist: "MF DOOM", genre: "Hip-Hop", file: "mf-doom-the-ultimate-villain" },
  { name: "ALL CAPS", artist: "MF DOOM", genre: "Hip-Hop", file: "mf-doom-all-caps" },
  { name: "Weeknd", artist: "The Weeknd", genre: "R&B", file: "the-weeknd-weeknd" },
  { name: "We Don't Trust You (Dark)", artist: "Future", genre: "Hip-Hop", with: ["Metro Boomin"], file: "future-and-metro-boomin-we-don-t-trust-you-dark" },
  { name: "Musical", artist: "Anirudh Ravichander", genre: "Indian Cinema", file: "anirudh-musical" },
  { name: "Hardstone Psycho", artist: "Don Toliver", genre: "R&B", file: "don-toliver-hardstone-psycho" },
  { name: "In Future We Trust", artist: "Future", genre: "Hip-Hop", file: "future-in-future-we-trust" },
  { name: "Heroes & Villains (If Young Metro Don't Trust You)", artist: "Metro Boomin", genre: "Hip-Hop", file: "metro-boomin-heroes-and-villains-if-young-metro-don-t-trust-you" },
  { name: "Man on the Moon: The End of Day", artist: "Kid Cudi", genre: "Hip-Hop", file: "kid-cudi-man-on-the-moon-the-end-of-day" },
  { name: "Die Lit", artist: "Playboi Carti", genre: "Hip-Hop", file: "playboi-carti-die-lit" },
  { name: "South Atlanta Comics", artist: "Playboi Carti", genre: "Hip-Hop", file: "playboi-carti-south-atlanta-comics" },
  { name: "Astroworld", artist: "Travis Scott", genre: "Hip-Hop", file: "travis-scott-astroworld" },
  { name: "West", artist: "Kanye West", genre: "Hip-Hop", file: "kanye-west-west" },
  { name: "The College Dropout (Through the Wire)", artist: "Kanye West", genre: "Hip-Hop", file: "kanye-west-the-college-dropout-through-the-wire" },
  { name: "Rodeo", artist: "Travis Scott", genre: "Hip-Hop", file: "travis-scott-rodeo" },
  { name: "Heroes & Villains (Comic)", artist: "Metro Boomin", genre: "Hip-Hop", file: "metro-boomin-heroes-and-villains-comic" },
  { name: "Heroes & Villains (Spider-Verse)", artist: "Metro Boomin", genre: "Hip-Hop", file: "metro-boomin-heroes-and-villains-spider-verse" },
  { name: "Metro Boomin", artist: "Metro Boomin", genre: "Hip-Hop", file: "metro-boomin-metro-boomin" },
  { name: "channel ORANGE", artist: "Frank Ocean", genre: "R&B", file: "frank-ocean-channel-orange" },
  { name: "I Am Music", artist: "Playboi Carti", genre: "Hip-Hop", file: "playboi-carti-i-am-music" },
  { name: "SaNa", artist: "Santhosh Narayanan", genre: "Indian Cinema", file: "santhosh-narayanan-sana" },
  { name: "Graduation", artist: "Kanye West", genre: "Hip-Hop", file: "kanye-west-graduation" },
  { name: "Days Before Rodeo", artist: "Travis Scott", genre: "Hip-Hop", file: "travis-scott-days-before-rodeo" },
  { name: "Utopia (Thank God)", artist: "Travis Scott", genre: "Hip-Hop", file: "travis-scott-utopia-thank-god" },
  { name: "Mr. Morale & The Big Steppers", artist: "Kendrick Lamar", genre: "Hip-Hop", file: "kendrick-lamar-mr-morale-and-the-big-steppers" },
  { name: "To Pimp a Butterfly (White House)", artist: "Kendrick Lamar", genre: "Hip-Hop", file: "kendrick-lamar-to-pimp-a-butterfly-white-house" },
  { name: "Isai Puyal", artist: "A.R. Rahman", genre: "Indian Cinema", file: "a-r-rahman-isai-puyal" },
];

const posters = posterSeeds.map((p, i) => ({
  name: p.name + " Poster",
  description:
    p.name + " — a " + p.artist + " print for walls that need a focal point. " +
    "Giclee-printed on heavyweight stock with a matte finish, shipped rolled in " +
    "a rigid tube. Frame not included.",
  price: 249,
  countInStock: 40,
  sku: "PS-" + String(i + 1).padStart(3, "0"),
  category: "Posters",
  brand: p.artist,
  sizes: ["A4", "A3", "A2"],
  colors: [],
  collections: p.genre,
  material: "Matte Paper",
  tags: [p.artist, p.name, p.genre, "wall art", "print"].concat(p.with || []),
  images: [
    { url: "/products/posters/" + p.file + ".jpg", altText: p.name + " poster, framed" },
    { url: "/products/posters/" + p.file + "-print.jpg", altText: p.name + " poster print" },
  ],
  rating: Number((4.4 + (i % 6) * 0.1).toFixed(1)),
  numReviews: 5 + (i % 17),
}));

module.exports = [...perfumes, ...keychains, ...posters];
