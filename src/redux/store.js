import { configureStore } from "@reduxjs/toolkit";
import babysitter from "./Slice/BabySittersSlice/BabySittersSlice";
export default configureStore({
  reducer: {
    babysitters: babysitter,
  },
});
