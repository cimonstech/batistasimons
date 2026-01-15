"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-card-dark shadow-2xl">
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`${alt} - Image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white transition-all hover:bg-white/20 active:scale-95"
            aria-label="Previous image"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white transition-all hover:bg-white/20 active:scale-95"
            aria-label="Next image"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

        </>
      )}
    </div>
  );
}
