import React from "react";
import { ShoppingCart, Star } from "lucide-react";

function ProductListCard({ product }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-zinc-200 p-4 hover:shadow-md transition">

      {/* Left Side */}
      <div className="flex items-center gap-4">

        {/* Image */}
        <div className="h-20 w-20 rounded-2xl bg-zinc-100 flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain p-2"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">

          <h3 className="text-lg font-semibold text-zinc-900 line-clamp-1">
            {product.title}
          </h3>

          <div className="flex items-center gap-1 mt-1">
            <Star
              size={15}
              fill="currentColor"
              className="text-yellow-500"
            />

            <span className="text-sm text-zinc-500">
              {product.rating}
            </span>
          </div>

          <p className="mt-2 text-2xl font-bold text-lime-500">
            ${product.price}
          </p>

        </div>

      </div>

      {/* Cart Button */}
      <button
        className="
          h-12
          w-12
          rounded-xl
          bg-lime-400
          flex
          items-center
          justify-center
          hover:bg-lime-300
          transition
        "
      >
        <ShoppingCart
          size={20}
          className="text-black"
        />
      </button>

    </div>
  );
}

export default ProductListCard;