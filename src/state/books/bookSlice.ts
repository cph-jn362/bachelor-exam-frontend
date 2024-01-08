import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BooksAPI } from "./BookAPI";
import { BookEntity } from "./BookEntity";

export const fetchAllBooks = createAsyncThunk(
  "books/fetchAllBooks",
  async (thunkAPI) => {
    const response = BooksAPI.fetchAllBooks();
    return response;
  }
);

interface BookState {
  book: BookEntity[];
}

const initialState = {
  book: [],
} as BookState;

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
      state.book = action.payload;
    });
  },
});

export default bookSlice.reducer;
