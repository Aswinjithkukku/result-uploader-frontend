import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices";

const store = configureStore({
   reducer: {
      users: userReducer,
   },
   devTools: true,
});

export default store;
