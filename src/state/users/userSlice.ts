import { UserAPI } from "./UserAPI";
import { UserEntity } from "./UserEntity";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const signup = createAsyncThunk(
    "users/signup",
    async(user: UserEntity, thunkAPI) => {
        const response = await UserAPI.signup(user);
        return response;
    }
);

interface UserState{
    token: string | undefined | null;
    error: string | undefined;
}

const initialState = {
    token: undefined,
    error: undefined,
} as UserState;

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(signup.fulfilled, (state, action) => {
            console.log("run signup fulfilled");
            state.error = undefined;
            if(action.payload.id != undefined){
                state.error = "Signup | success"
            }
        })
    }

})

export default userSlice.reducer;