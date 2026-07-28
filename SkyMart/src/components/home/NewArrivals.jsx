import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import ProductListCard from "./ProductListCard";
import { useNavigate } from "react-router";

function NewArrivals() {
  const navigate = useNavigate();
  const newArrivalProducts = [
    {
      id: 1,
      title: "Apple Watch Series 9",
      price: 499,
      image: "https://picsum.photos/200?11",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Sony WH-1000XM5",
      price: 349,
      image: "https://picsum.photos/200?12",
      rating: 4.9,
    },
    {
      id: 3,
      title: "Nike Air Max",
      price: 199,
      image: "https://picsum.photos/200?13",
      rating: 4.7,
    },
    {
      id: 4,
      title: "iPad Air",
      price: 699,
      image: "https://picsum.photos/200?14",
      rating: 4.8,
    },
  ];

  return (
    <section className="bg-white rounded-3xl p-7">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">
          <Sparkles
            size={22}
            className="text-lime-500"
          />

          <h2 className="text-3xl font-bold text-zinc-900">
            New Arrivals
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
        {newArrivalProducts.map((product) => (
          <ProductListCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}

export default NewArrivals;