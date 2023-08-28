import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {API_QUERY} from "../utils/utils.ts";


export const api = createApi({
    reducerPath: "",
    baseQuery: fetchBaseQuery({
        baseUrl: API_QUERY
    }),
    endpoints: builder => ({
        getUser: builder.query({
            query: () => '/users'
        }),
        getOneUser: builder.query({
            query: (id) => `/users${id}`
        }),
        getVideos: builder.query({
            query: () => '/videos'
        }),
        getOneVideo: builder.query({
            query: (id) => `/videos/${id}`
        })
    })
})