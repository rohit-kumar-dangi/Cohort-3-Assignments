import React from "react";

function CategoryCard({ category }) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        p-8
        flex
        flex-col
        items-center
        justify-center
        gap-4
        cursor-pointer
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        hover:scale-[1.02]
      "
    >
      {/* Icon */}
      <div className="h-16 w-16 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-700">
        {category.icon}
      </div>

      {/* Category Name */}
      <h3 className="text-2xl font-semibold text-zinc-900 text-center">
        {category.name}
      </h3>

      {/* Items Count */}
      <p className="text-zinc-500">
        {category.items} Items
      </p>
    </div>
  );
}

export default CategoryCard;