import React from 'react'
import { Link } from 'react-router-dom';
import perfumeImage from "../../assets/her.jpeg";
import keychainImage from "../../assets/him.jpeg";
import posterImage from "../../assets/featured.webp";

// Placeholder art — swap these three imports for real category photography.
const categories = [
  { label: "Perfumes", query: "Perfumes", image: perfumeImage },
  { label: "NFC Keychains", query: "NFC Keychains", image: keychainImage },
  { label: "Posters", query: "Posters", image: posterImage },
];

const CategoryCollectionSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
        {categories.map((category) => (
          <div key={category.query} className="relative group overflow-hidden">
            <img
              src={category.image}
              className="w-full h-[420px] lg:h-[560px] object-cover transition-transform duration-700 group-hover:scale-105"
              alt={`${category.label} collection`}
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white p-5 shadow-sm">
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 uppercase tracking-tight">
                {category.label}
              </h2>
              <Link
                to={`/collections/all?category=${encodeURIComponent(category.query)}`}
                className="text-sm font-medium text-gray-900 underline underline-offset-8 hover:text-gray-600 transition-colors uppercase tracking-widest"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategoryCollectionSection
