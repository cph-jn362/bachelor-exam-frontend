import { createSlice } from "@reduxjs/toolkit";

const styleSlice = createSlice({
    name: "style",
    initialState: {
        theme: "flat",
    },
    reducers: {
        toggleFlat(state) {
            state.theme = 'flat';
        },
        toggleSkeuo(state){
            state.theme = 'skeuo';
        }
    },
})

export default styleSlice.reducer;

export const { toggleFlat, toggleSkeuo } = styleSlice.actions;