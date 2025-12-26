import React, { useEffect, useState } from "react";
import './index.css'

interface CardDeckCarouselProps {
  children: React.ReactNode[];
  autoSlideInterval?: number;
  setKundliSlide: React.Dispatch<React.SetStateAction<number>>;
}

const CardDeckCarousel: React.FC<CardDeckCarouselProps> = ({
  children,
  autoSlideInterval = 8000,
  setKundliSlide,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = children.length;

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setKundliSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
      setKundliSlide((prev) => (prev + 1) % total);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlideInterval, total]);

  return (
    <>
      <div className="relative w-full max-w-[70vw] mx-auto min-h-[620px] overflow-visible mt-40">
        <img
          src="kundli/mandla.svg"
          className="top-image bg-mandla responsive-img"
          alt=""
        />
        <div className="relative h-full w-full  overflow-visible ">
          <div className="relative ">
            {children.map((child, index) => {
              const offset = index - currentIndex;

              // Wrap around
              const normalizedOffset =
                offset < -Math.floor(total / 2)
                  ? offset + total
                  : offset > Math.floor(total / 2)
                  ? offset - total
                  : offset;

              const absOffset = Math.abs(normalizedOffset);
              const isActive = index === currentIndex;

              // Responsive side peeking (smaller screens => smaller offset)
              const baseOffset =
                window.innerWidth < 640
                  ? 15
                  : window.innerWidth < 1024
                  ? 25
                  : 20;
              const translateX = normalizedOffset * baseOffset;

              const scale = isActive ? 1 : 1; // slight scaling
              const zIndex = 100 - absOffset;
              const opacity = absOffset > 3 ? 0 : 1;

     
              return (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="absolute transition-all duration-700 ease-in-out w-full cursor-pointer"
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    zIndex,
                    opacity,
                    // pointerEvents: isActive ? "auto" : "none",
                    pointerEvents: "auto",
                  }}
                >
                  {/* Responsive card size */}
                  <div className="relative w-full">
                    {/* LEFT EDGE TEXT */}
                    {!isActive && normalizedOffset < 0 && (
                      <div className="card-edge-text left-edge">
                        JOURNEY {index + 1}
                      </div>
                    )}

                    {/* RIGHT EDGE TEXT */}
                    {!isActive && normalizedOffset > 0 && (
                      <div className="card-edge-text right-edge">
                        JOURNEY {index + 1}
                      </div>
                    )}

                    {child}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <img
          src="kundli/mandla.svg"
          className="bottom-image bg-mandla responsive-img"
          alt=""
        />

        {/* Dot navigation */}
        {/* <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 ${
                currentIndex === index
                  ? "bg-red-500 border-red-500"
                  : "bg-transparent border-red-500"
              }`}
            />
          ))}
        </div> */}
      </div>
    </>
  );
};

export default CardDeckCarousel;
