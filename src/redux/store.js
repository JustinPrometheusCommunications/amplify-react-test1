import { configureStore } from "@reduxjs/toolkit";

import usersDataReducer from "./slices/userDataSlice";

const store = configureStore({
  reducer: {
    usersData: usersDataReducer,
  },
});

export default store;
