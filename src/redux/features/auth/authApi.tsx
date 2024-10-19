import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => {
        // const param = new URLSearchParams();
        // if (params) {
        //   param.append("params", params);
        // }
        return {
          url: "/auth/login",
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
