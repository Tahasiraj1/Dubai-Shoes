"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface CarouselImage {
  src: string;
  alt: string;
}

interface HeroCarouselProps {
  images: CarouselImage[];
  autoPlayInterval?: number;
  showControls?: boolean;
}

export default function HeroCarousel({
  images,
  autoPlayInterval = 5000,
  showControls = true,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [goToNext, autoPlayInterval, isAutoPlaying]);

  // Pause auto-play when user interacts with carousel
  const handleInteraction = () => {
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div
      className="relative min-h-[90vh] w-full overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Carousel slides */}
      <div className="h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute h-full w-full transition-opacity duration-1000 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="90vw"
              style={{ objectFit: "cover" }}
            />
            {/* Hero Section Content */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-start justify-center text-start w-full space-y-8 pl-2 md:pl-20">
              <div className="container mx-auto px-4 z-10 py-16">
                <div className="max-w-2xl animate-slideIn">
                  <h5 className="text-white font-medium mb-2">
                    Handcrafted Excellence
                  </h5>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
                    Pakistani Craftsmanship Meets Modern Design
                  </h1>
                  <p className="text-lg text-white/80 mb-8 max-w-lg">
                    Discover premium footwear that combines traditional
                    Pakistani artistry with contemporary style for the perfect
                    blend of comfort and elegance.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      size="lg"
                      className="bg-blue-950 hover:bg-blue-800"
                    >
                      <Link
                        href="/collection"
                        className="flex items-center"
                      >
                        Explore Now
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation controls */}
      {showControls && (
        <>
          <button
            onClick={() => {
              goToPrevious()
              handleInteraction()
            }}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/50"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => {
              goToNext()
              handleInteraction()
            }}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/50"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              handleInteraction();
            }}
            className={`h-2 w-8 rounded-full transition-all ${
              index === currentIndex ? "bg-black" : "bg-gray-800"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
