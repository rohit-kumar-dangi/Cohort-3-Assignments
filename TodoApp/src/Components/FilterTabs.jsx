import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeAll, setFilter } from "../redux/features/todoSlice";

const filters = [
  "all",
  "active",
  "completed",
];

const FilterTabs = () => {
  const dispatch = useDispatch();
  const { filter, todos } = useSelector((state) => state.todo);
  const hasPendingTodos = todos.some((todo) => !todo.completed);
  const theme = useSelector((state) => state.todo.theme);
  const dark = theme === "dark";

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">

      <div className="flex flex-wrap gap-3">

      {filters.map((item) => (
        <button
          key={item}
          onClick={() => dispatch(setFilter(item))}
          className={`rounded-xl px-3 py-1 text-xs font-medium capitalize transition-all cursor-pointer ${
            filter === item
              ? "bg-indigo-600 text-white"
              : dark ? "bg-slate-800 text-slate-400 hover:bg-slate-700" : "bg-slate-400 text-slate-800 hover:bg-slate-500 hover:text-slate-950"
          }`}
        >
          {item}
        </button>
      ))}

      </div>

      <button
        type="button"
        onClick={() => dispatch(completeAll())}
        disabled={!hasPendingTodos}
        className="rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Complete all
      </button>

    </div>
  );
};

export default FilterTabs;
