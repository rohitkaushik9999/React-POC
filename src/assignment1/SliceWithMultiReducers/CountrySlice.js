import { createSlice } from "@reduxjs/toolkit";

const initialCountryState = { countryCode: "+91", countryName: "INDIA" };

const CountrySlice = createSlice({
  name: "country",
  initialState: initialCountryState,
  reducers: {
    updateCountryName(state, action) {
      state.countryName = action.payload;
    },
    updateCountryCode(state, action) {
      state.countryCode = action.payload;
    },
  },
});

export const CountryActions = CountrySlice.actions;

export default CountrySlice.reducer;
