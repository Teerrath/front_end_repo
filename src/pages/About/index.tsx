import Marquee from "../../components/Marquee";

import Img from "./images/about.svg";
import Flower from "./images/flower.svg";

import "./About.css";

export default function About() {
  return (
    <div className="about-wrapper">
      <Marquee />
      <div className="">
        <img src={Img} alt="img" className="w-full" />
      </div>
      <div className="max-w-[80%] mx-auto">
        <div className="flex mt-20 justify-center gap-5 items-center">
          <img src={Flower} alt="flower" />
          <p className="font-bold text-[96px] underline text-[#E65800]">
            Our Journey
          </p>
          <img src={Flower} alt="flower" />
        </div>
        <div className="mt-20">
          <p className="font-extralight text-[36px] leading-[40px] text-black">
            Teerrath began with a simple idea — to create something meaningful
            and lasting. From humble beginnings to where we stand today, every
            step has been shaped by passion, perseverance, and a commitment to
            excellence.
            <br />
            <br />
            As we move forward, our vision continues to grow. We embrace new
            challenges, seek fresh opportunities, and remain dedicated to making
            a positive impact — one milestone at a time.
          </p>
        </div>
        <div className="flex mt-20 justify-center gap-5 items-center">
          <img src={Flower} alt="flower" />
          <p className="font-bold text-[96px] underline text-[#E65800]">FAQs</p>
          <img src={Flower} alt="flower" />
        </div>
        <div className="mt-20 mb-50 ">
          <div className="px-5 py-2 text-[#2C2C2C] font-semibold text-[32px] border-[3px] border-[#F8701B] rounded-[28px]">
            Q. How does this work?
          </div>
          <div className="p-5 border border-[#F8701B] bg-[#FFFFFF] font-inter font-normal text-[24px] text-[#000000] rounded-[26px] my-2">
            A: It’s simple. Once you visit Teerrath, you can explore our
            offerings, choose the option that best suits your needs, and follow
            the guided steps to get started. We’ve designed the process to be
            quick, clear, and user-friendly, so you can focus on what matters
            most.
          </div>
        </div>
      </div>
    </div>
  );
}
