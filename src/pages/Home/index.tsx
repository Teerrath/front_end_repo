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

// import DaanSadhna from "../../components/DaanSadhna";

interface NavbarProps {
  isAuthenticated: boolean;
  onClick: () => void;
}
export default function Home({ isAuthenticated, onClick }: NavbarProps) {
  const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/1.jpg", "/2.jpg", "/3.jpg"];
  const events = [
    {
      event: "Ram Bhajan",
      date: "xx xx xxxx",
      location: "Kedarnath",
      description:
        "Freedom from Fear, Disease and Grief, Relief from Depression and Anxiety, Economic",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      event: "Shrawan Somvaar",
      date: "xx xx xxxx",
      location: "Kedarnath",
      description:
        "Freedom from Fear, Disease and Grief, Relief from Depression and Anxiety, Economic",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      event: "Shrawan Somvaar",
      date: "xx xx xxxx",
      location: "Kedarnath",
      description:
        "Freedom from Fear, Disease and Grief, Relief from Depression and Anxiety, Economic",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      event: "Shrawan Somvaar",
      date: "xx xx xxxx",
      location: "Kedarnath",
      description:
        "Freedom from Fear, Disease and Grief, Relief from Depression and Anxiety, Economic",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      event: "Shrawan Somvaar",
      date: "xx xx xxxx",
      location: "Kedarnath",
      description:
        "Freedom from Fear, Disease and Grief, Relief from Depression and Anxiety, Economic",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },

    // Add more events as needed
  ];
  const [currentKundliSlide, setKundliSlide] = useState(0);
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const openBox = () => setOpen(true);
  const closeBox = () => setIsBoxOpen(false);

  return (
    <>
      <Marquee />
      <Navbar isAuthenticated={isAuthenticated} onClick={onClick} />
      <Carousel images={images} height={"h-[690px]"} />
      {/* <StepJourney /> */}
      {/* <div className=""> */}
      {/* <SlideInSection direction="left"> */}
      <div className="w-full second-container  flex items-center ">
        <div className="bg-[#fffaee] w-[30%] h-[200px] px-10 py-4 flex items-center">
          <img src="/flower.svg" alt="flower" />
          <h2 className="font-bold text-4xl leading-[43px] text-[#98141E] ml-5">
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
                Your Personalized Journey{" "}
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
                onClick={openBox}
                type="button"
                className="bg-white [color:var(--green)] rounded-[50px] shadow-white font-semibold text-[18px] text-center px-8 py-2 cursor-pointer min-w-[170px]"
              >
                Closing Soon
              </button>
              <button
                onClick={openBox}
                type="button"
                className="bg-white [color:var(--green)] rounded-[50px] shadow-white font-semibold text-[18px] text-center px-8 py-2 cursor-pointer min-w-[170px]"
              >
                This Week
              </button>
              <button
                onClick={openBox}
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
      <ReactSlider events={events} />
      <div className="mt-10">
        <MantraSadhna />
      </div>
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
      <FullPageModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title=""
      >
        <div className=" mt-20">
          <PujaForm onClose={closeBox} />
        </div>
      </FullPageModal>
    </>
  );
}
