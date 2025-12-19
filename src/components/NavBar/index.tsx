import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface NavbarProps {
  isAuthenticated: boolean;
  onClick: () => void;
}
export default function Navbar({ isAuthenticated, onClick }: NavbarProps) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setLangOpen(false);
    setOpen(false);
  };

  return (
    <nav className="text-white py-4 px-6 flex items-center justify-between relative">
      {/* Logo */}
      <div className="font-sans font-black [font-size:var(--font-size-48)] [color:var(--primary-color)]">
        <Link className="flex items-center" to="/login">
          <img src="/navbar/logo.svg" className="max-[500px]:h-[50px]" />{" "}
          <span className="ml-4 max-[500px]:ml-2 max-[500px]:text-[22px]">
            {" "}
            TEERRATH
          </span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden xl:flex space-x-6 items-center">
        <li>
          <Link
            to="/"
            className="font-sans font-medium [font-size:var(--font-size-20)] text-[#00000080]"
          >
            Vedic Sadhna
          </Link>
        </li>
        <li>
          <Link
            to="/mantrasadhna"
            className="font-sans font-medium [font-size:var(--font-size-20)] text-[#00000080]"
          >
            Mantra Sadhna
          </Link>
        </li>
        <li>
          <Link
            to="/devsadhna"
            className="font-sans font-medium [font-size:var(--font-size-20)] text-[#00000080]"
          >
            Daan Sadhna
          </Link>
        </li>
        <li>
          <Link
            to="/teerrath-shop"
            className="font-sans font-medium [font-size:var(--font-size-20)] text-[#00000080]"
          >
            Teerrath Shoppe
          </Link>
        </li>

        {/* Language Dropdown */}
        <li className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="rounded-[8px] w-[120px] text-[var(--black-2)] font-bold text-[16px] bg-language h-[52px] cursor-pointer"
          >
            {i18n.language === "en" ? "Language" : "भाषा"}
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-50">
              <button
                onClick={() => changeLanguage("en")}
                className="block w-full px-3 py-2 text-left text-[var(--black-2)] cursor-pointer"
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("hi")}
                className="block w-full px-3 py-2 text-left text-[var(--black-2)] cursor-pointer"
              >
                हिंदी
              </button>
            </div>
          )}
        </li>

        {/* Login Button */}
        <li>
          {!isAuthenticated ? (
            <Link
              to="/login"
              className="h-[52px] inline-flex items-center rounded-[8px] bg-[var(--green)] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] text-[var(--btn-text-color)] [font-size:var(--font-size-16)] [font-weight:var(--font-weight-500)] font-sans px-5"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={onClick}
              className="h-[52px] inline-flex items-center rounded-[8px] bg-[var(--green)] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] text-[var(--btn-text-color)] [font-size:var(--font-size-16)] [font-weight:var(--font-weight-500)] font-sans px-5"
            >
              {"logout"}
            </button>
          )}
        </li>
      </ul>

      {/* Mobile menu toggle & sidebar */}
      <div className="xl:hidden block relative">
        <button
          onClick={() => setOpen(!open)}
          className="focus:outline-none z-50 relative"
        >
          <svg
            className="w-6 h-6 text-[#00000080]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setOpen(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setOpen(false)}
              className="text-[#00000080] text-2xl"
            >
              ✕
            </button>
          </div>
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="font-sans font-medium [font-size:var(--font-size-20)] text-[#00000080] block"
              >
                Vedic Sadhna
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="font-sans font-medium [font-size:var(--font-size-20)] text-[#00000080] block"
              >
                Mantra Sadhna
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => setOpen(false)}
                className="font-sans font-medium [font-size:var(--font-size-20)] text-[#00000080] block"
              >
                Daan Sadhna
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="font-sans font-medium [font-size:var(--font-size-20)] text-[#00000080] block"
              >
                Teerrath Shoppe
              </Link>
            </li>

            {/* Language Dropdown */}
            <li className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="rounded-[8px] w-full text-[var(--black-2)] font-bold text-[16px] bg-language h-[52px] cursor-pointer"
              >
                {i18n.language === "en" ? "Language" : "भाषा"}
              </button>
              {langOpen && (
                <div className="mt-2 w-full bg-white border rounded-lg shadow-lg flex flex-col">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="block w-full px-3 py-2 text-left text-[var(--black-2)] cursor-pointer"
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("hi")}
                    className="block w-full px-3 py-2 text-left text-[var(--black-2)] cursor-pointer"
                  >
                    हिंदी
                  </button>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="h-[52px] inline-flex items-center rounded-[8px] bg-[var(--bg-color1)] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] text-[var(--btn-text-color)] [font-size:var(--font-size-16)] [font-weight:var(--font-weight-500)] font-sans px-5 w-full justify-center"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
