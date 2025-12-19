import React from "react";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";

interface CarouselProps {
  images?: string[]; // Optional images prop
  children?: ReactNode; // Optional children prop for more flexible content
  autoScrollInterval?: number; // Optional custom auto-scroll interval
  height?: string;
}

export default function Carousel({
  images,
  children,
  autoScrollInterval = 3000,
  height = "",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every specified interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === getItems().length - 1 ? 0 : prev + 1
      );
    }, autoScrollInterval);
    return () => clearInterval(interval);
  }, [autoScrollInterval]);

  // Get the list of items (either images or children)
  const getItems = () => {
    return images || React.Children.toArray(children);
  };

  return (
    <div className={`w-full overflow-hidden relative ${height}`}>
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {getItems().map((item, idx) => (
          <div key={idx} className="flex-shrink-0 w-full h-full">
            {/* If item is an image (string), render an <img> tag */}
            {typeof item === "string" ? (
              <img
                src={item}
                alt={`Slide ${idx}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full">{item}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
