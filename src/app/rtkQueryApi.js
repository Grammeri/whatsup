import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkQueryApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.green-api.com" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ idInstance, apiTokenInstance }) => ({
        url: `/waInstance${idInstance}/getSettings/${apiTokenInstance}`,
        method: "GET",
      }),
    }),
    receiveNotification: builder.query({
      query: ({ idInstance, apiTokenInstance }) => ({
        url: `/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
        method: "GET",
      }),
    }),

    deleteNotification: builder.mutation({
      query: ({ idInstance, apiTokenInstance, receiptId }) => ({
        url: `/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`,
        method: "DELETE",
      }),
    }),
    sendMessage: builder.mutation({
      query: ({ chatId, message, idInstance, apiTokenInstance }) => {
        return {
          url: `/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
          method: "POST",
          body: {
            chatId: chatId,
            body: message,
          },
        };
      },
    }),

    logout: builder.mutation({
      query: ({ idInstance, apiTokenInstance }) => ({
        url: `/waInstance${idInstance}/logout/${apiTokenInstance}`,
        method: "GET",
      }),
    }),
    getChats: builder.query({
      query: ({ idInstance, apiTokenInstance }) =>
        `/waInstance${idInstance}/getChats/${apiTokenInstance}`,
    }),

    startNewChat: builder.mutation({
      query: ({ phoneNumber, idInstance, apiTokenInstance }) => ({
        url: `/waInstance${idInstance}/createGroup/${apiTokenInstance}`,
        method: "POST",
        body: {
          groupName: "Elvira",
          chatIds: ["18328772285@c.us", "18327947639@c.us"],
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSendMessageMutation,
  useLogoutMutation,
  useGetChatsQuery,
  useStartNewChatMutation,
  useReceiveNotificationQuery,
  useDeleteNotificationMutation,
} = rtkQueryApi;
