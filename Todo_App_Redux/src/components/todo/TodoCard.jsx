import { Pencil, Trash2, CheckCircle2, RotateCcw, } from "lucide-react";

const TodoCard = ({
  todo,
  onDelete,
  onEdit,
  onToggle,
}) => {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-md">

      <div className="flex items-center justify-between">

        <div>

          <h2
            className={`text-lg font-semibold ${
              todo.completed
                ? "line-through text-slate-500"
                : "text-white"
            }`}
          >
            {todo.title}
          </h2>

          <p
            className={`mt-2 text-sm ${
              todo.completed
                ? "text-green-400"
                : "text-yellow-400"
            }`}
          >
            {todo.completed
              ? "Completed"
              : "Pending"}
          </p>

        </div>

        <div className="flex gap-3">

          <button
            onClick={() => onEdit(todo)}
            className="rounded-lg bg-yellow-500 p-2 text-white hover:bg-yellow-600"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(todo.id)}
            className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
          >
            <Trash2 size={18} />
          </button>

          <button
            onClick={() => onToggle(todo.id)}
            className={`rounded-lg p-2 text-white ${
              todo.completed
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {todo.completed ? (
              <RotateCcw size={18} />
            ) : (
              <CheckCircle2 size={18} />
            )}
          </button>

        </div>

      </div>

    </div>
  );
};

export default TodoCard;