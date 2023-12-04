import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

export const babysitterswanted = createSlice({
  name: "babysitterswanted",
  initialState: {
    babysittersWanteds: [],
    babysitterWanted: {},
    loading: false,
    isParent: false,
    isBabysitter: false,
    error: "",
    userBabysitter: {},
    userParent: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  },
  reducers: {
    getFirstName: (state, action) => {
      state.user.firstName = action.payload;
    },
    getLastName: (state, action) => {
      state.user.lastName = action.payload;
    },
    getEmail: (state, action) => {
      state.user.email = action.payload;
    },
    getPassword: (state, action) => {
      state.user.password = action.payload;
    },
    getIsParent: (state, action) => {
      state.isParent = action.payload;
    },
    getIsBabysitter: (state, action) => {
      state.isBabysitter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.babysitters = action.payload;
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
      state.babysitter = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUserByIdDetail.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});
export const {
  getFirstName,
  getLastName,
  getEmail,
  getPassword,
  getIsParent,
  getIsBabysitter,
} = babysitterswanted.actions;

export default babysitterswanted.reducer;
