import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkQueryApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.green-api.com' }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ idInstance, apiTokenInstance }) => ({
                url: `/waInstance${idInstance}/getSettings/${apiTokenInstance}`,
                method: 'GET',
            }),
        }),
        receiveMessage: builder.mutation({
            query: ({ idInstance, apiTokenInstance }) => ({
                url: `/waInstance${idInstance}/receiveMessage/${apiTokenInstance}`,
                method: 'POST',
            }),
        }),
        sendMessage: builder.mutation({
            query: ({ chatId, message, idInstance, apiTokenInstance }) => {
                console.log("chatId:", chatId);
                console.log("message:", message);
                console.log("idInstance:", idInstance);
                console.log("apiTokenInstance:", apiTokenInstance);
                return {
                    url: `/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
                    method: 'POST',
                    body: {
                        chatId: chatId,
                        body: message
                    }
                };
            },
        }),

        logout: builder.mutation({
            query: ({ idInstance, apiTokenInstance }) => ({
                url: `/waInstance${idInstance}/logout/${apiTokenInstance}`,
                method: 'GET',
            }),
        }),
        getChats: builder.query({
            query: ({ idInstance, apiTokenInstance }) => `/waInstance${idInstance}/getChats/${apiTokenInstance}`,
        }),
        startNewChat: builder.mutation({
            query: ({ phoneNumber, idInstance, apiTokenInstance }) => ({
                url: `/waInstance${idInstance}/newChat/${phoneNumber}/${apiTokenInstance}`,
                method: 'POST',
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useSendMessageMutation,
    useReceiveMessageMutation,
    useLogoutMutation,
    useGetChatsQuery,
    useStartNewChatMutation,
} = rtkQueryApi;
