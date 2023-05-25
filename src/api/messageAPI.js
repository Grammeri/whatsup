import { instance } from './apiBaseUrl';

const ID_INSTANCE = '1101824138';
const API_TOKEN_INSTANCE = 'f9715a604e704343afe3b1af600a699de4e931a608f94ee3a3';

export const messageApi = {
    sendMessage: (chatId, message) => {
        return instance.post(`/waInstance${ID_INSTANCE}/SendMessage/${API_TOKEN_INSTANCE}`, {
            chatId,
            message,
        });
    },
    receiveMessage: () => {
        return instance.get(`/${ID_INSTANCE}/ReceiveMessage/${API_TOKEN_INSTANCE}`);
    }
};
