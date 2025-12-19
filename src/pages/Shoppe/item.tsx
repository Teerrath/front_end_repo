import React from "react";
import ProductCard from "./ProductCard";

import MalaImg from "./images/mala.png";

const products = [
  {
    id: 1,
    image: MalaImg,
    title: "Rudraksh Japa Mala",
    subtitle: "Divine 108 Beads Rudraksha",
    description: "Positive Vibes, Meditation, Mantra Japa Mala, Shiv Blessings",
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
   {
    id: 4,
    image: MalaImg,
    title: "Bracelet Mala",
    subtitle: "Healing Beads",
    description: "Energy, Meditation, Protection",
    originalPrice: 250,
    discountedPrice: 180,
    discountPercentage: 15,
  },
   {
    id: 5,
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

const ShoppeItem: React.FC = () => {
  const handleAddToCart = (title: string) => {
    alert(`${title} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating Flowers Background */}
      <div className="absolute inset-0 -z-10">
        <div className="animate-float absolute top-20 left-10 text-yellow-500">🌼</div>
        <div className="animate-float absolute top-40 right-20 text-yellow-500">🌼</div>
        <div className="animate-float absolute bottom-20 left-1/3 text-yellow-500">🌼</div>
      </div>

      <div className=" mx-auto p-6 space-y-10">
        {/* Featured Section */}
        <div className=" flex flex-wrap gap-10">
          <ProductCard
            {...products[0]}
            badge="Top Seller"
            isLarge
            onAddToCart={() => handleAddToCart(products[0].title)}
          />
          <ProductCard
            {...products[0]}
            badge="Most Valued"
            isLarge
            onAddToCart={() => handleAddToCart(products[0].title)}
          />
        </div>

        {/* Product Grid */}
       <div className="flex justify-center items-center mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-30">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={() => handleAddToCart(product.title)}
            />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppeItem;
