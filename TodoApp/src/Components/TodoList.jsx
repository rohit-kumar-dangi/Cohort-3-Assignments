import TodoCard from "./TodoCard";
import EmptyList from "./EmptyList";
import { useSelector } from "react-redux";

const TodoList = ({ openForm }) => {

    const { todos, filter, search } = useSelector((state) => state.todo)
    const visibleTodos = todos.filter((todo) => {
      const matchesFilter = filter === "all" || (filter === "active" ? !todo.completed : todo.completed);
      return matchesFilter && todo.title.toLowerCase().includes(search.trim().toLowerCase());
    });

  if (visibleTodos.length === 0) return <EmptyList hasTodos={todos.length > 0} />;

  return (
    <div className="space-y-4">
      {visibleTodos.map((todo) => (
        <TodoCard 
          key={todo.id}
          todo={todo}
          openForm={openForm}
        />
      ))}
    </div>
  );
};

export default TodoList;
