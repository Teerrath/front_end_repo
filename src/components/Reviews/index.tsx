import Slider from "react-slick";
const testimonials = [
  {
    rating: 5,
    text: "Never thought I could book a temple pooja online and actually witness it from home. I did a Baglamukhi Pooja for protection, and the entire experience felt personal and divine.",
    name: "Shalini Mehta",
    location: "Mumbai",
    image: "image.png",
  },
  {
    rating: 4,
    text: "The process was so smooth and I really felt connected to the ritual. Highly recommended.",
    name: "Rahul Verma",
    location: "Delhi",
    image: "image.png",
  },
];

export default function Reviews() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="bg-three-colors-1">
      <div className="text-center my-1 flex items-center justify-center">
        <div className="flex items-center gap-5 py-1 font-sans [font-size:var(--font-size-20)] [font-weight:var(--font-weight-800)] [color:var(--font-color-white)]">
          <img className="w-[30px]" src="/marquee/om.svg" />
          <p className="font-semibold text-[28px] text-white">Reviews</p>
          <img className="w-[30px]" src="/marquee/om.svg" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-8">
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i}>
              <div className="bg-white rounded-lg shadow-md p-6 relative h-[200px]">
                {/* Rating */}
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <span key={idx} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                  {t.rating < 5 && (
                    <span className="text-gray-300 text-lg">
                      {Array.from({ length: 5 - t.rating }).map(
                        (_, idx) =>  <span key={idx}>★</span>
                      )}
                    </span>
                  )}
                </div>

                {/* Text */}
                <p className="text-gray-700 text-sm md:text-base mb-4">
                  "{t.text}"
                </p>

                {/* User */}
                <div className="flex items-center mt-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
