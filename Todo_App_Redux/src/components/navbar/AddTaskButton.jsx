import { Plus } from "lucide-react";

const AddTaskButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
    >
      <Plus size={18} />
      Add Task
    </button>
  );
};

export default AddTaskButton;