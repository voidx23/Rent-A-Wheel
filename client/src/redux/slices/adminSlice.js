import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: null,
  adminToken: null,
};

const adminSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      localStorage.clear()
      state.admin = action.payload.admin
      state.adminToken = action.payload.adminToken
     
    },
   
    dropCredential: (state) => {
     state.admin = null
     state.adminToken = null
     localStorage.clear()
    },
  },
});

export const { setCredentials, dropCredential } = adminSlice.actions;
export default adminSlice.reducer;