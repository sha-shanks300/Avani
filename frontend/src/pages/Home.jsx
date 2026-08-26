import React, { useEffect, useState } from 'react'
import Hero from '../components/Layout/Hero';
import GenderCollectionSection from '../components/Products/GenderCollectionSection';
import NewArrivals from '../components/Products/NewArrivals';
import ProductDetails from '../components/Products/ProductDetails';
import ProductGrid from '../components/Products/ProductGrid';
import FeaturedCollection from '../components/Products/FeaturedCollection';
import FeatureSection from '../components/Products/FeatureSection';
import { useDispatch, useSelector } from "react-redux";
import {fetchProductsByFilters} from "../redux/slices/productSlice"
import axios from 'axios';


const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProduct, setBestSellerProduct] =useState(null);

  useEffect(() => {
    //fetch products for a specific collection
    dispatch(
      fetchProductsByFilters({
        gender: "Women",
        category: "Bottom Wear",
        limit: 8,
      })
    );
    //Fetch best seller product
      const fetchBestSeller = async () =>{
        try{
          const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
          );
          setBestSellerProduct(response.data);
        }catch(error){
          console.error(error);
        }
      };
      fetchBestSeller();
  }, [dispatch]);


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
        {bestSellerProduct ? (<ProductDetails productId={bestSellerProduct._id} isHome />) : (
          <p className='text-center'>Loading best seller product ...</p>
        )}
      </section>

      {/* Top Wears Section */}
      <section className='container mx-auto px-4 lg:px-8'>
        <h2 className='text-3xl font-bold text-center mb-10 uppercase tracking-tight'>
          Top Wears for Women
        </h2>
        <ProductGrid products={products} loading={loading} error={error} />
      </section>

      <FeaturedCollection />
      <FeatureSection />
    </div>
    
  );
};

export default Home;
