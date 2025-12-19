import React from "react";

import TopSellerImage from "./images/topseller.png";
import MostValued from "./images/mostvalued.png";

type ProductCardProps = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  badge?: string;
  sellerTag?: string;
  isLarge?: boolean;
  onAddToCart: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  subtitle,
  description,
  originalPrice,
  discountedPrice,
  discountPercentage,
  badge,
  sellerTag = "Price Drop",
  isLarge = false,
  onAddToCart,
}) => {
  return (
    <div className="flex-1">
      {badge && (
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="w-[50px] h-[50px]  flex items-center justify-center">
            <img
              src={badge === "Top Seller" ? TopSellerImage : MostValued}
              alt=""
            />{" "}
          </div>
          <p className="font-semibold">{badge}</p>
        </div>
      )}
      <div
        className={`relative rounded-[15px] border-[3px] border-[var(--bg-color1)] bg-[var(--bg-color7)] overflow-hidden 
        ${isLarge ? "card-shodow" : "max-w-xs "} w-full`}
      >
        {/* Badge Section (Top Seller / Most Valued) */}

        {/* Image */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className={`w-full p-3 ${
              isLarge ? "h-80 rounded-[25px]" : "h-68 rounded-[22px]"
            } object-cover`}
          />

          {/* Discount Tag */}
          {discountPercentage > 0 && (
            <span className="absolute top-6 left-6 bg-[var(--light-red)] text-white text-xs font-bold px-4 py-1 rounded-[60px]">
              {discountPercentage}% Off
            </span>
          )}
          <div className="absolute w-full bottom-5 text-center" >
            {!isLarge && (
              <button
                onClick={onAddToCart}
                className={` mt-3 bg-green-700 text-white py-2 px-5 rounded-full shadow hover:bg-green-800 transition ${
                  isLarge ? "text-base" : "text-sm"
                }`}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="text-base font-semibold">{title}</h2>
          <h3 className="text-sm font-medium text-gray-700">{subtitle}</h3>
          <p className="text-xs text-gray-600 mt-1 min-h-[40px]">{description}</p>

          {/* Price Row */}
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-2 text-xs font-medium text-orange-600">
              <span>🔔</span>
              <span>{sellerTag}</span>
            </div>
            <div className="text-right">
              <p className="text-gray-400 line-through text-xs">
                ₹{originalPrice}
              </p>
              <p className="text-base font-semibold text-orange-700">
                ₹{discountedPrice}
              </p>
            </div>
          </div>

          {/* Button */}
          {isLarge && (
            <button
              onClick={onAddToCart}
              className={`w-full mt-3 bg-green-700 text-white py-2 rounded-full shadow hover:bg-green-800 transition ${
                isLarge ? "text-base" : "text-sm"
              }`}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
