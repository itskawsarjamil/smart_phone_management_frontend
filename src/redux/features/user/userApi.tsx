import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (payload) => {
        return {
          url: "/users/create-user",
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const { useRegisterMutation } = userApi;
