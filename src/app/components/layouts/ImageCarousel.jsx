'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import CarouselControls from '../fragments/CarouselControls';

const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Function to handle next slide
  const goToNextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  // Function to handle manual slide change
  const goToSlide = (index) => {
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    setActiveIndex(index);
    
    // Resume auto-play after 10 seconds of inactivity
    const timer = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
    
    return () => clearTimeout(timer);
  };

  // Auto-play effect
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(goToNextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNextSlide]);

  return (
    <div className="relative w-full h-full">
      {/* Current Image */}
      <div className="relative max-w-[634px] h-[494px]">
        <Image
          src={images[activeIndex]}
          alt={`Carousel image ${activeIndex + 1}`}
          fill
          className="object-cover rounded-[40px] rounded-br-[100px]"
          priority
        />
        
        {/* Dots Navigation */}
        <CarouselControls 
          count={images.length} 
          activeIndex={activeIndex} 
          setActiveIndex={goToSlide}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;