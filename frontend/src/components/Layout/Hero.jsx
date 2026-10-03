import React, { useEffect, useState } from 'react'
import heroImg from '../../assets/hero-1.webp';
import heroImg2 from '../../assets/hero-2.webp';
import heroImg3 from '../../assets/hero-3.webp';
import { Link } from 'react-router-dom';

const slides = [
  { src: heroImg, alt: "Avani signature collection" },
  { src: heroImg2, alt: "Avani fragrances and keychains" },
  { src: heroImg3, alt: "Avani curated posters" },
];

const SLIDE_INTERVAL = 5000;

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-advance; restarts the timer whenever the slide changes (including dot clicks)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="relative overflow-hidden h-[400px] md:h-[600px] lg:h-[750px]">
        {slides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Refinement: Increased overlay opacity for better text contrast */}
        <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-4xl [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">
              {/* Refinement: Used Poppins/Inter style with tighter leading */}
              <h1 className="text-white text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight uppercase leading-none mb-6">
                  Your <br/> Signature
              </h1>
              {/* Refinement: Better font weight and width control for the subtext */}
              <p className="text-sm md:text-xl mb-8 font-light tracking-wide max-w-lg mx-auto">
                  Craft your identity with premium fragrances, NFC keychains, and curated posters.
              </p>
              {/* Refinement: Professional button with hover transition and weight */}
              <Link
                to="/collections/all"
                className="inline-block bg-white text-gray-950 px-8 py-3 rounded-none font-medium hover:bg-gray-100 transition-colors duration-300 uppercase text-sm tracking-widest"
              >
                Shop Now
              </Link>
            </div>
        </div>
        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Show slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === current ? "w-8 bg-white" : "w-4 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
    </section>
  );
};

export default Hero;
