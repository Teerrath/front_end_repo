import { useState } from "react";

import CardDeckCarousel from "../../components/CardDeckCarousel";
import Carousel from "../../components/Carousel";
import HoverItem from "../../components/HoverBox";
import Navbar from "../../components/NavBar";
import PujaForm from "../../components/PujaForm";
// import SlideInSection from "../../components/SlideSection";
import MantraSadhna from "../../components/MantraSadhna";
// import YantraSadhna from "../../components/YantraSadhna";
// import Carousel1 from "../../components/Carousel1";
import ReactSlider from "../../components/Carousel1";
import Reviews from "../../components/Reviews";
import Footer from "../../components/Footer";
import Marquee from "../../components/Marquee";
// import BookFlip from "../../components/Bookflip";

import "./Home.css";
import YantraSadhna from "../../components/YantraSadhna";
import DaanSadhna from "../../components/DaanSadhna";
import FullPageModal from "../../components/Modal";

import Star from "./images/star.svg";
import MalaImg from "./images/mala.png";

import ProductCard from "../Shoppe/ProductCard";
import { useTranslation } from "react-i18next";
import StepJourney from "../../components/StepJourney";
import Timeline from "../../components/Timeline/Timeline";
// import DaanSadhna from "../../components/DaanSadhna";

interface NavbarProps {
  isAuthenticated: boolean;
  onClick: () => void;
}

type EventType = {
  event: string;
  date?: string; // support old structure
  startDate?: string; // future ready
  endDate?: string;
  location: string;
  description: string;
  about: string;
};

const getEventDate = (event: EventType) =>
  new Date(event.startDate || event.endDate || event.date || "");

const isClosingSoon = (event: EventType) => {
  const eventDate = getEventDate(event);
  if (isNaN(eventDate.getTime())) return false;

  const diffDays = (eventDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24);

  return diffDays >= 0 && diffDays <= 3;
};

const isThisWeek = (event: EventType) => {
  const eventDate = getEventDate(event);
  if (isNaN(eventDate.getTime())) return false;

  const diffDays = (eventDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24);

  return diffDays >= 0 && diffDays <= 7;
};

export default function Home({ isAuthenticated, onClick }: NavbarProps) {
  const { t } = useTranslation();
  const images = [
    "/webp/1.webp",

    "/webp/2.webp",

    "/webp/3.webp",

    "/webp/4.webp",

    "/webp/5.webp",

    "/webp/6.webp",

    "/webp/7.webp",

    "/webp/8.webp",

    "/webp/9.webp",

    "/webp/10.webp",

    "/webp/11.webp",

    "/webp/12.webp",

    "/webp/13.webp",

    "/webp/14.webp",

    "/webp/15.webp",

    "/webp/16.webp",

    "/webp/17.webp",

    "/webp/18.webp",
  ];
  const events: EventType[] = [
    {
      event: "Ram Bhajan",
      date: "2025-12-22",
      location: "Kedarnath",
      description: "Freedom from Fear and Anxiety",
      about: "Lorem Ipsum is simply dummy text.",
    },
    {
      event: "Shrawan Somvaar",
      date: "2025-12-24",
      location: "Ujjain",
      description: "Spiritual growth and peace",
      about: "Lorem Ipsum is simply dummy text.",
    },
    {
      event: "Maha Rudra Yagya",
      date: "2025-12-28",
      location: "Haridwar",
      description: "Removal of obstacles",
      about: "Lorem Ipsum is simply dummy text.",
    },
    {
      event: "Navgraha Shanti",
      date: "2026-01-05",
      location: "Nashik",
      description: "Planetary balance and prosperity",
      about: "Lorem Ipsum is simply dummy text.",
    },
    {
      event: "Hanuman Chalisa Path",
      date: "2025-12-21",
      location: "Ayodhya",
      description: "Strength, courage and confidence",
      about: "Lorem Ipsum is simply dummy text.",
    },
    {
      event: "Sundarkand Path",
      date: "2025-12-23",
      location: "Varanasi",
      description: "Peace of mind and success",
      about: "Lorem Ipsum is simply dummy text.",
    },
    {
      event: "Satyanarayan Katha",
      date: "2025-12-26",
      location: "Mathura",
      description: "Harmony and prosperity",
      about: "Lorem Ipsum is simply dummy text.",
    },
    {
      event: "Maha Shivratri Sadhna",
      date: "2025-12-29",
      location: "Rishikesh",
      description: "Spiritual awakening",
      about: "Lorem Ipsum is simply dummy text.",
    },
    {
      event: "Guru Purnima Satsang",
      date: "2026-01-02",
      location: "Haridwar",
      description: "Guidance and blessings",
      about: "Lorem Ipsum is simply dummy text.",
    },
    {
      event: "Gayatri Mantra Jaap",
      date: "2026-01-04",
      location: "Pushkar",
      description: "Wisdom and clarity",
      about: "Lorem Ipsum is simply dummy text.",
    },
    {
      event: "Makar Sankranti Puja",
      date: "2026-01-14",
      location: "Prayagraj",
      description: "New beginnings and positivity",
      about: "Lorem Ipsum is simply dummy text.",
    },
    {
      event: "Kaal Bhairav Sadhna",
      date: "2025-12-27",
      location: "Ujjain",
      description: "Protection and fear removal",
      about: "Lorem Ipsum is simply dummy text.",
    },
    {
      event: "Durga Saptashati Path",
      date: "2026-01-08",
      location: "Kolkata",
      description: "Divine feminine energy",
      about: "Lorem Ipsum is simply dummy text.",
    },
    {
      event: "Lakshmi Puja",
      date: "2025-12-25",
      location: "Mumbai",
      description: "Wealth and abundance",
      about: "Lorem Ipsum is simply dummy text.",
    },
    {
      event: "Vishnu Sahasranama",
      date: "2026-01-06",
      location: "Tirupati",
      description: "Peace and protection",
      about: "Lorem Ipsum is simply dummy text.",
    },
    {
      event: "Surya Arghya Sadhna",
      date: "2026-01-01",
      location: "Gaya",
      description: "Health and vitality",
      about: "Lorem Ipsum is simply dummy text.",
    },
    {
      event: "Navratri Special Puja",
      date: "2026-01-10",
      location: "Ahmedabad",
      description: "Power and devotion",
      about: "Lorem Ipsum is simply dummy text.",
    },
    {
      event: "Pitru Dosh Nivaran",
      date: "2026-01-12",
      location: "Gaya",
      description: "Ancestral peace",
      about: "Lorem Ipsum is simply dummy text.",
    },
  ];

  const [filter, setFilter] = useState<"all" | "closing" | "week">("all");

  const filteredEvents = events.filter((event) => {
    if (filter === "closing") return isClosingSoon(event);
    if (filter === "week") return isThisWeek(event);
    return true;
  });

  const [currentKundliSlide, setKundliSlide] = useState(0);
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const openBox = () => setOpen(true);
  const closeBox = () => setIsBoxOpen(false);

  const products = [
    {
      id: 1,
      image: MalaImg,
      title: "Rudraksh Japa Mala",
      subtitle: "Divine 108 Beads Rudraksha",
      description:
        "Positive Vibes, Meditation, Mantra Japa Mala, Shiv Blessings",
      originalPrice: 300,
      discountedPrice: 220,
      discountPercentage: 20,
    },
    {
      id: 2,
      image: MalaImg,
      title: "Bracelet Mala",
      subtitle: "Healing Beads",
      description: "Energy, Meditation, Protection",
      originalPrice: 250,
      discountedPrice: 180,
      discountPercentage: 15,
    },
    {
      id: 3,
      image: MalaImg,
      title: "Bracelet Mala",
      subtitle: "Healing Beads",
      description: "Energy, Meditation, Protection",
      originalPrice: 250,
      discountedPrice: 180,
      discountPercentage: 15,
    },
    {
      id: 4,
      image: MalaImg,
      title: "Bracelet Mala",
      subtitle: "Healing Beads",
      description: "Energy, Meditation, Protection",
      originalPrice: 250,
      discountedPrice: 180,
      discountPercentage: 15,
    },
    {
      id: 5,
      image: MalaImg,
      title: "Bracelet Mala",
      subtitle: "Healing Beads",
      description: "Energy, Meditation, Protection",
      originalPrice: 250,
      discountedPrice: 180,
      discountPercentage: 15,
    },

    // add more products...
  ];
  const handleAddToCart = (title: string) => {
    alert(`${title} added to cart!`);
  };
  return (
    <>
      {console.log(isBoxOpen)}
      <Marquee />
      <Navbar isAuthenticated={isAuthenticated} onClick={onClick} />
      <Carousel images={images} height={"h-[690px]"} />

      {/* <StepJourney /> */}
      {/* <div className=""> */}
      {/* <SlideInSection direction="left"> */}
      <div className="w-full second-container  flex items-center ">
        <div className="bg-[#fffaee] w-[30%] h-[160px] px-10 py-4 flex items-center">
          <img src="/flower.svg" alt="flower" />
          <h2 className="font-bold text-4xl leading-[36px] text-[#98141E] ml-5">
            COME HOME TO DIVINE
          </h2>
        </div>
        <div className="bg-[#fff0cf] w-[70%] h-[200px]">
          <Carousel autoScrollInterval={5000} height={"h-full"}>
            <div className="flex justify-center items-center  h-full flex-col">
              <h2 className="font-medium text-2xl  text-center [color:var(--rust-red)]">
                Join Authentic Sevas <br /> On Visesh Tithis & Graha Gochara
              </h2>
              <button className="bg-red rounded-[25px] font-medium text-base text-center text-white px-8 py-1 mt-2 ">
                Live
              </button>
            </div>
            <div className="flex justify-center items-center  h-full flex-col">
              <h2 className="font-medium text-2xl  text-center [color:var(--rust-red)]">
                Join Authentic Sevas <br /> On Visesh Tithis & Graha Gochara
              </h2>
              <button className="bg-red rounded-[25px] font-medium text-base text-center text-white px-8 py-1 mt-2 ">
                Live
              </button>
            </div>
            <div className="flex justify-center items-center  h-full flex-col">
              <h2 className="font-medium text-2xl  text-center [color:var(--rust-red)]">
                Join Authentic Sevas <br /> On Visesh Tithis & Graha Gochara
              </h2>
              <button className="bg-red rounded-[25px] font-medium text-base text-center text-white px-8 py-1 mt-2 ">
                Live
              </button>
            </div>
          </Carousel>
        </div>
      </div>
            <Timeline />
      {/* </SlideInSection> */}
      <div className="bg-three-colors overflow-hidden w-full flex items-center justify-center">
        <div className="text-center my-1">
          <div className="flex items-center gap-5 py-1 font-sans [font-size:var(--font-size-20)] [font-weight:var(--font-weight-800)] [color:var(--font-color-white)]">
            <img className="w-[30px]" src="/marquee/om.svg" />
            <button
              onClick={openBox}
              type="button"
              className="bg-green [color:var(--font-color-white)] rounded-[50px] shadow-green font-bold text-xl text-center px-8 py-2 cursor-pointer download-kundli-btn"
            >
              Download Your Free Kundli
            </button>
            <img className="w-[30px]" src="/marquee/om.svg" />
          </div>
        </div>
      </div>
      <div className="bg-[#fffaee] mx-5 py-8 flex justify-between relative kundli-container">
        <HoverItem
          label={<img src="/kundli/1.svg" className="cursor-pointer" />}
          hoverContent={<p>This is content for label 1</p>}
        />
        <HoverItem
          label={<img src="/kundli/1.svg" className="cursor-pointer" />}
          hoverContent={<p>This is content for label 1</p>}
        />
        <HoverItem
          label={<img src="/kundli/1.svg" className="cursor-pointer" />}
          hoverContent={<p>This is content for label 1</p>}
        />
        <HoverItem
          label={<img src="/kundli/1.svg" className="cursor-pointer" />}
          hoverContent={<p>This is content for label 1</p>}
        />
        <HoverItem
          label={<img src="/kundli/1.svg" className="cursor-pointer" />}
          hoverContent={<p>This is content for label 1</p>}
        />
        <HoverItem
          label={<img src="/kundli/1.svg" className="cursor-pointer" />}
          hoverContent={<p>This is content for label 1</p>}
        />
        <HoverItem
          label={<img src="/kundli/1.svg" className="cursor-pointer" />}
          hoverContent={<p>This is content for label 1</p>}
        />
      </div>
      {/* Conditionally render the box */}
      {/* {isBoxOpen && (
        <div className=" mt-20">
          <PujaForm onClose={closeBox} />
        </div>
      )} */}
      {/* <BookFlip mode="loop" />  */}
      <CardDeckCarousel setKundliSlide={setKundliSlide}>
        {[1, 2, 3, 4, 5, 6].map((i, index) => (
          <div
            key={i}
            className={`${
              currentKundliSlide === index
                ? "bg-[#FFF0CF] border-[#F8701B] border"
                : "bg-[#D25000] border-white "
            }  h-[480px] rounded-[44px] border border-2  shadow-lg relative flex flex-col items-center justify-between p-4 text-center w-full`}
          >
            <div className="flex items-center gap-2 mt-2">
              <img src="kundli/flower.svg" alt="flower" />{" "}
              <p className="[color:var(--rust-red)] font-semibold text-xl sm:text-2xl md:text-3xl">
                {" "}
                Your Personalized Journey {i}{" "}
              </p>
              <img src="kundli/flower.svg" alt="flower" />
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <img
                src="kundli/kundlibg.svg"
                alt="kundlibg"
                className="w-full h-30"
              />
              <img
                src="kundli/kundlibg.svg"
                alt="kundlibg"
                className="w-full h-30"
              />
              <img
                src="kundli/kundlibg.svg"
                alt="kundlibg"
                className="w-full h-30"
              />
              <img
                src="kundli/kundlibg.svg"
                alt="kundlibg"
                className="w-full h-30"
              />
            </div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <img src="kundli/swastik.svg" alt="kundlibg" className="" />

              <button className="bg-green shadow-green text-white  font-bold text-1xl text-center  px-8 py-3 rounded-full cursor-pointer">
                Book Now
              </button>
              <img src="kundli/swastik.svg" alt="kundlibg" className="" />
            </div>
          </div>
        ))}
      </CardDeckCarousel>
      <div className="bg-three-colors overflow-hidden w-full flex items-center justify-center mt-5">
        <div className="text-center my-1">
          <div className="flex items-center gap-20 py-1 font-sans [font-size:var(--font-size-20)] [font-weight:var(--font-weight-800)] [color:var(--font-color-white)] poojas-conatiner  poojas-wrapper">
            <div className="flex gap-20 poojas-conatiner">
              <img className="w-[30px]" src="/marquee/om.svg" />
              <p className="font-extrabold text-[28px] text-white">
                {" "}
                Upcoming Poojas
              </p>
              <img className="w-[30px] om-img-sm" src="/marquee/om.svg" />
            </div>
            <div className="flex gap-20 poojas-conatiner poojas-btn-wrapper">
              <button
                onClick={() => setFilter("closing")}
                type="button"
                className="bg-white [color:var(--green)] rounded-[50px] shadow-white font-semibold text-[18px] text-center px-8 py-2 cursor-pointer min-w-[170px]"
              >
                Closing Soon
              </button>
              <button
                onClick={() => setFilter("week")}
                type="button"
                className="bg-white [color:var(--green)] rounded-[50px] shadow-white font-semibold text-[18px] text-center px-8 py-2 cursor-pointer min-w-[170px]"
              >
                This Week
              </button>
              <button
                onClick={() => setFilter("all")}
                type="button"
                className="bg-white [color:var(--green)] rounded-[50px] shadow-white font-semibold text-[18px] text-center px-8 py-2 cursor-pointer min-w-[170px]"
              >
                All
              </button>
            </div>
            <img className="w-[30px] om-img-lg" src="/marquee/om.svg" />
          </div>
        </div>
      </div>
      <ReactSlider events={filteredEvents} />
      <div className="flex content-center justify-center items-center gap-4 mt-15 mb-5 mantra-sandhna-heading">
        <img src="kundli/flower.svg" alt="flower" />{" "}
        <p className="[color:var(--rust-red)] font-semibold text-[36px]">
          {" "}
          {t("Header_Mantra_Sadhna")}
        </p>
        <img src="kundli/flower.svg" alt="flower" />
      </div>
      <Carousel autoScrollInterval={5000} height={"h-full"}>
        <div className="">
          <MantraSadhna heading={false} />
        </div>
        <div className="flex flex-col md:flex-row gap-4 p-5 lg:p-15 mt-4 ">
          {/* Left big card */}
          <div className="flex-1 bg-[#D9D9D9] rounded-xl relative min-h-[300px]">
            {/* Profile Image */}
          </div>

          {/* Right section */}
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            {/* Top row with two cards */}
            <div className="flex gap-2">
              <div className="flex-1 bg-[#D9D9D9] rounded-xl min-h-[150px]"></div>
              <div className="flex-1 bg-[#D9D9D9] rounded-xl min-h-[150px]"></div>
            </div>

            {/* Testimonial / Review card */}
            <div className="bg-[#FFF4E6] rounded-xl p-4 shadow h-full">
              <div className="flex items-center gap-8 pt-4">
                <div className="w-15 h-13 bg-gray-300 rounded-full"></div>
                {/* Stars + Title */}
                <div>
                  <div className="flex items-center gap-1 mb-2 text-black text-sm">
                    <span>
                      <img src={Star} alt="star" />
                    </span>
                    <span>
                      <img src={Star} alt="star" />
                    </span>
                    <span>
                      <img src={Star} alt="star" />
                    </span>
                    <span>
                      <img src={Star} alt="star" />
                    </span>
                    <span>
                      <img src={Star} alt="star" />
                    </span>
                    <span className="ml-1 font-semibold">"Miraculous"</span>
                  </div>

                  {/* Content */}

                  <div className="flex items-start gap-3">
                    <p className="text-sm text-gray-700">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div className="text-xs text-gray-500 mt-2 text-right">
                Dated on 11.01.2023
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap gap-10">
          <ProductCard
            {...products[0]}
            badge="Top Seller"
            isLarge
            onAddToCart={() => handleAddToCart(products[0].title)}
          />
          <ProductCard
            {...products[0]}
            badge="Most Valued"
            isLarge
            onAddToCart={() => handleAddToCart(products[0].title)}
          />
        </div>
      </Carousel>
      <div className="mt-20">
        {" "}
        <YantraSadhna />{" "}
      </div>
      <div className="mt-20">
        {" "}
        <DaanSadhna />{" "}
      </div>
      <Reviews />
      <Footer />

      {/* <SlideInSection direction="right">
          <div className=" mx-auto p-8 bg-gray-300 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Slide In From Right</h2>
            <p>This section slides in from right when it enters viewport.</p>
          </div>
        </SlideInSection> */}

      {/* <SlideInSection direction="top">
          <div className=" mx-auto p-8 bg-gray-400 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Slide In From Top</h2>
            <p>This section slides in from top when it enters viewport.</p>
          </div>
        </SlideInSection> */}

      {/* <SlideInSection direction="bottom">
          <div className=" mx-auto p-8 bg-gray-500 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Slide In From Bottom</h2>
            <p>This section slides in from bottom when it enters viewport.</p>
          </div>
        </SlideInSection> */}
      {/* </div> */}
      <FullPageModal isOpen={open} onClose={() => setOpen(false)} title="">
        <div className=" mt-20">
          <PujaForm onClose={closeBox} />
        </div>
      </FullPageModal>
    </>
  );
}
