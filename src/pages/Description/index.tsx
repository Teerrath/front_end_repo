import Slider from "react-slick";
import Footer from "../../components/Footer";
import Marquee from "../../components/Marquee";
import Navbar from "../../components/NavBar";

import RudrakshImg from "./images/1.png";
// import Kalasah from "./images/2.png";
// import Bell from "./images/3.png";

import Image1 from "./images/cards/1.png";
import Image2 from "./images/cards/2.png";
import Image3 from "./images/cards/3.png";
import Star from "./images/star.svg";
import MalaImg from "./images/mala.png";

import "./Description.css";
import { useState } from "react";
import ProductCard from "../Shoppe/ProductCard";

interface NavbarProps {
  isAuthenticated: boolean;
  onClick: () => void;
}
export default function Description({isAuthenticated ,onClick}:NavbarProps) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // DUMMY DATA

  const products = [
    {
      id: 1,
      image: MalaImg,
      title: "Rudraksh Japa Mala",
      subtitle: "Divine 108 Beads Rudraksha",
      description:
        "Positive Vibes, Meditation, Mantra Japa Mala, Shiv Blessings",
      originalPrice: 300,
      discountedPrice: 220,
      discountPercentage: 20,
    },
    {
      id: 2,
      image: MalaImg,
      title: "Bracelet Mala",
      subtitle: "Healing Beads",
      description: "Energy, Meditation, Protection",
      originalPrice: 250,
      discountedPrice: 180,
      discountPercentage: 15,
    },
    {
      id: 3,
      image: MalaImg,
      title: "Bracelet Mala",
      subtitle: "Healing Beads",
      description: "Energy, Meditation, Protection",
      originalPrice: 250,
      discountedPrice: 180,
      discountPercentage: 15,
    },
    // add more products...
  ];
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

  const [qty, setQty] = useState(1);

  const decrease = () => {
    if (qty > 1) setQty(qty - 1);
  };

  const increase = () => {
    setQty(qty + 1);
  };
  return (
    <>
      <Marquee />
      <Navbar isAuthenticated={isAuthenticated} onClick={onClick} />
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
              <h1 className="text-3xl lg:text-4xl font-bold text-burgundy underline text-[var(--brown)] text-left">
                Divine Ek Mukhi Rudraksh
              </h1>
              <span className="mt-1 price-tag ">₹ 999.00</span>
              <span className="price-desc">
                Tax Included. Shipping calculated at checkout.
              </span>

              <div className="quantity-tag mt-4">
                <p className="product-quantity-tag">Quantity</p>
                <div className="flex items-center px-4 py-1 w-32 justify-between mt-2 product-quantity-btn">
                  <button
                    onClick={decrease}
                    className="text-orange-600  text-xl cursor-pointer"
                  >
                    –
                  </button>

                  <span className="font-bold text-lg w-8 text-center">
                    {qty.toString().padStart(2, "0")}
                  </span>

                  <button
                    onClick={increase}
                    className="text-orange-600 text-xl cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="">
                <div className="flex items-center  gap-2 mb-1 mt-4">
                  <button className="min-w-[300px] text-white px-6 py-4 rounded shadow booking-now-btn booking-now-btn-produc">
                    Book Now
                  </button>
                  <button className="min-w-[184px] text-white px-6 py-4 rounded shadow add-to-cart-btn ml-5">
                    Add to Cart
                  </button>
                </div>
                <div>
                  <button className="px-2 py-2     add-to-wish-btn mt-4">
                    Add to wishlist
                  </button>
                </div>
              </div>
              <div>
                <p className="cart-product-desc mt-4">
                  The Ek Mukhi Rudraksha is the rarest and most powerful of all
                  Rudraksha beads. Revered in Vedic scriptures as the embodiment
                  of Lord Shiva, this sacred bead symbolizes ultimate truth and
                  supreme consciousness.
                </p>
              </div>

              {/* Testimonial */}
            </div>
          </section>
          <section className="max-w-8xl mx-auto pt-6 px-2 flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-[60%] product-desc">
              <div className="booking-cards flex justify-between review-section">
                <div className="flex flex-col gap-2 w-full">
                  {/* Top row with two cards */}

                  {/* Testimonial / Review card */}
                  <div className="bg-[#FFF4E6] rounded-xl p-4 shadow h-full">
                    <div className="flex items-center gap-8 pt-4">
                      <div className="w-15 h-15 bg-gray-300 rounded-full"></div>
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
                          <span className="ml-1 font-semibold">
                            "Miraculous"
                          </span>
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
            <h2 className="about-heading-product flex justify-center text-center gap-5 mt-10 items-center">
              About the ‘Product’
            </h2>
          </div>
          {/* About Product */}
          <section className="mt-8 px-2 max-w-7xl mx-auto">
            <p className="text-gray-700 mb-2 text-center about-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
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
              <h2 className="about-heading-product-below">
                Why Choose Our Ek Mukhi
                <br /> Rudraksha?
              </h2>
              <div></div>
              <div className="participate-section"></div>
            </div>
            <div className="about-line">&nbsp;</div>
            <div className="w-1/2 m-10">
              <h2 className="about-heading-product-below">What You Get</h2>
              <div className="participate-section-right mt-10"></div>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-white">
        <section className="p-10 max-w-7xl mx-auto">
          <h4 className="products-heading">Similar Products</h4>

          <div className="flex mt-5">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={() => {}}
              />
            ))}
          </div>
        </section>
      </div>
      <div className="bg-[var(--bg-color-8)] p-10">


      </div>
      <Footer />
    </>
  );
}
