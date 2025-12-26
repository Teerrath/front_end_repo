import Marquee from "../../components/Marquee";
import Navbar from "../../components/NavBar";
import Tabs from "../../components/Tabs";
import Tab from "../../components/Tabs/Tab";

import Flower from "./images/flower.svg";
import Star from "./images/star.svg";
// import Flowers from "./images/flowers.png";

import ShoppeItem from "./item";

import "./Shoppe.css";
import Footer from "../../components/Footer";

interface NavbarProps {
  isAuthenticated: boolean;
  onClick: () => void;
}
export default function Shoppe({isAuthenticated ,onClick}:NavbarProps) {
  return (
    <>
      <Marquee />
      <Navbar  isAuthenticated={isAuthenticated} onClick={onClick}/>
      <div>
        <div className="flex items-center justify-center gap-10 gap-sm-4">
          <img src={Flower} alt="flower" className="w-30-px" />
          <h3 className="text-sm-22 font-extrabold text-[48px] text-black underline underline-offset-10 ">
            TEERRATH SHOPPE
          </h3>
          <img src={Flower} alt="flower" className="w-30-px" />
        </div>
        <div className="flex items-center gap-2 p-4  rounded-lg w-full max-w-lg mx-auto mt-2">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 px-4 py-2 border-[3px] border-[var(--primary-color)] bg-white rounded-[60px]  placeholder:text-[#0000007D]"
          />
          {/* <button className="px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition">
            Search
          </button> */}
        </div>
        <div className="flex flex-col md:flex-row gap-4 p-5 lg:p-15 mt-4 ">
          {/* Left big card */}
          <div className="flex-1 bg-[#D9D9D9] rounded-xl relative min-h-[300px]">
            {/* Profile Image */}
          </div>

          {/* Right section */}
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            {/* Top row with two cards */}
            <div className="flex gap-2">
              <div className="flex-1 bg-[#D9D9D9] rounded-xl min-h-[150px]"></div>
              <div className="flex-1 bg-[#D9D9D9] rounded-xl min-h-[150px]"></div>
            </div>

            {/* Testimonial / Review card */}
            <div className="bg-[#FFF4E6] rounded-xl p-4 shadow h-full ">
              <div className="flex items-center gap-8 pt-4">
                <div className="w-15 h-13 bg-gray-300 rounded-full"></div>
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
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center">
            <Tabs>
              <Tab label="Rudraksh">
                <h2 className="text-xl font-semibold mb-2">Rudraksh</h2>
            <ShoppeItem />
              </Tab>
              <Tab label="Bracelets">
                <h2 className="text-xl font-semibold mb-2">Bracelets</h2>
                <ShoppeItem />
              </Tab>
              <Tab label="Pooja Essentials">
                <h2 className="text-xl font-semibold mb-2">Pooja Essentials</h2>
               <ShoppeItem />
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="flowers-section h-[350px]">

        </div>
        <Footer/>
      </div>
    </>
  );
}
