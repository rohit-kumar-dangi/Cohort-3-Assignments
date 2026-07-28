import React from "react";
import { Laptop, Shirt, Sofa, House, Dumbbell, Gem, ArrowRight, } from "lucide-react";
import CategoryCard from "./CategoryCard";
import { useNavigate } from "react-router";

function CategorySection() {
  const categories = [
    {
      name: "Electronics",
      items: 17,
      icon: <Laptop size={34} />,
    },
    {
      name: "Clothing",
      items: 2,
      icon: <Shirt size={34} />,
    },
    {
      name: "Furniture",
      items: 3,
      icon: <Sofa size={34} />,
    },
    {
      name: "Home",
      items: 14,
      icon: <House size={34} />,
    },
    {
      name: "Sports",
      items: 8,
      icon: <Dumbbell size={34} />,
    },
    {
      name: "Accessories",
      items: 6,
      icon: <Gem size={34} />,
    },
  ];
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-6 mt-16">

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold text-white">
          Shop by Category
        </h2>

        <button 
          className="flex items-center gap-2 text-lime-400 hover:text-lime-300 transition cursor-pointer"
          onClick={() => navigate("/shop")}
        >
          View All
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            category={category}
          />
        ))}
      </div>

    </section>
  );
}

export default CategorySection;