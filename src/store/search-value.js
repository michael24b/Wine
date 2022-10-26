import { createSlice } from "@reduxjs/toolkit";

const searchValue = createSlice({
  name: "sv",
  initialState: {
    accessToken: "",
  },

  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
  },
});

export const svActions = searchValue.actions;

export default searchValue;
