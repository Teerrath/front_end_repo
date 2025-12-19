import Marquee from "../../components/Marquee";
import flower from "./images/flower.png";
import BgWrap from "./images/bgwrap.png";
import Ram from "./images/ram.png";
import Swastik from "./images/swast.png";
// import Mandla from "./images/mandla.png";

import Roll1 from "./images/1.png";
import Roll2 from "./images/2.png";
import RamPic from "./images/4.png";
import "./DevSadhna.css";

export default function DevSadhna() {
  return (
    <div>
      <Marquee />
      <div className="flex items-center justify-center my-8 gap-10">
        <img src={flower} alt="flower" />
        <h4 className="devsadhna-heading">Deva Sadhna</h4>{" "}
        <img src={flower} alt="flower" />
      </div>

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
      </div>
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
                // onClick={openBox}
                type="button"
                className="bg-white [color:var(--green)] rounded-[50px] shadow-white font-semibold text-[18px] text-center px-8 py-2 cursor-pointer min-w-[170px]"
              >
                Closing Soon
              </button>
              <button
                // onClick={openBox}
                type="button"
                className="bg-white [color:var(--green)] rounded-[50px] shadow-white font-semibold text-[18px] text-center px-8 py-2 cursor-pointer min-w-[170px]"
              >
                This Week
              </button>
              <button
                // onClick={openBox}
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
      <div className="devsadhna-poojas-section devsadhna-bg-2">
        <div>
          <img src={Roll1} alt="" />
        </div>
        {/* <div className="devsadhna-poojas-section-1 ">&nbsp;</div> */}
        <div className="devsadhna-poojas-container flex justify-center items-center flex-wrap gap-5 py-10">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="devsadhna-pooja-container flex justify-center items-center ">
              <div className="flex justify-center items-center pt-12 pb-3 flex-col ">
                <div className="w-[75%] ">
                  <img src={RamPic} alt="ram" />
                </div>
                <div>
                  <h4 className="devsadhna-pooja-heading">
                    Event: Shrawan Somvaar{" "}
                  </h4>
                  <div className="devsadhna-pooja-subheading flex justify-between mt-2">
                    <h5>Location: Kedarnath</h5>{" "}
                    <h5 className="ml-20">xx-xx-xxxx</h5>
                  </div>
                </div>
                <div className="devsadhna-pooja-tag mx-5 mt-4">
                  Freedom from Fear, Disease and Grief, Relief from Depression
                  and Anxiety, Economic
                </div>
                <p className="px-15 mt-2 devsadhna-pooja-para mr-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                  <br /> Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                {/* <div className="flex mb-2 items-center justify-center gap-2">
                  <img src={Swastik} alt="Swastik" />
                  <button type="button" className="devsadhna-button">
                    Book Now
                  </button>
                  <img src={Swastik} alt="Swastik" />
                </div> */}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="devsadhna-poojas-section-2 "></div> */}
        <img src={Roll2} alt="" />
      </div>
    </div>
  );
}
