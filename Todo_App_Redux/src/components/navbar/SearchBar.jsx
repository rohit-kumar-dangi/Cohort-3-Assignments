import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/features/todoSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.todo);
  return (
    <div className="relative w-full max-w-md">

      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-10 pr-4 text-slate-100 outline-none focus:border-indigo-500"
      />

    </div>
  );
};

export default SearchBar;