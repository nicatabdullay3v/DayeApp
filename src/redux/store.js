import { configureStore } from "@reduxjs/toolkit";
import babysitter from "./Slice/BabySittersSlice/BabySittersSlice";
import babysitterswanted from "./Slice/RegisterSlice/RegisterSlice";
export default configureStore({
  reducer: {
    babysitters: babysitter,
    babysitterswanted: babysitterswanted,
  },
});
