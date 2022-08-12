import { configureStore } from "@reduxjs/toolkit";
import updateForm from "../feature/updateForm";

export const store = configureStore({
  reducer: {
    form: updateForm,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
