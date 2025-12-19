"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "./slider.css";

// import "swiper/css";
// import "swiper/css/effect-coverflow";

import GiftImages from "./images/gift.png";
import WhiteFlower from "./images/whiteflower.png";
import Mata from "./images/mata.png";
import AudioPlayer, { type AudioPlayerHandle } from "./AudioPlayer";

import Share from "./images/share.png";

import Audiofile from "./1.mp3";
import { useRef, useState } from "react";

export default function MantraSlider() {
  const audioPlayerRef = useRef<AudioPlayerHandle>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    audioPlayerRef.current?.play();
    setIsPlaying(!isPlaying)
  };

  // const handlePause = () => {
  //   audioPlayerRef.current?.pause();
  //   setIsPlaying(!isPlaying)
  // };

  const cards = [
    { id: 1, title: "Gayatri Mantra 1" },
    { id: 2, title: "Maha Mrityunjaya Mantra 2" },
    { id: 3, title: "Saraswati Mantra 3" },
    { id: 4, title: "Saraswati Mantra 4" },
    { id: 5, title: "Saraswati Mantra 5" },
    { id: 6, title: "Saraswati Mantra 6" },
  ];

  return (
    <div className="w-full flex justify-center py-10 bg-white">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2.2} // ⭐ gives gap & shows part of side slides
        spaceBetween={100} // ⭐ spacing between slides
        loop={false}
        autoplay={{
          delay: 2000, // ⭐ auto-scroll
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-[90%]"
      >
        {cards.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative slider-main-area  py-10 px-10 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="gift-wrappper flex items-center justify-center">
                  <img src={GiftImages} alt="gift" />
                </div>
                <div className="flex items-center gap-1">
                  <div>
                    <img src={WhiteFlower} alt="flower" />
                  </div>
                  <div>
                    <p className="gift-text">Sanchay</p>
                    <p className="gift-text-line my-1"></p>
                    <p className="gift-text">000</p>
                  </div>
                </div>
              </div>
              <div className="mantra-area mt-5">
                <div className="flex pl-20 py-10">
                  <img src={Mata} alt="" className="w-[60px] h-[60px]" />
                  <div className="w-full">
                    <div>
                      <h4 className="mantrasadhna-event-heading">
                        Gayatri Mantra
                      </h4>

                      <div className="ml-1">
                        <p className="mantras">Gayatri Mantra</p>
                        <p className="mantras">Gayatri Mantra</p>
                        <p className="mantras">Gayatri Mantra</p>
                      </div>
                    </div>
                    <AudioPlayer Audiofile={Audiofile} ref={audioPlayerRef} />
                  </div>
                </div>
              </div>
              <div className="mantrasadhna-info pt-10 pb-20 px-10 mt-10">
                <h4 className="mantras-heading ">Gayatri Mantra</h4>
                <p className="mt-4">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="mt-10 flex items-center justify-between">
                <div className="gift-wrappper flex items-center justify-center">
                  <img src={Share} alt="Share" />
                </div>
                <div className="text-center">
                  <button
                    onClick={handlePlay}
                    className="
                    w-[200px]
        flex items-center gap-4
        bg-[#236029]     /* green background */
        text-white
        p-1
        rounded-full
        shadow-[0_4px_12px_rgba(0,0,0,0.3)]
        transition-all duration-200
        active:scale-95
      "
                  >
                    {/* White Circle */}
                    <div
                      className="
          w-14 h-14
          bg-white
          rounded-full
          flex items-center justify-center
          shadow-md
        "
                    >
                      {/* Icon */}
                      {isPlaying ? (
                        /* Pause icon */
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 24 24"
                          fill="#236029"
                        >
                          <rect x="5" y="4" width="5" height="16" rx="1" />
                          <rect x="14" y="4" width="5" height="16" rx="1" />
                        </svg>
                      ) : (
                        /* Play icon */
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                          fill="#236029"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </div>

                    {/* Text */}
                    <span className="text-2xl font-semibold">
                      {isPlaying ? "Pause" : "Play"}
                    </span>
                  </button>
                  {/* <button
                    onClick={handlePlay}
                    className="bg-green-500 text-white px-4 py-2 mt-4"
                  >
                    Play
                  </button>

                  <button
                    onClick={handlePause}
                    className="bg-red-500 text-white px-4 py-2 mt-4 ml-2"
                  >
                    Pause
                  </button> */}
                </div>
                <div className="gift-wrappper flex items-center justify-center">
                  000
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
