import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "../features/todo/todoSlice";
import { useEffect } from "react";

export const store = configureStore({
    reducer : todoReducer
});
