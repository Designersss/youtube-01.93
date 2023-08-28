import {combineReducers} from "@reduxjs/toolkit";
import {api} from "../api/api.ts";
import {userSlice} from "./slices/userSlice.ts";


export const globalReducers = combineReducers({
    user: userSlice.reducer,
    [api.reducerPath]: api.reducer
})