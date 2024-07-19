import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        todoMsg: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { payloadId, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === payloadId);
      if (todo) {
        todo.todoMsg = text;
      }
    },
    toggleCompleted: (state, action) => {
      const payloadId = action.payload;
      const todo = state.todos.find((todo) => (todo.id === payloadId));
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
