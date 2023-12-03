import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  }
);
export const BabySitters = createSlice({
  name: "counter",
  initialState: {
    babysitters: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.entities.push(action.payload);
    });
  },
});
export const {} = BabySitters.actions;

export default BabySitters.reducer;
