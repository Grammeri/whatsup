import { instance } from "common/api/common.api";

export const messageApi = {
    sendMessage: (chatId, message) => {
        return instance.post(`waInstance/{{idInstance}}/SendMessage/{{apiTokenInstance}}`, {
            chatId,
            message,
        });
    },
    receiveMessage: () => {
        return instance.get(`waInstance/{{idInstance}}/ReceiveMessage/{{apiTokenInstance}}`);
    }
};









/*import axios from 'axios';

const greenAPI = {
    sendMessage: async (chatId, message) => {
        try {
            const response = await axios.post(
                `https://api.green-api.com/waInstance{{idInstance}}/SendMessage/{{apiTokenInstance}}`,
                {
                    chatId,
                    message
                }
            );
            return response.data;
        } catch (error) {
            // Handle error
            console.error(error);
            throw error;
        }
    },
    // Add other API functions as needed
};

export default greenAPI;*/
