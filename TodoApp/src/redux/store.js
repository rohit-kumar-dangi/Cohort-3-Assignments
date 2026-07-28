import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

store.subscribe(() => {
  try {
    localStorage.setItem("taskflow-todos", JSON.stringify(store.getState().todo.todos));
  } catch {
    // The app remains usable when browser storage is unavailable.
  }
});

export default store
