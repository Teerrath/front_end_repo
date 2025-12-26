import "./index.css";
import Rishi from "./rishi.png";
import Circle from "./circle.png";
import { useTranslation } from "react-i18next";
// export default function DaanSadhna() {
//   return (
//     <div className="mantrasadhna-bg">
//       <div className="max-w-[80%] mx-auto">
//         <div className="flex content-center justify-center items-center gap-4 mt-2">
//           <img src="kundli/flower.svg" alt="flower" />{" "}
//           <p className="[color:var(--rust-red)] font-semibold text-[36px]">
//             {" "}
//             Daan Sadhna{" "}
//           </p>
//           <img src="kundli/flower.svg" alt="flower" />
//         </div>
//         <div className="flex mt-60">
//           <div>
//             <h5 className="font-bold text-[36px] text-right text-black">
//               Lorem Ipsum is simply dummy <br />
//               text of the printing and typesetting
//               <br />
//               industry.
//             </h5>
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book.
//             </p>
//             <button>Start my Mantra Journey</button>
//           </div>
//           <div className=" ml-30">
//             <img
//               src={Circle}
//               alt="ram"
//               className="ram-bg  w-[420px]"
//             />
//             <img
//               src={Rishi}
//               alt="hanuman"
//               className="max-w-[620px] h-img"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import "./MantraSadhna.css";
export default function DaanSadhna() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="relative DaanSadhna-wraper">
        <div className="flex content-center justify-center items-center gap-4 mt-2 mantra-sandhna-heading">
          <img src="kundli/flower.svg" alt="flower" />{" "}
          <p className="[color:var(--rust-red)] font-semibold text-[36px]">
            {" "}
            {t("Header_Daan_Sadhna")}
          </p>
          <img src="kundli/flower.svg" alt="flower" />
        </div>
        <div className="mx-10 mantrasadhna-wrapper">
          <img className=" w-full" src="mantrasadhna/bg.svg" alt="" />
          <div className="content-area">
            <div className="flex ">
              <div>
                <h5 className="text-left text-black content-area-heading">
                  {t("Subtitle_Daan_Sadhna")}
                </h5>
                <p className="mt-5  content-area-para !text-left line-clamp-3">
                  {t("Body_Daan_Sadhna")}
                </p>
                <div className="text-left content-area-btn-wrapper mr-15 mt-5">
                  <button className="content-area-btn">
                    Start my Mantra Journey
                  </button>
                </div>
              </div>
              <div className="mantrasadhna-inner-images">
                <img src={Circle} alt="ram" className="ram-bg  w-[480px]" />
                <img src={Rishi} alt="hanuman" className="w-[626px] h-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
