import { X } from "lucide-react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../redux/features/todoSlice";

const TodoForm = ({ open, onClose, editingTodo }) => {
  const dispatch = useDispatch();

  if (!open) return null;

const handleForm = (e) => {
  e.preventDefault();
  const title = e.target.title.value.trim();
  if (!title) return;
  if (editingTodo) {
    dispatch(updateTodo({ id: editingTodo.id, title }));
  } else {
    dispatch( addTodo({ id: nanoid(), title, completed: false, }) );
  }
  onClose();
};


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onMouseDown={onClose}>

      <div className="w-full max-w-lg rounded-2xl bg-slate-900 p-8 shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-3xl font-bold text-white">
            {editingTodo
              ? "Edit Task"
              : "Add Task"}
          </h2>

          <button type="button" onClick={onClose} aria-label="Close form" className="cursor-pointer">
            <X
              size={28}
              className="text-white"
            />
          </button>

        </div>

        <form
          onSubmit={handleForm}
          className="space-y-6"
        >

          <input
            key={editingTodo?.id ?? "new"}
            autoFocus
            name="title"
            defaultValue={typeof editingTodo?.title === "string" ? editingTodo.title : ""}
            type="text"
            placeholder="Enter task..."
            maxLength="160"
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

export default TodoForm;
