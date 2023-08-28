import {configureStore} from "@reduxjs/toolkit";
import {globalReducers} from "./globalReducers.ts";
import {api} from "../api/api.ts";


export const store = configureStore({
    reducer: globalReducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>