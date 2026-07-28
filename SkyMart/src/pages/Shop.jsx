import Navbar from "../components/Navbar";
import SearchFilter from "../components/shop/SearchFilter";
import ProductGrid from "../components/shop/ProductGrid";
import Footer from "../components/Footer";
import { useContext, useMemo, useState } from "react";
import { MyStore } from "../context/MyContext";

function Shop() {
  const { productsData } = useContext(MyStore);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSortBy("featured");
  };

  const categories = useMemo(
    () => [...new Set(productsData.map((product) => product.category))],
    [productsData]
  );

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const matchingProducts = productsData.filter((product) => {
      const matchesSearch =
        !normalizedSearch ||
        product.title.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch);
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    return matchingProducts.sort((firstProduct, secondProduct) => {
      switch (sortBy) {
        case "price-low-high":
          return firstProduct.price - secondProduct.price;
        case "price-high-low":
          return secondProduct.price - firstProduct.price;
        case "rating-low-high":
          return firstProduct.rating.rate - secondProduct.rating.rate;
        case "rating-high-low":
          return secondProduct.rating.rate - firstProduct.rating.rate;
        default:
          return 0;
      }
    });
  }, [productsData, searchTerm, selectedCategory, sortBy]);

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
            {filteredProducts.length} product{filteredProducts.length === 1 ? "" : "s"} found
          </p>
        </div>

        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onClearFilters={clearFilters}
        />

        <ProductGrid products={filteredProducts} isLoading={productsData.length === 0} />

      </main>

      <Footer />

    </div>
  );
}

export default Shop;
