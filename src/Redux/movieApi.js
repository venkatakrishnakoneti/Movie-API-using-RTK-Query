import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const apikey = "960acb1c"
export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({baseUrl:'https://www.omdbapi.com'}),
    endpoints: (builder) => ({
        getMovieByName: builder.query({
            query:() => `?apikey=${apikey}&t=harry`,
        }),
    }),
})

export const { useGetMovieByNameQuery } = movieApi