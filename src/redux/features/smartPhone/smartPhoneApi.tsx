import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { TQueryParam, TResponse } from "../../../types";
import { baseApi } from "../../api/baseApi";

const smartPhoneApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSmartPhones: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/smartphone/get-all-smartphones",
          method: "GET",
          params: params,
        };
      },
      //   providesTags: ["offeredCourse"],
      transformResponse: (response: TResponse<any>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    // addMark: builder.mutation({
    //   query: (data) => ({
    //     url: "/enrolled-courses/update-enrolled-course-marks",
    //     method: "PATCH",
    //     body: data,
    //   }),
    // }),
  }),
});

export const { useGetAllSmartPhonesQuery } = smartPhoneApi;
