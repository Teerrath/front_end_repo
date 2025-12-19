import Marquee from "../../components/Marquee";
import Mata from "./images/mata.png";
import "./MantraSadhna.css";
import MantraSlider from "./slider.tsx";
import flower from "./images/flower.png";
import BgWrap from "./images/bgwrap.png";
import Ram from "./images/ram.png";
import Swastik from "./images/swast.png";

export default function MantraSadhna() {
  return (
    <div>
      <Marquee />
      <div className="flex items-center justify-center my-8 gap-10">
        <img src={flower} alt="flower" />
        <h4 className="devsadhna-heading color-E65800">Mantra Sadhna</h4>{" "}
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
      <Marquee />
      <div className="mantrasadhna-event-container p-15">
        <div className="flex flex-wrap items-center gap-2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="mantrasadhna-event flex items-center px-15 py-4 my-2">
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
    </div>
  );
}
