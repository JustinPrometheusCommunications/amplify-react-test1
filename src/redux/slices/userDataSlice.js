import { createSlice } from "@reduxjs/toolkit";

const usersDataSlice = createSlice({
  name: "usersData",
  initialState: [
    { id: 1, username: "Justin" },
    { id: 2, username: "John" },
    { id: 3, username: "Tesh" },
  ],
  reducers: {
    deleteUser: (state, action) => {
      return state.filter((user) => {
        console.log("User Deleted");
        return user.id !== action.payload;
      });
    },
    addUser: (state, action) => {
      return state.concat({
        name: action.name,
        id: action.id,
      });
    },
  },
});

export default usersDataSlice.reducer;

export const { deleteUser } = usersDataSlice.actions;
