import React from "react";
import Slider from "react-slick";
import "./Carousel1.css";
import { useNavigate } from "react-router-dom";

interface EventCard {
  event: string;
  date?: string;
  location: string;
  description: string;
  about: string;
}

interface ReactSliderProps {
  events?: EventCard[];
  children?: React.ReactNode;
}

const ReactSlider: React.FC<ReactSliderProps> = ({ events, children }) => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 2000,
    autoplay: true,
    // centerMode: true,
    // centerPadding: "-20px",
    responsive: [
      {
        breakpoint: 1280, // large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile landscape
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // small mobiles
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
const getItems = (): (EventCard | React.ReactNode)[] => {
  return events ?? React.Children.toArray(children);
};

  return (
    <div className="primary-color-bg upcoming-pooja-container  py-10 mt-5">
      <Slider {...settings}>
        {getItems().map((event, idx) => {
          const {
            event: eventName,
            date,
            location,
            description,
            about,
          } = event as unknown as EventCard;
          return (
            <div key={idx} className={``}>
              <div className="upcoming-pooja-card-bg p-25 flex justify-center flex-col">
                <div>
                  <div className="flex justify-center rounded-[23px] shadow-custom">
                    <img src="/ram.png" className="w-full  rounded-[23px]" />
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <h3 className="font-bold text-base text-black">Event: {eventName}</h3>
                    <p className="text-sm text-black font-bold">{date}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-black font-bold">
                      Location: {location}
                    </p>
                  </div>
                  <p className="mt-4 p-2 border border-[#000000] rounded-[12px] text-black font-extralight italic text-[13px]">
                    {description}
                  </p>
                  <p className="mt-4 p-2 font-normal text-[12px] leading-[19px] text-black">{about}</p>
                  <div className="mt-4 text-center">
                    <button onClick={() => navigate(`/pooja/${idx+1}`)} className="bg-green shadow-green shadow-[0px_4px_4px_0px_#AC4200] rounded-[50px] font-bold text-[22px] cursor-pointer leading-[40px] text-center text-white px-10 h-[40px]">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ReactSlider;
