import React, { useState } from "react";

interface HoverItemProps {
  label: React.ReactNode;         // Label, image, etc.
  hoverContent: React.ReactNode;  // Content to show on hover
}

const HoverItem: React.FC<HoverItemProps> = ({ label, hoverContent }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="cursor-pointer">
        {label}
      </div>

      {isHovered && (
        <div className="mt-5 left-0 bg-[#FFEDC4] border-2 border-[#F8701B] rounded-[14px] p-4 min-h-[100px] w-full text-sm text-black absolute">
          {hoverContent}
        </div>
      )}
    </div>
  );
};

export default HoverItem;
