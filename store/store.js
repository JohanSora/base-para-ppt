import { configureStore } from "@reduxjs/toolkit";
import userActions from "./reducers/users.reducer";

export const store = configureStore({
  reducer: {
    user: userActions,
  },
});
