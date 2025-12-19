import React, { useEffect, useRef, useState } from "react";
import "./BookFlip.css";

type Mode = "single" | "loop" | "click";

interface BookFlipProps {
  mode?: Mode;
  autoOpenDelay?: number; 
  loopInterval?: number; 
}

const pagesContent = [
  { title: "TEERRATH", subtitle: "A Divine Home", body: "Welcome to Teerrath — come home to the divine.", image: "flower.svg", bg: "cover" },
  { title: "Our Mission", subtitle: "Preserve & Serve", body: "Reconnect people with tradition and spiritual calm.", image: "flower.svg", bg: "paper" },
  { title: "About", subtitle: "A little history", body: "Inspired by ancient temples, crafted with love.", image: "flower.svg", bg: "paper" },
  { title: "Offerings", subtitle: "Services", body: "Vedic Seva, Mantra Sadhna, Personalized services & community space.", image: "flower.svg", bg: "paper" },
  { title: "Login", subtitle: "Welcome Home", body: "", image: "flower.svg", bg: "paper" },
];

const BookFlip: React.FC<BookFlipProps> = ({ mode = "single", autoOpenDelay = 900, loopInterval = 1800 }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const loopRef = useRef<number | null>(null);
  const paperAudioRef = useRef<HTMLAudioElement | null>(null);
  const chimeAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (loopRef.current) {
      clearInterval(loopRef.current);
      loopRef.current = null;
    }

    if (mode === "single") {
      setTimeout(() => {
        setIsOpen(true);
        pagesContent.forEach((_, idx) => {
          setTimeout(() => {
            setCurrentPage(idx + 1 <= pagesContent.length - 1 ? idx + 1 : pagesContent.length - 1);
            playFlipSound();
          }, autoOpenDelay + idx * 300);
        });
      }, 300);
    } else if (mode === "loop") {
      let forward = true;
      loopRef.current = window.setInterval(() => {
        setCurrentPage((prev) => {
          let next = prev + (forward ? 1 : -1);
          if (next >= pagesContent.length - 1) forward = false;
          if (next <= 0) forward = true;
          playFlipSound();
          return next;
        });
      }, loopInterval);
    } else {
      setIsOpen(false);
      setCurrentPage(0);
    }

    return () => {
      if (loopRef.current) clearInterval(loopRef.current);
    };
  }, [mode]);

  const playFlipSound = () => {
    try {
      if (paperAudioRef.current) { paperAudioRef.current.currentTime = 0; paperAudioRef.current.volume = 0.8; paperAudioRef.current.play(); }
      if (chimeAudioRef.current) setTimeout(() => { if (chimeAudioRef.current) { chimeAudioRef.current.currentTime = 0; chimeAudioRef.current.volume = 0.45; chimeAudioRef.current.play(); } }, 110);
    } catch {}
  };

  const handleNext = () => { setIsOpen(true); setCurrentPage((p) => Math.min(p + 1, pagesContent.length - 1)); playFlipSound(); };
  const handlePrev = () => { setCurrentPage((p) => Math.max(p - 1, 0)); if (currentPage === 1) setIsOpen(false); playFlipSound(); };
  const handleCoverClick = () => { if (mode === "click") { if (!isOpen) { setIsOpen(true); playFlipSound(); } else handleNext(); } };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f97316] p-4">
      <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] bg-center bg-no-repeat bg-cover opacity-10 pointer-events-none"></div>
      <audio ref={paperAudioRef} src="/assets/paper-whoosh.mp3" preload="auto" />
      <audio ref={chimeAudioRef} src="/assets/mystic-chime.mp3" preload="auto" />

      <div className="w-full max-w-[980px] flex flex-col items-center gap-6">
        <div className="w-full flex items-center justify-between text-white">
          <div className="text-sm sm:text-base font-semibold">Mode: {mode}</div>
          <div className="space-x-2">
            <button onClick={playFlipSound} className="bg-white/10 px-3 py-1 rounded-md text-white text-sm">Play sound</button>
          </div>
        </div>

        <div className="book-scene relative" style={{ perspective: 1600 }}>
          <div className={`book-left absolute left-0 top-0 bottom-0 transform-origin-left ${isOpen ? "left-open" : ""}`} onClick={handleCoverClick} role="button" tabIndex={0}>
            <div className="cover-inner flex flex-col items-center justify-center h-full p-6 text-center">
              <h2 className="text-white font-extrabold text-2xl sm:text-3xl leading-tight">TEERRATH</h2>
              <p className="text-white text-sm sm:text-base mt-1">Divine Home</p>
            </div>
          </div>

          <div className="book-right absolute right-0 top-0 bottom-0 w-[60%] sm:w-[54%] md:w-[50%]">
            <div className="book-backdrop absolute inset-0 rounded-md shadow-lg"></div>

            {pagesContent.map((pg, idx) => {
              const flipped = currentPage > idx;
              const z = 100 + (pagesContent.length - idx);
              return (
                <div key={idx} className={`page absolute top-0 bottom-0 right-0 w-full transform-origin-right ${flipped ? "flipped" : ""}`} style={{ zIndex: z }}>
                  <div className={`page-inner h-full p-6 md:p-8 flex flex-col justify-between ${pg.bg === "cover" ? "page-cover" : "page-paper"}`}>
                    <div className="pt-2">
                      <img src={pg.image} alt="" className="w-12 sm:w-16 mx-auto mb-2" />
                      <h3 className="text-[#c74d20] font-bold text-lg sm:text-xl">{pg.title}</h3>
                      <p className="text-sm sm:text-base text-gray-700 mt-2">{pg.subtitle}</p>
                    </div>
                    <div className="mb-4">
                      {idx < pagesContent.length - 1 ? <p className="text-sm sm:text-base text-gray-800 leading-relaxed">{pg.body}</p> : (
                        <form className="w-full flex flex-col items-center gap-3">
                          <input className="w-11/12 sm:w-10/12 border border-[#c74d20] rounded-lg py-2 px-3 text-[#c74d20] placeholder-[#b45a3b] bg-white" placeholder="Phone number" type="tel" />
                          <input className="w-11/12 sm:w-10/12 border border-[#c74d20] rounded-lg py-2 px-3 text-[#c74d20] placeholder-[#b45a3b] bg-white" placeholder="Email" type="email" />
                          <button type="button" className="mt-2 bg-[#16a34a] text-white rounded-full px-8 py-2">Login</button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full flex items-center justify-center gap-4">
          <button onClick={handlePrev} className="px-4 py-2 bg-white/10 text-white rounded-md">Prev</button>
          <button onClick={handleNext} className="px-4 py-2 bg-white text-[#a23d1e] font-semibold rounded-md">Next</button>
        </div>
        <div className="text-white/85 text-sm">Page {currentPage + 1} / {pagesContent.length}</div>
      </div>
    </div>
  );
};

export default BookFlip;
