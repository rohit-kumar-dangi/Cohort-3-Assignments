import { Pencil, Trash2, CheckCircle2, RotateCcw, } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/features/todoSlice";

const TodoCard = ({ todo, openForm }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.todo.theme);
  const dark = theme === "dark";

  


  return (
    <div className={`rounded-2xl border shadow-md  p-5 ${dark ? "border-slate-700 bg-slate-900" : "border-slate-900 bg-slate-100"}`}>

      <div className="flex items-center justify-between">

        <div>

          <h2
            className={`text-lg font-semibold ${
              todo.completed
                ? dark ? "line-through text-slate-500" : "line-through text-slate-900"
                : dark ? "text-white" : "text-black"
            }`}
          >
            {todo.title}
          </h2>

          <p
            className={`mt-2 text-sm font-bold ${
              todo.completed
                ? dark ? "text-green-400" : "text-green-600"
                : dark ? "text-yellow-400" : "text-yellow-600"
            }`}
          >
            {todo.completed
              ? "Completed"
              : "Pending"}
          </p>

        </div>

        <div className="flex gap-3">

          <button
            onClick={() => openForm(todo)}
            aria-label={`Edit ${todo.title}`}
            className="rounded-lg bg-yellow-500 p-2 text-white hover:bg-yellow-600"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            aria-label={`Delete ${todo.title}`}
            className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
          >
            <Trash2 size={18} />
          </button>

          <button
            onClick={() => dispatch(toggleTodo(todo.id))}
            aria-label={todo.completed ? `Mark ${todo.title} as pending` : `Mark ${todo.title} as completed`}
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
