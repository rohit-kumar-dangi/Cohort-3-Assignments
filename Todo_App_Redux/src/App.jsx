import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from './components/navbar/Navbar'
import Stats from './components/Stats/Stats'
import FilterTabs from './components/Filter/FilterTabs'
import TodoList from './components/todo/TodoList'
import TodoModal from './components/todo/TodoModal'
import { nanoid } from "nanoid";
import { addTodo, deleteTodo, setFilter, setSearch, toggleTheme, toggleTodo, updateTodo, } from "./redux/features/todoSlice";

function App() {
  const dispatch = useDispatch();
  const { todos, filter, search, theme } = useSelector((state) => state.todo);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  const visibleTodos = todos.filter((todo) => {
    const matchesSearch = todo.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" ||
      (filter === "completed" ? todo.completed : !todo.completed);

    return matchesSearch && matchesFilter;
  });

  const closeModal = () => {
    setModalOpen(false);
    setEditingTodo(null);
  };

  const handleSubmit = (title) => {
    if (editingTodo) {
      dispatch(updateTodo({ id: editingTodo.id, title }));
    } else {
      dispatch(addTodo({ id: nanoid(), title, completed: false }));
    }
    closeModal();
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === "dark" ? "bg-blue-950" : "bg-slate-100"}`}>
      <Navbar onAddTask={() => setModalOpen(true)} />

      <main className="flex-1 pt-24">
        <div className="mx-auto w-full max-w-7xl px-6 py-6 flex flex-col gap-5">
          <Stats todos={todos} />
          <FilterTabs filter={filter} onFilterChange={(value) => dispatch(setFilter(value))} />
          <TodoList
            todos={visibleTodos}
            onDelete={(id) => dispatch(deleteTodo(id))}
            onEdit={(todo) => {
              setEditingTodo(todo);
              setModalOpen(true);
            }}
            onToggle={(id) => dispatch(toggleTodo(id))}
          />
        </div>
      </main>

      <TodoModal open={modalOpen} onClose={closeModal} onSubmit={handleSubmit} editingTodo={editingTodo} />
    </div>
  );
}

export default App
