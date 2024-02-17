import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import newsSlice from "./news-slice";


const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    newsSlice: newsSlice
  },
});
export default store;