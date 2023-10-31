import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userToken: null,
};

const userSlice = createSlice({
  name: "userAuth",
  initialState, 
  reducers: {
    setCredentials: (state, action) => {
      localStorage.clear()
      state.user = action.payload.user
      state.userToken = action.payload.userToken
     
    },
   
    dropCredential: (state) => {
     state.user = null
     state.userToken = null
     localStorage.clear()
    },
  },
});

export const { setCredentials, dropCredential } = userSlice.actions;
export default userSlice.reducer;