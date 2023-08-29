import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_QUERY} from "../utils/utils.ts";
import {IUser, IVideos} from "../global-types/global-types.ts";


export const api = createApi({
    reducerPath: "",
    tagTypes: ['api'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_QUERY
    }),
    endpoints: builder => ({
        getUser: builder.query<IUser[], Array<IUser>>({
            query: () => '/users',
            providesTags: () => [{type: 'api'}]
        }),
        getOneUser: builder.query<IUser, string | undefined>({
            query: (id) => `/users/${id}`,
            providesTags: () => [{type: 'api'}]
        }),
        getVideos: builder.query<IVideos[], Array<IVideos>>({
            query: () => '/videos',
            providesTags: () => [{type: 'api'}]
        }),
        getOneVideo: builder.query<IVideos, string | undefined>({
            query: (id) => `/videos/${id}`,
            providesTags: () => [{type: 'api'}]
        }),
        createUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: () => [{type: 'api'}]
        }),
        createComment: builder.mutation({
            query: (video) => ({
                url: `/videos/${video.id}`,
                method: 'PUT',
                body: video,
            }),
            invalidatesTags: () => [{type: 'api'}]
        }),
        getAddSub: builder.mutation({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: 'PUT',
                body: user
            }),
            invalidatesTags: () => [{type: 'api'}]
        }),
    })
})

export const {useGetUserQuery, useGetAddSubMutation, useCreateCommentMutation, useCreateUserMutation, useGetVideosQuery, useGetOneVideoQuery, useGetOneUserQuery} = api