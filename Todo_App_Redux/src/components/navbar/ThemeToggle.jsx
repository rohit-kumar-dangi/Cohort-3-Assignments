import { Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/features/todoSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.todo);
  
  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="rounded-xl bg-slate-800 p-3 transition hover:bg-slate-700"
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-400" size={20} />
      ) : (
        <Moon className="text-slate-900" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;