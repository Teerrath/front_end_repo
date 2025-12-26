import Marquee from "../../components/Marquee";
import YantraSadhna from "../../components/YantraSadhna";
import flower from "./images/flower.png";

import BgCard from "./images/carbg.png";

import YantraImg from "./images/yantra.png";

import SmallYantra from "./images/smallYantra.png";

import "./yanrasadhna.css";

export default function YantraSadhnaPage() {
  return (
    <div>
      <Marquee />
      <div className="flex items-center justify-center my-8 gap-10">
        <img src={flower} alt="flower" />
        <h4 className="devsadhna-heading color-E65800">Yantra Sadhna</h4>{" "}
        <img src={flower} alt="flower" />
      </div>
      <div className="mt-10 mb-15">
        <YantraSadhna heading={false} />
      </div>
      <Marquee />
      {/* <div style={{ backgroundImage: `url(${BgCard})` }}>default</div> */}
        <img src={BgCard} className="w-full" alt="card" />
      <div style={{ backgroundImage: `url(${BgCard})` }} className="yantrasadna-bg">
        <div>
          <div>
            <img src={YantraImg} alt="yantra Image" />
          </div>
          <div>
            <div>
              <img src={SmallYantra} alt="smallYantra" />
              <p className="shriyantra">Shri Yantra</p>
              <img src={SmallYantra} alt="smallYantra" />
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
