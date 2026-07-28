import { ClipboardList } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex-1 rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-16">

      <div className="flex flex-col items-center">

        <ClipboardList
          size={70}
          className="text-slate-500"
        />

        <h2 className="mt-6 text-3xl font-bold text-white">
          No Tasks Found
        </h2>

        <p className="mt-2 text-slate-400">
          Start by creating your first task.
        </p>

      </div>

    </div>
  );
};

export default EmptyState;