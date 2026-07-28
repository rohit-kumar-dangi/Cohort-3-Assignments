import Navbar from "../components/Navbar";
import SearchFilter from "../components/shop/SearchFilter";
import ProductGrid from "../components/shop/ProductGrid";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import { MyStore } from "../context/MyContext";

function Shop() {
  const { productsData } = useContext(MyStore);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* <ShopHeader /> */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold">
            All Products
          </h1>
          <p className="text-zinc-400 mt-2">
            {productsData.length} products found
          </p>
        </div>

        <SearchFilter />

        <ProductGrid />

      </main>

      <Footer />

    </div>
  );
}

export default Shop;