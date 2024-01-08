import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./books/bookSlice"
import styleReducer from "./style/styleSlice"
import userReducer from "./users/userSlice"
import filterReducer from "./filters/filterSlice"

export const store = configureStore({
    reducer: {
        book: bookReducer,
        style: styleReducer,
        user: userReducer,
        filter: filterReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;