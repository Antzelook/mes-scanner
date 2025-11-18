import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getData: builder.query<{ id: number; value: string }[], void>({
      query: () => "data",
    }),
    addData: builder.mutation<{ id: number; value: string }, { value: string }>(
      {
        query: (body) => ({
          url: "data",
          method: "POST",
          body,
        }),
      }
    ),
  }),
});

export const { useGetDataQuery, useAddDataMutation } = api;
