import { Search, X } from "lucide-react";

const sortLabels = {
  "price-low-high": "Price: Low → High",
  "price-high-low": "Price: High → Low",
  "rating-low-high": "Rating: Low → High",
  "rating-high-low": "Rating: High → Low",
};

function SearchFilter({
  searchTerm,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  onClearFilters,
}) {
  const hasAppliedFilters =
    searchTerm.trim() || selectedCategory !== "all" || sortBy !== "featured";

  return (
    <div className="border border-zinc-700 rounded-2xl p-4 flex flex-col gap-4 mb-10">

      <div className="flex flex-col lg:flex-row gap-4">

      <div className="relative flex-1">

        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
          type="text"
          placeholder="Search products..."
          className="w-full bg-zinc-900 rounded-xl pl-12 pr-4 py-3 outline-none border border-zinc-700"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />

      </div>

        <select
          aria-label="Filter by category"
          className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 lg:w-56 capitalize"
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          aria-label="Sort products"
          className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 lg:w-56"
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value)}
        >
          <option value="featured">Featured</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="rating-low-high">Rating: Low to High</option>
          <option value="rating-high-low">Rating: High to Low</option>
        </select>

        {hasAppliedFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="flex items-center justify-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-3 text-red-400 transition hover:bg-red-500/20"
          >
            <X size={18} />
            Clear
          </button>
        )}
      </div>

      {hasAppliedFilters && (
        <div className="flex flex-wrap items-center gap-3 border-t border-zinc-700 pt-4">
          {searchTerm.trim() && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="flex items-center gap-1 rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-sm font-medium text-lime-400 hover:bg-lime-400/20"
            >
              Search: {searchTerm.trim()}
              <X size={14} />
            </button>
          )}

          {selectedCategory !== "all" && (
            <button
              type="button"
              onClick={() => onCategoryChange("all")}
              className="flex items-center gap-1 rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-sm font-medium capitalize text-lime-400 hover:bg-lime-400/20"
            >
              {selectedCategory}
              <X size={14} />
            </button>
          )}

          {sortBy !== "featured" && (
            <button
              type="button"
              onClick={() => onSortChange("featured")}
              className="flex items-center gap-1 rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-sm font-medium text-lime-400 hover:bg-lime-400/20"
            >
              {sortLabels[sortBy]}
              <X size={14} />
            </button>
          )}
        </div>
      )}

    </div>
  );
}

export default SearchFilter;
