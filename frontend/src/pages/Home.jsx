import React from 'react'
import Hero from '../components/Layout/Hero';
import GenderCollectionSection from '../components/Products/GenderCollectionSection';
import NewArrivals from '../components/Products/NewArrivals';
import ProductDetails from '../components/Products/ProductDetails';
import ProductGrid from '../components/Products/ProductGrid';
import FeaturedCollection from '../components/Products/FeaturedCollection';
import FeatureSection from '../components/Products/FeatureSection';

const placeholderProducts = [
  {
        _id:1,
        name: "Product 1",
        price: 100,
        images:[{url: "https://picsum.photos/500/500?random=3"}],
    },
    {
        _id:2,
        name: "Product 2",
        price: 100,
        images:[{url: "https://picsum.photos/500/500?random=4"}]
    },
    {
        _id:1,
        name: "Product 3",
        price: 100,
        images:[{url: "https://picsum.photos/500/500?random=5"}]
    },
    {
        _id:1,
        name: "Product 4",
        price: 100,
        images:[{url: "https://picsum.photos/500/500?random=6"}]
    },
    {
        _id:1,
        name: "Product 5",
        price: 100,
        images:[{url: "https://picsum.photos/500/500?random=7"}],
    },
    {
        _id:2,
        name: "Product 6",
        price: 100,
        images:[{url: "https://picsum.photos/500/500?random=8"}]
    },
    {
        _id:1,
        name: "Product 7",
        price: 100,
        images:[{url: "https://picsum.photos/500/500?random=9"}]
    },
    {
        _id:1,
        name: "Product 8",
        price: 100,
        images:[{url: "https://picsum.photos/500/500?random=6"}]
    },
];

const Home = () => {
  return (
    <div className="space-y-12 md:space-y-20">
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* Best Seller Section */}
      <section className="bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 uppercase tracking-tight">
          Best Seller
        </h2>
        {/* FIX: Passing isHome prevents recursive rendering/crashes */}
        <ProductDetails isHome={true} />
      </section>

      {/* Top Wears Section */}
      <section className='container mx-auto px-4 lg:px-8'>
        <h2 className='text-3xl font-bold text-center mb-10 uppercase tracking-tight'>
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </section>

      <FeaturedCollection />
      <FeatureSection />
    </div>
    
  );
};

export default Home;
