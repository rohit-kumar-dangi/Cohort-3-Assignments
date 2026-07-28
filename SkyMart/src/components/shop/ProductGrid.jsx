import ProductCard from "./ProductCard";

function ProductGrid({ products, isLoading }) {
  if (isLoading) {
    return (
      <div className="h-28 bg-[#121212] flex items-center justify-center text-white text-2xl">
        Loading...
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="min-h-28 rounded-2xl border border-zinc-700 bg-[#121212] flex items-center justify-center px-6 text-center text-zinc-400">
        No products match your search and filters.
      </div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">

    {
        products.map( (elem) => {
            return <ProductCard product={elem} key={elem.id} />
        })
    }

    </div>
  );
}

export default ProductGrid;
