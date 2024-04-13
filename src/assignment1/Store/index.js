import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../SliceWithMultiReducers/CountrySlice";
import authReducer from "../SliceWithMultiReducers/AuthSlice";

const store = configureStore({
  reducer: {
    country: countryReducer,
    auth: authReducer
  }
});

export default store;
