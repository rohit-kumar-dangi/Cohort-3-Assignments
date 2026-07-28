import { X } from "lucide-react";
import { useEffect, useState } from "react";

const TodoModal = () => {
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <div className="w-full max-w-lg rounded-2xl bg-slate-900 p-8">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-3xl font-bold text-white">
            Add Task
          </h2>

          <button>
            <X
              size={28}
              className="text-white"
            />
          </button>

        </div>

        <form
          className="space-y-6"
        >

          <input
            value="Rohit"
            type="text"
            placeholder="Enter task..."
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none focus:border-indigo-500"
          />

          <button
            className="w-full rounded-xl bg-indigo-600 py-3 text-lg font-semibold text-white hover:bg-indigo-700"
          >
            Add Task
          </button>

        </form>

      </div>

    </div>
  );
};

export default TodoModal;