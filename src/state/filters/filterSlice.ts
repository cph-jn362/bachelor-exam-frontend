import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    allBooks: true,
    hotPrices: false,
    boxedSets: false,
    newReleases: false,
  },
  reducers: {},
});

export default filterSlice.reducer;
