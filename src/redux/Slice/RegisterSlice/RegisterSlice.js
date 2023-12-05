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
    userBabysitter: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      education: "",
      experienceYear: "",
      experienceChildrenAge: "",
      about: "",
      price: "",
      wishList: [],
    },
    userParent: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      numberofChildren: "",
      childrenAge: "",
      about: "",
      wishList: [],
    },
  },
  reducers: {
    getFirstName: (state, action) => {
      state.userParent.firstName = action.payload;
      state.userBabysitter.firstName = action.payload;
    },
    //
    getLastName: (state, action) => {
      state.userParent.lastName = action.payload;
      state.userBabysitter.lastName = action.payload;
    },
    getEmail: (state, action) => {
      console.log(action.payload);
      state.userParent.email = action.payload;
      state.userBabysitter.email = action.payload;
    },
    getPassword: (state, action) => {
      state.userParent.password = action.payload;
      state.userBabysitter.password = action.payload;
    },
    getIsParent: (state, action) => {
      state.isParent = action.payload;
    },
    getIsBabysitter: (state, action) => {
      state.isBabysitter = action.payload;
    },
    getAdress: (state, action) => {
      state.userParent.address = action.payload;
      state.userBabysitter.address = action.payload;
    },
    getNumberofChildren: (state, action) => {
      state.userParent.numberofChildren = action.payload;
    },
    getChildrenAge: (state, action) => {
      state.userParent.childrenAge = action.payload;
      state.userBabysitter.experienceChildrenAge = action.payload;
    },
    getAbout: (state, action) => {
      state.userParent.about = action.payload;
      state.userBabysitter.about = action.payload;
    },
    getBabysitterEducation: (state, action) => {
      state.userBabysitter.education = action.payload;
    },
    getExperienceYear: (state, action) => {
      state.userBabysitter.experienceYear = action.payload;
    },
    getPrice: (state, action) => {
      state.userBabysitter.price = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.babysittersWanteds = action.payload;
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
      state.babysitterWanted = action.payload;
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
  getAdress,
  getNumberofChildren,
  getChildrenAge,
  getAbout,
  getBabysitterEducation,
  getExperienceYear,
  getPrice,
} = babysitterswanted.actions;

export default babysitterswanted.reducer;
