import { configureStore } from "@reduxjs/toolkit";
import babysitter from "./Slice/BabySittersSlice/BabySittersSlice";
import babysitterswanted from "./Slice/RegisterSlice/RegisterSlice";
import parents from './Slice/ParentsSlice/ParentsSlice'
export default configureStore({
  reducer: {
    babysitters: babysitter,
    babysitterswanted: babysitterswanted,
    babysitterswanted:parents,
  },
});
