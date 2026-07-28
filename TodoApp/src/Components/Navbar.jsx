import { ClipboardList, Search, Sun, Moon, Plus } from "lucide-react"
import { useDispatch, useSelector } from "react-redux";
import { setSearch, toggleTheme } from "../redux/features/todoSlice";

const Navbar = ({onAddTask}) => {
    
  const dispatch = useDispatch();
  const { theme, search } = useSelector((state) => state.todo);
  const dark = theme === "dark";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full border-b ${dark ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">

        {/* logo */}
        <div className="flex items-center gap-3">
        <ClipboardList className="h-8 w-8 text-indigo-500" />
        <div>
            <h1 className={`text-2xl font-bold ${dark ? "text-slate-100" : "text-slate-900"}`}>
            TaskFlow
            </h1>

            <p className={`text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>
            Manage your daily tasks
            </p>
        </div>
        </div>

        {/* search bar */}
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
                className={`w-full rounded-xl border py-3 pl-10 pr-4 outline-none focus:border-indigo-500 ${dark ? "border-slate-700 bg-slate-800 text-slate-100" : "border-slate-300 bg-slate-50 text-slate-900"}`}
            />
        </div>
        
        

        <div className="flex items-center gap-3">
            {/* Change Theme */}
            <button
                onClick={() => dispatch(toggleTheme())}
                aria-label="Toggle color theme"
                className={`cursor-pointer rounded-xl p-3 transition ${dark ? "bg-slate-800 hover:bg-slate-700" : "bg-slate-100 hover:bg-slate-200"}`}
                >
                {theme === "dark" ? (
                    <Sun className="text-yellow-400" size={20} />
                ) : (
                    <Moon className="text-slate-700" size={20} />
                )}
            </button>
            
            {/* Add Task */}
            <button
                onClick={() => onAddTask()}
                className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 cursor-pointer"
            >
            <Plus size={18} />
            Add Task
            </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;
