import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebar";
import categoryReducer from "./category";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    category: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
