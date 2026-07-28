import TodoCard from "./TodoCard";
import EmptyList from "./EmptyList";

const TodoList = ({
  todos,
  onDelete,
  onEdit,
  onToggle,
}) => {
  if (todos.length === 0) {
    return <EmptyList />;
  }

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;