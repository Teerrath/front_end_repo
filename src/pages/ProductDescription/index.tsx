import Slider from "react-slick";
import Footer from "../../components/Footer";
import Marquee from "../../components/Marquee";
import Navbar from "../../components/NavBar";

import RudrakshImg from "./images/1.png";
import Kalasah from "./images/2.png";
import Bell from "./images/3.png";

import Image1 from "./images/cards/1.png";
import Image2 from "./images/cards/2.png";
import Image3 from "./images/cards/3.png";

import "./ProductDescription.css";
import CountdownTimer from "../../components/CountdownTimer";

interface NavbarProps {
  isAuthenticated: boolean;
  onClick: () => void;
}
export default function ProductDescription({isAuthenticated ,onClick}:NavbarProps) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // DUMMY DATA

  const cardsData = [
    { src: Image1, alt: "Gift this Pooja to a Loved One" },
    { src: Image2, alt: "Redeem Your Teerrath Kamals" },
    { src: Image3, alt: "Share this with friends and family" },
    { src: Image3, alt: "Share this with friends and family" },
    { src: Image3, alt: "Share this with friends and family" },
  ];
  const sliderImages = [
    { src: RudrakshImg, alt: "Ek Mukhi Rudraksha on cloth" },
    { src: RudrakshImg, alt: "Another view" },
    { src: RudrakshImg, alt: "Another view" },
    { src: RudrakshImg, alt: "Another view" },
  ];
  // const testimonials = [
  //   {
  //     name: "Nandana C",
  //     text: "Miraculous! Felt immense peace and clarity after using this rudraksha.",
  //     img: "https://randomuser.me/api/portraits/women/50.jpg",
  //     date: "16.04.2025",
  //   },
  // ];
  // const similar = [
  //   {
  //     id: 1,
  //     title: "Rudraksh Japa Mala",
  //     desc: "Divine 108 Beads Rudraksha. Positive Vibes, Meditation, Mantra Japa Mala, Shiv Blessings.",
  //     price: 220,
  //     img: sliderImages[0].src,
  //   },
  //   {
  //     id: 2,
  //     title: "Rudraksh Japa Mala",
  //     desc: "Divine 108 Beads Rudraksha. Positive Vibes, Meditation, Mantra Japa Mala, Shiv Blessings.",
  //     price: 220,
  //     img: sliderImages[0].src,
  //   },
  //   {
  //     id: 3,
  //     title: "Rudraksh Japa Mala",
  //     desc: "Divine 108 Beads Rudraksha. Positive Vibes, Meditation, Mantra Japa Mala, Shiv Blessings.",
  //     price: 220,
  //     img: sliderImages[0].src,
  //   },
  // ];
  // const faqs = [
  //   {
  //     q: "How does this work?",
  //     a: "It's simple. Once you visit Teerrth, you can explore our offerings, choose the option that best suits your needs, and follow the guided steps to get started. We've designed the process to be quick, clear, and user-friendly, so you can focus on what matters most.",
  //   },
  //   {
  //     q: "What Services are offered?",
  //     a: "Lab-certified authentic Rudraksha, guided puja materials, pooja guides, japa malas, and instructional support for spiritual rituals.",
  //   },
  // ];
  return (
    <>
      <Marquee />
      <Navbar  isAuthenticated={isAuthenticated} onClick={onClick}/>
      <div className="bg-[var(--bg-color-8)] p-10">
        <div className=" pb-10">
          {/* Slider & Main Product Headline */}
          <section className="max-w-8xl mx-auto pt-6 px-2 flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-[60%] product-desc">
              <Slider {...settings}>
                {sliderImages.map((img, i) => (
                  <div key={i} className="relative">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="rounded-xl shadow-lg w-full h-90 object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            {/* Product Content */}
            <div className="md:w-[40%] flex flex-col gap-1 justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-burgundy underline text-[var(--brown)] text-center">
                Divine Ek Mukhi Rudraksh
              </h1>
              <span className="product-desc-para  mt-1">
                Resolve
                <span className="product-desc-para-orange">
                   Kuja Doshas,
                </span>{" "}
                Cherish a 
                <span className="product-desc-para-orange">
                  Blissful Married Life
                </span>
                 with 
                <span className="product-desc-para-orange">Mangala Gauri </span>
                worship in the
                <span className="product-desc-para-orange">
                   Shravana Masa.
                </span>
                 
              </span>
              <div>
                <div className="flex items-center mt-2">
                  <img src={Kalasah} alt="kalash" />{" "}
                  <p className="ml-5 timer-color-event">
                    Event: Mangala Gauri Vrat (19th Aug 2025)
                  </p>
                </div>
                <div className="flex items-center mt-2">
                  <img src={Kalasah} alt="kalash" />{" "}
                  <p className="ml-5 timer-color-event">Venue: Hardiwar</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-center">
                  <img src={Bell} alt="bell" />
                  <p className="booking-heading ml-5">Booking Closes in</p>
                </div>
                <CountdownTimer targetDate="2025-12-31T23:59:59" />
                <div className="flex items-center justify-center gap-2 mb-1 mt-8">
                  <button className="min-w-[184px] text-white px-6 py-3 rounded shadow booking-now-btn">
                    Book Now
                  </button>
                </div>
              </div>

              {/* Testimonial */}
            </div>
          </section>
          <section className="max-w-8xl mx-auto pt-6 px-2 flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-[60%] product-desc">
              <div className="booking-cards flex justify-between ">
                {cardsData.map((item) => (
                  <div className="py-4 px-2 flex flex-col items-center justify-center text-center">
                    <div className="booking-image-box">
                      <img src={item.src} alt="alt" />
                    </div>
                    <p className="mt-3 booking-cards-text ">{item.alt}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-[40%] product-desc">
              <div className="booking-cards flex justify-between">
                {cardsData.slice(0, 3).map((item) => (
                  <div className="py-4 px-2 flex flex-col items-center justify-center text-center ">
                    <div className="booking-image-box">
                      <img src={item.src} alt="alt" />
                    </div>
                    <p className="mt-3 booking-cards-text ">{item.alt}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div>
            <h2 className="about-heading flex justify-center text-center gap-5 mt-10">
              About the Pooja
            </h2>
          </div>
          {/* About Product */}
          <section className="mt-8 px-2 max-w-7xl mx-auto">
            <p className="text-gray-700 mb-2 text-center about-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="text-gray-700 mb-2 text-center about-text mt-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </section>
          <section className="mt-8 px-10 max-w-7xl mx-auto flex">
            <div className="w-1/2 m-10">
              <h2 className="about-heading-below">
                Mythological Power Meets Real-Life Transformation
              </h2>
              <div className="about-section-bg m-5"></div>
              <div className="participate-section">
                <h4>How to Participate</h4>
              </div>
            </div>
            <div className="about-line">&nbsp;</div>
            <div className="w-1/2 m-10">
              <h2 className="about-heading-below-right">Benefits</h2>
              <div className="participate-section-right mt-10"></div>
              <h2 className="about-heading-below-right text-center mt-10 underline">
                Voices of Devotees
              </h2>
              {[...Array(3)].map((_, i) => (
                <div key={i} className=" mt-10 flex gap-10">
                  <div className="flex-1">
                    <div className="participate-section-circle"></div>
                  </div>
                  <p className="participate-section-text ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy .
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
