import { ClipboardList } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <ClipboardList className="h-8 w-8 text-indigo-500" />

      <div>
        <h1 className="text-2xl font-bold text-slate-100">
          TaskFlow
        </h1>

        <p className="text-sm text-slate-400">
          Manage your daily tasks
        </p>
      </div>
    </div>
  );
};

export default Logo;