import DaanSadhna from "../../components/DaanSadhna";
import Marquee from "../../components/Marquee";

import BgImg from "./images/sevacard.png";
import Flower from "./images/flower.png";

import "./index.css";

export default function DaanSadhnaPage() {
  return (
    <div>
      <Marquee />
      <DaanSadhna />
      <Marquee />

      <div>
        <div className="daanseva-container gap-5 flex my-20 mx-20 ">
          <div className="w-[30%] pooja-image-container">dw</div>

          <div className="seva-area-description w-[70%] px-20 py-20">
            <div className="flex content-center justify-center items-center gap-6 mt-2 mantra-sandhna-heading">
              <img src={Flower} alt="flower" />{" "}
              <p className="text-[#F8701B] font-bold text-3xl leading-none">
                {" "}
                Gau Seva
              </p>
              <img src={Flower} alt="flower" />
            </div>
            <div className="">
              <img src={BgImg} alt="bg img" className="mx-auto" />
            </div>
            <p className="daanseva-info mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="daanseva-container gap-5 flex-row-reverse flex my-20 mx-20">
          <div className="w-[30%] pooja-image-container">dw</div>

          <div className="seva-area-description w-[70%] px-20 py-20">
            <div className="flex content-center justify-center items-center gap-6 mt-2 mantra-sandhna-heading">
              <img src={Flower} alt="flower" />{" "}
              <p className="text-[#F8701B] font-bold text-3xl leading-none">
                {" "}
                Gau Seva
              </p>
              <img src={Flower} alt="flower" />
            </div>
            <div className="">
              <img src={BgImg} alt="bg img" className="mx-auto" />
            </div>
            <p className="daanseva-info mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
