import ProductCard from "./ProductCard";
import { useContext, useState } from "react";
import { MyStore } from "../../context/MyContext";

function ProductGrid() {
  const { productsData } = useContext(MyStore);

  if (productsData.length===0) {
    return (
      <div className="h-28 bg-[#121212] flex items-center justify-center text-white text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">

    {
        productsData.map( (elem) => {
            return <ProductCard product={elem} key={elem.id} />
        })
    }

    </div>
  );
}

export default ProductGrid;