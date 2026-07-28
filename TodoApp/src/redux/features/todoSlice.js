import { createSlice } from "@reduxjs/toolkit";

const savedTodos = (() => {
  try {
    const value = localStorage.getItem("taskflow-todos");
    return value ? JSON.parse(value) : [];
  } catch {
    return [];
  }
})();

const initialState = {
  todos: Array.isArray(savedTodos) ? savedTodos : [],
  filter: "all",
  search: "",
  theme: "dark",
};

const todoSlice = createSlice({
  name: "todo",

  initialState,

  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    updateTodo: (state, action) => {
      const { id, title } = action.payload;

      const todo = state.todos.find(
        (todo) => todo.id === id
      );

      if (todo) {
        todo.title = title.trim();
      }
    },

    toggleTodo: (state, action) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload
      );

      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    completeAll: (state) => {
      state.todos.forEach((todo) => {
        todo.completed = true;
      });
    },

    clearCompleted: (state) => {
      state.todos = state.todos.filter(
        (todo) => !todo.completed
      );
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    toggleTheme: (state) => {
      state.theme =
        state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleTodo, completeAll, clearCompleted, setSearch, setFilter, toggleTheme, } = todoSlice.actions;

export default todoSlice.reducer;
