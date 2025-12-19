import React, { useState } from "react";
import MultiSelectDropdown from "../MultiSelectDropdown";
import FlowerImg from "./images/flower.svg";

// const dropdownOptions = [
//   { label: "Option 1", value: "opt1" },
//   { label: "Option 2", value: "opt2" },
//   { label: "Option 3", value: "opt3" },
//   { label: "Option 4", value: "opt4" },
//   { label: "Option 5", value: "opt5" },
// ];
const dropdownOptions = [
  { label: "Children", value: "1" },
  { label: "Wealth", value: "2" },
  { label: "Health", value: "3" },
  { label: "Love", value: "4" },
  { label: "Protection", value: "5" },
  { label: "Career", value: "6" },
];

const inputFields = [
  "name",
  "gotra",
  "gender",
  "DOB",
  "time",
  "place",
  "email",
  "phone",
];
type BoxComponentProps = {
  onClose: () => void;
};

const PujaForm: React.FC<BoxComponentProps> = ({ onClose }) => {
  const [selectedDropdown, setSelectedDropdown] = useState<string[]>([]);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    inputFields.forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] = "Required";
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("✅ Form Submitted:", formData, selectedDropdown);
      alert("Form submitted successfully!");
    }
  };

  return (
<div
  className="bg-[#FFF4E6] bg-[url('/formImage.png')] bg-center bg-no-repeat bg-cover
  px-8 sm:px-12 md:px-16 lg:px-20 py-10 sm:py-12 rounded-[30px] max-w-6xl mx-auto shadow-md"
>
  {/* Header */}
  <h2 className="text-center text-[#146531] font-semibold text-lg sm:text-xl md:text-2xl mb-6 flex flex-wrap items-center justify-center gap-2">
    <img src={FlowerImg} alt="flower" className="w-5 sm:w-6 md:w-8" />
    <p className="px-2 sm:px-4">Personalized Pooja Path Created Just for You</p>
    <img src={FlowerImg} alt="flower" className="w-5 sm:w-6 md:w-8" />
  </h2>

  {/* Dropdown */}
  <div className="w-full flex justify-center mb-6">
    <MultiSelectDropdown
      options={dropdownOptions}
      maxSelect={3}
      onChange={(values) => setSelectedDropdown(values)}
    />
  </div>

  {/* Form */}
  <form onSubmit={handleSubmit} className="mt-6 w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      {inputFields.map((field) => (
        <div key={field} className="flex flex-col w-full">
          <input
            type="text"
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field] || ""}
            onChange={(e) => handleInputChange(field, e.target.value)}
            className={`bg-white text-black placeholder-black font-bold
              text-[18px] sm:text-[20px] h-[40px] rounded-[17px]
              shadow-[0px_4px_4px_0px_#00000040] px-4 my-1
              focus:outline-none focus:ring-2 focus:ring-[#F8701B] transition
              ${errors[field] ? "border border-red-500" : "border border-gray-300"}`}
          />
          {errors[field] && (
            <span className="text-red-500 text-sm mt-1">{errors[field]}</span>
          )}
        </div>
      ))}
    </div>

    {/* Submit */}
    <div className="flex justify-center items-center gap-5 mt-8 flex-wrap">
      <img src="kundli/swastik.svg" alt="kundlibg" className="w-[28px] sm:w-[32px]" />
      <button
        onClick={onClose}
        type="submit"
        className="bg-[#146531] text-white rounded-[50px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]
        font-bold text-lg sm:text-xl text-center px-8 sm:px-10 py-2 sm:py-3 cursor-pointer
        hover:bg-[#0f4a26] transition-all"
      >
        Submit
      </button>
      <img src="kundli/swastik.svg" alt="kundlibg" className="w-[28px] sm:w-[32px]" />
    </div>
  </form>
</div>

  );
};

export default PujaForm;
