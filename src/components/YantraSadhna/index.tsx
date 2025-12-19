// import Carousel from "../Carousel";
import YantraImage from "./yantra.png";
import "./YantraSadhna.css";

export default function YantraSadhna() {
  return (
    <div className="relative">
      <div className="flex content-center justify-center items-center gap-4 mt-2 mantra-sandhna-heading">
        <img src="kundli/flower.svg" alt="flower" />{" "}
        <p className="[color:var(--rust-red)] font-semibold text-[36px]">
          {" "}
          Yantra Sadhna{" "}
        </p>
        <img src="kundli/flower.svg" alt="flower" />
      </div>
      <div className="mx-10  mantrasadhna-wrapper">
        <img className=" w-full" src="mantrasadhna/bg.svg" alt="" />
        <div className="">
          <div className="flex yantrasadhna-wraper">
            <div className="w-1/2">
              <h5 className="text-left text-black content-area-heading">
                Lorem Ipsum is simply dummy <br />
                text of the printing and typesetting
                <br />
                industry.
              </h5>
              <p className="mt-5  content-area-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="text-left content-area-btn-wrapper mr-15 mt-5">
                <button className="content-area-btn ">
                  Start my Mantra Journey
                </button>
              </div>
            </div>
            <div className="w-1/2">
              <div className="yantra-main-image">
                <img src={YantraImage} alt="Yantra" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
