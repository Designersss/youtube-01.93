import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_QUERY} from "../utils/utils.ts";
import {IUser, IVideos} from "../global-types/global-types.ts";


export const api = createApi({
    reducerPath: "",
    baseQuery: fetchBaseQuery({
        baseUrl: API_QUERY
    }),
    endpoints: builder => ({
        getUser: builder.query<IUser[], Array<IUser>>({
            query: () => '/users'
        }),
        getOneUser: builder.query<IUser, string | undefined>({
            query: (id) => `/users/${id}`
        }),
        getVideos: builder.query<IVideos[], Array<IVideos>>({
            query: () => '/videos'
        }),
        getOneVideo: builder.query<IVideos, string | undefined>({
            query: (id) => `/videos/${id}`
        }),
        createUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user,
            })
        })
    })
})

export const {useGetUserQuery, useCreateUserMutation, useGetVideosQuery, useGetOneVideoQuery, useGetOneUserQuery} = api