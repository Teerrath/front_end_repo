import Marquee from "../../components/Marquee";
import Mata from "./images/mata.png";
import "./MantraSadhna.css";
import MantraSlider from "./slider.tsx";
import flower from "./images/flower.png";
import Lotus from "./images/lotus.png";
import Star from "./images/star.svg";
// import BgWrap from "./images/bgwrap.png";
// import Ram from "./images/ram.png";
// import Swastik from "./images/swast.png";

import MantraSadhna from "../../components/MantraSadhna/index.tsx";
import Modal from "../../components/SmallModal/index.tsx";
import { useState } from "react";

export default function MantraSadhnaPage() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Marquee />
      <div className="flex items-center justify-center my-8 gap-10">
        <img src={flower} alt="flower" />
        <h4 className="devsadhna-heading color-E65800">Mantra Sadhna</h4>{" "}
        <img src={flower} alt="flower" />
      </div>
      {/* 
      <div className="relative devsadhna-bg w-full h-screen bg-cover bg-center bg-no-repeat">
        <img src={BgWrap} alt="bg" className="absolute -z-10 w-full" />
        <div className="max-w-[70%] mx-auto flex items-center h-full gap-10">
          <img src={Ram} alt="" className="ml-4" />
          <div className="">
            <h3 className="devsadhna-heading">
              Lorem Ipsum is simply dummy
              <br /> text of the printing and typesetting
              <br />
              industry. 
            </h3>
            <p className="devsadhna-heading-para mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="flex mt-10 items-center justify-center gap-5">
              <img src={Swastik} alt="Swastik" />
              <button type="button" className="devsadhna-button">
                Start my Mantra Journey
              </button>
              <img src={Swastik} alt="Swastik" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="mt-10 mb-15">
        <MantraSadhna heading={false} />
      </div>
      <Marquee />
      <div className="mantrasadhna-event-container p-15">
        <div className="flex flex-wrap items-center gap-2">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              onClick={() => setOpen(true)}
              className="mantrasadhna-event flex items-center px-15 py-4 my-2 cursor-pointer"
            >
              <img src={Mata} alt="" className="w-[60px] h-[60px]" />
              <div>
                <h4 className="mantrasadhna-event-heading">
                  Event: Shrawan Somvaar{" "}
                </h4>
                <div className="mantrasadhna-event-heading flex">
                  <div>
                    <h5>Location: Kedarnath </h5>
                    <p className="mantrasadhna-event-benifit">
                      Booking closes in 3 days
                    </p>
                  </div>
                  <div className="ml-1">
                    <p className="mantrasadhna-event-benifit">Benefit 1</p>
                    <p className="mantrasadhna-event-benifit">Benefit 2</p>
                    <p className="mantrasadhna-event-benifit">Benefit 3</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MantraSlider />

      <Modal open={open} onClose={() => setOpen(false)} title="My Modal">
        <div className="flex justify-center items-center gap-5 ">
          <img src={Lotus} alt="Lotus" className="w-[40px]" />
          <h5 className="small-modal-heading">About the ‘Mantra’</h5>{" "}
          <img src={Lotus} alt="Lotus" className="w-[40px]" />
        </div>
        <div>
          <p className="header-text text-center mt-4">Gayatri Mantra</p>
        </div>
        <div className="mt-2 popup-text ">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <br />
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="bg-[#FFF4E6] border border-[#E65800] rounded-xl p-4 shadow h-full mt-2 reviews-box-shadow">
          <div className="flex items-center gap-8 pt-4">
            <div className="w-[120px] h-[65px] bg-[#FF8383] rounded-full"></div>
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
        <div className="mt-4 text-center">
          <button className="bg-green   rounded-[50px] font-bold text-[18px] cursor-pointer leading-[40px] text-center text-white px-5 h-[46px]">
            Unlock Now
          </button>
        </div>
      </Modal>
    </div>
  );
}
