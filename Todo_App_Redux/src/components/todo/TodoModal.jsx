import { X } from "lucide-react";
import { useEffect, useState } from "react";

const TodoModal = ({ open, onClose, onSubmit, editingTodo, }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
    } else {
      setTitle("");
    }
  }, [editingTodo]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onSubmit(title);

    setTitle("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <div className="w-full max-w-lg rounded-2xl bg-slate-900 p-8">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-3xl font-bold text-white">
            {editingTodo
              ? "Edit Task"
              : "Add Task"}
          </h2>

          <button onClick={onClose}>
            <X
              size={28}
              className="text-white"
            />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            autoFocus
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            type="text"
            placeholder="Enter task..."
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none focus:border-indigo-500"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 py-3 text-lg font-semibold text-white hover:bg-indigo-700"
          >
            {editingTodo
              ? "Update Task"
              : "Add Task"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default TodoModal;
