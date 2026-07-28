import React from "react";

const filters = [
  "all",
  "active",
  "completed",
];

const FilterTabs = ({ filter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-3">

      {filters.map((item) => (
        <button
          key={item}
          onClick={() => onFilterChange(item)}
          className={`rounded-xl px-3 py-1 text-xs font-medium capitalize transition-all cursor-pointer ${
            filter === item
              ? "bg-indigo-600 text-white"
              : "bg-slate-800 text-slate-400 hover:bg-slate-700"
          }`}
        >
          {item}
        </button>
      ))}

    </div>
  );
};

export default FilterTabs;
