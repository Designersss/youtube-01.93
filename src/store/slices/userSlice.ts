import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../global-types/global-types.ts";

const initialState = {
    user: <IUser>{}
}
export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const {actions, reducer} = userSlice