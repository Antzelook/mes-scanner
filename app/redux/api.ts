import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getErrorRecords: builder.query({
      query: () => "errorForm",
    }),
    createErrorRecord: builder.mutation({
      query: (body) => ({
        url: "errorForm",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetErrorRecordsQuery, useCreateErrorRecordMutation } = api;
