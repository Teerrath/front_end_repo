import React, { useState, useEffect, useRef } from "react";

interface Option {
  label: string;
  value: string;
}

interface MultiSelectDropdownProps {
  options: Option[];
  maxSelect?: number;
  onChange: (selected: string[]) => void;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  options,
  maxSelect = 3,
  onChange,
}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // 🔄 Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleOption = (value: string) => {
    let newSelected = [...selected];
    if (selected.includes(value)) {
      newSelected = selected.filter((v) => v !== value);
    } else if (selected.length < maxSelect) {
      newSelected.push(value);
    }
    setSelected(newSelected);
    onChange(newSelected);
  };

  return (
    <div className="relative w-full " ref={dropdownRef}>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer  h-[40px] 
    rounded-[9px] 
    shadow-[0px_4px_4px_0px_#00000040] font-bold  text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]
 text-[#E65800] bg-white   px-4 flex items-center  w-full"
      >
        Dropdown (Select by Checkbox Any 3) 
        
      </div>

      {open && (
        <div className="absolute bg-white border rounded shadow w-full mt-1 z-10 max-h-60 overflow-y-auto border-[2px] border-[#F8701B] rounded-xl">
          {options.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-orange-50"
            >
              <input
                type="checkbox"
                className="mr-2"
                checked={selected.includes(opt.value)}
                onChange={() => toggleOption(opt.value)}
              />
              {opt.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
