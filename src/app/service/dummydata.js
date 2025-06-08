import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => "/products",
    }),

    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),

    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products/add",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
} = productsApi;
