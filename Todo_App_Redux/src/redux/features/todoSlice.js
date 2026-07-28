import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],

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
        todo.title = title;
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

export const { addTodo, deleteTodo, updateTodo, toggleTodo, clearCompleted, setSearch, setFilter, toggleTheme, } = todoSlice.actions;

export default todoSlice.reducer;
