import React from 'react'
import heroImg from '../../assets/rabbit-hero.webp';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
        <img 
          src={heroImg} 
          className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover" 
          alt="Vacation Collection"
        />
        {/* Refinement: Increased overlay opacity for better text contrast */}
        <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-4xl">
              {/* Refinement: Used Poppins/Inter style with tighter leading */}
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight uppercase leading-none mb-6">
                  Vacation <br/> Ready
              </h1>
              {/* Refinement: Better font weight and width control for the subtext */}
              <p className="text-sm md:text-xl mb-8 font-light tracking-wide max-w-lg mx-auto">
                  Explore our vacation-ready outfits with fast worldwide shipping.
              </p>
              {/* Refinement: Professional button with hover transition and weight */}
              <Link 
                to="#" 
                className="inline-block bg-white text-gray-950 px-8 py-3 rounded-none font-medium hover:bg-gray-100 transition-colors duration-300 uppercase text-sm tracking-widest"
              >
                Shop Now
              </Link>
            </div>
        </div>
    </section>
  );
};

export default Hero;