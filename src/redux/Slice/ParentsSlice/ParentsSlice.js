import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
export const PatchWishList = createAsyncThunk(
  "users/fetchByIdStatus",
  async (id, obj) => {
    const response = await axios.patch(
      `http://localhost:3000/babysitters/${id}`,
      obj
    );
    return response.data;
  }
);

export const PatchSitters = createAsyncThunk(
  "users/fetchUserStatus",
  async ({ id, data }) => {
    const response = await axios.patch(
      `http://localhost:3000/babysitters/${id}`,
      data
    );
    return response.data;
  }
);

  export const DeleteParent = createAsyncThunk(
    "users/fetcParentDelete",
    async (id) => {
      const response = await axios.delete(`http://localhost:3000/babysitterswanted/${id}`);
      return response.data;
    }
  );




  export const PushParent = createAsyncThunk(
    "users/fetcParentPush",
    async (newObject) => {
      const response = await axios.post(`http://localhost:3000/babysitterswanted/`, newObject);
      return response.data;
    }
  );




export const PatchParents = createAsyncThunk(
  "users/fetchUserStatus",
  async ({ id, data }) => {
    const response = await axios.patch(
      `http://localhost:3000/babysitterswanted/${id}`,
      data
    );
    return response.data;
  }
);


export const fetcBabysitterJobs = createAsyncThunk(
  "users/fetcBabysitterJobsStatus",
  async () => {
    const response = await axios(`http://localhost:3000/babysitterswanted`);
    return response.data;
  }
);



export const fetcBabysitterJobsDeatil = createAsyncThunk(
  "users/fetcBabysitterJobsDeatilStatus",
  async (id) => {
    const response = await axios(
      `http://localhost:3000/babysitterswanted/${id}`
    );
    return response.data;
  }
);
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
export const parents = createSlice({
  name: "ParentsData",
  initialState: {
    babysitterwanted: [],
    babysitterswanted: [],
    babysitters: [],
    babysitter: {},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(PushParent.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(PushParent.fulfilled, (state, action) => {
        state.babysitterswanted.push(action.payload); 
        state.loading = false;
      });
      builder.addCase(PushParent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });


    builder.addCase(DeleteParent.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(DeleteParent.fulfilled, (state, action) => {
        state.loading = false;
    });
    builder.addCase(DeleteParent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });

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

    

    builder.addCase(fetcBabysitterJobs.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetcBabysitterJobs.fulfilled, (state, action) => {
      state.babysitterswanted = action.payload;
      state.loading = false;
    });
    builder.addCase(fetcBabysitterJobs.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });





    builder.addCase(fetcBabysitterJobsDeatil.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetcBabysitterJobsDeatil.fulfilled, (state, action) => {
      state.babysitterwanted = action.payload;
      state.loading = false;
    });
    builder.addCase(fetcBabysitterJobsDeatil.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});
export const {} = parents.actions;

export default parents.reducer;
