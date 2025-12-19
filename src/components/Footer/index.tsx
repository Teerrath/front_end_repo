import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 p-10 ">
      <div className=" mx-auto px-6 flex justify-between flex-wrap">
        {/* Left section */}
        <div className="w-[60%]">
          <div className="flex items-center gap-2 mb-4">
            <img src="flower.svg" alt="Teerrath Logo" className="h-10" />
            <h2 className="text-2xl font-bold text-orange-600">TEERRATH</h2>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-lg">
            Teerrath is your trusted platform to book a variety of auspicious
            sevas and poojas at temples of your choice — all online. You no
            longer need to step out of your home to seek divine blessings. With
            a smooth and hassle-free booking process, Teerrath brings spiritual
            experiences to your fingertips. Sacred rituals, now just a click
            away.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <span className="font-semibold text-orange-600 text-sm">
              Reach Us At :
            </span>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-600 hover:text-orange-600"
            >
              <img src="footer/fb.svg" alt="fb" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-orange-600"
            >
              <img src="footer/linkedin.svg" alt="linkedin" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-gray-600 hover:text-orange-600"
            >
              <img src="footer/youtube.svg" alt="youtube" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-600 hover:text-orange-600"
            >
              <img src="footer/instagram.svg" alt="instagram" />
            </a>
          </div>
        </div>

        {/* Right section */}
        <div className="flex w-[40%] justify-between px-20">
          {[1, 2, 3].map((col) => (
            <div key={col}>
              <h3 className="font-semibold text-orange-600 mb-3">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-orange-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">
                    About Teerrath
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
