import { createSlice } from "@reduxjs/toolkit";

const checkSessionStorage = () => {
    let isAuth = sessionStorage.getItem("isAuthenticated");
    if(isAuth)
        return true;
    return false;    
}

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      sessionStorage.setItem("token", action.payload);
      sessionStorage.setItem("isAuthenticated", true);
    },
    logout(state) {
      console.log("===logout action called====");
      state.isAuthenticated = false;
      sessionStorage.removeItem("token");
      sessionStorage.setItem("isAuthenticated", false);
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
