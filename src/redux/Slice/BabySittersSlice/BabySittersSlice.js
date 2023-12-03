import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
export const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {
    const response = await axios("http://localhost:3000/babysitters");
    return response.data;
  }
);
export const fetchUserByIdDetail = createAsyncThunk(
  "users/fetchByIdFDetailStatus",
  async (id) => {
    const response = await axios(`http://localhost:3000/babysitters/${id}`);
    return response.data;
  }
);
export const BabySitters = createSlice({
  name: "babysittersData",
  initialState: {
    babysitters: [],
    babysitter:{},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.babysitters.push(action.payload);
      state.loading = false;
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUserByIdDetail.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUserByIdDetail.fulfilled, (state, action) => {
      state.babysitter= action.payload
      state.loading = false;
    });
    builder.addCase(fetchUserByIdDetail.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});
export const {} = BabySitters.actions;

export default BabySitters.reducer;
