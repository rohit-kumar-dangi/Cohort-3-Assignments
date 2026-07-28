import React from "react";
import { ArrowRight, Star } from "lucide-react";
import ProductListCard from "./ProductListCard";
import { useNavigate } from "react-router";

function TopRated() {
  const navigate = useNavigate();
  const topRatedProducts = [
    {
      id: 1,
      title: "Gaming Laptop",
      price: 1299,
      image: "https://picsum.photos/200?1",
      rating: 4.9,
    },
    {
      id: 2,
      title: "Wireless Headphones",
      price: 149,
      image: "https://picsum.photos/200?2",
      rating: 4.8,
    },
    {
      id: 3,
      title: "Mechanical Keyboard",
      price: 89,
      image: "https://picsum.photos/200?3",
      rating: 4.7,
    },
    {
      id: 4,
      title: "Gaming Mouse",
      price: 59,
      image: "https://picsum.photos/200?4",
      rating: 4.7,
    },
  ];

  return (
    <section className="bg-white rounded-3xl p-7">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">
          <Star
            size={22}
            className="text-yellow-500"
            fill="currentColor"
          />

          <h2 className="text-3xl font-bold text-zinc-900">
            Top Rated
          </h2>
        </div>

        <button 
          className="flex items-center gap-2 text-lime-600 font-semibold hover:text-lime-500 transition cursor-pointer"
          onClick={() => navigate("/shop")}
        >
          See All
          <ArrowRight size={18} />
        </button>

      </div>

      {/* Product List */}
      <div className="flex flex-col gap-5">

        {topRatedProducts.map((product) => (
          <ProductListCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default TopRated;