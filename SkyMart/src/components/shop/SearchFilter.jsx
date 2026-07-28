import { Search } from "lucide-react";

function SearchFilter() {
  return (
    <div className="border border-zinc-700 rounded-2xl p-4 flex flex-col lg:flex-row gap-4 mb-10">

      <div className="relative flex-1">

        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
          type="text"
          placeholder="Search products..."
          className="w-full bg-zinc-900 rounded-xl pl-12 pr-4 py-3 outline-none border border-zinc-700"
        />

      </div>

      <select className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 lg:w-56">
        <option>All Categories</option>
      </select>

      <select className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 lg:w-56">
        <option>Featured</option>
      </select>

    </div>
  );
}

export default SearchFilter;