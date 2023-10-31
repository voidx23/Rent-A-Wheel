import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vendor: null,
    token: null,
};

const vendorSlice = createSlice({
    name: "vendorAuth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            localStorage.clear()
            state.vendor = action.payload.vendor;
            state.token = action.payload.token;

        },

        dropCredential: (state) => {
            state.vendor = null;
            state.token = null;
            localStorage.clear()
        },
    },
});

export const { setCredentials, dropCredential } = vendorSlice.actions;
export default vendorSlice.reducer;