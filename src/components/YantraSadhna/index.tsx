// import Carousel from "../Carousel";
import { useTranslation } from "react-i18next";
import YantraImage from "./yantra.png";
import "./YantraSadhna.css";

interface MantraSadhnaProps {
  heading?: boolean;
}

export default function YantraSadhna({ heading = true }: MantraSadhnaProps) {
  const { t } = useTranslation();
  return (
    <div className="relative">
      {heading && (
        <div className="flex content-center justify-center items-center gap-4 mt-2 mantra-sandhna-heading">
          <img src="kundli/flower.svg" alt="flower" />{" "}
          <p className="[color:var(--rust-red)] font-semibold text-[36px]">
            {" "}
            {t("Header_Yantra_Sadhna")}
          </p>
          <img src="kundli/flower.svg" alt="flower" />
        </div>
      )}
      <div className="mx-10  mantrasadhna-wrapper">
        <img className=" w-full" src="mantrasadhna/bg.svg" alt="" />
        <div className="">
          <div className="flex yantrasadhna-wraper">
            <div className="w-1/2">
              <h5 className="text-left text-black content-area-heading">
                {t("Subtitle_Yantra_Sadhna")}
              </h5>
              <p className="mt-5  content-area-para !text-left line-clamp-3">
                {t("Body_Yantra_Sadhna")}
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
