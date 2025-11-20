import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getData: builder.query<{ id: number; value: string }[], void>({
      query: () => "data",
    }),
    addError: builder.mutation({
      query: (body) => ({
        url: "errorForm",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetDataQuery, useAddErrorMutation } = api;
