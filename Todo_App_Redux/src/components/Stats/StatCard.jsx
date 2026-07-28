import React from "react";

const StatCard = ({ title, value, icon: Icon, color }) => {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-md transition-all hover:scale-[1.02]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>

          <h2 className={`mt-2 text-3xl font-bold ${color}`}>
            {value}
          </h2>
        </div>

        <div className="rounded-xl bg-slate-800 p-3">
          <Icon className={color} size={28} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;