// authApi.js
import axios from 'axios';
import {instance} from "../../../api/apiBaseUrl";



/*const ID_INSTANCE = '1101824138';  // replace with actual idInstance
const API_TOKEN_INSTANCE = 'f9715a604e704343afe3b1af600a699de4e931a608f94ee3a3';
export const authApi = {
    login: (idInstance, apiTokenInstance) => {
        // API URL and request body as per greenAPI docs
        const apiUrl = `https://api.green-api.com/waInstance${ID_INSTANCE}/sendMessage/${API_TOKEN_INSTANCE}`;

        return axios
            .post(apiUrl)
            .then(response => {
                if (response.status === 200) {
                    return Promise.resolve({ isLoggedIn: true });
                }
            })
            .catch(error => {
                console.error('Login failed:', error);
                return Promise.reject({ message: 'Login failed.' });
            });
    },
    logout: () => {
        // replace this with real logout logic if needed
        return Promise.resolve({ isLoggedIn: false });
    },
};*/

const ID_INSTANCE = '1101824138';  // replace with actual idInstance
const API_TOKEN_INSTANCE = 'f9715a604e704343afe3b1af600a699de4e931a608f94ee3a3';
export const authApi = {
    login: async (idInstance, apiTokenInstance) => {
        //const apiUrl = `https://api.green-api.com/waInstance${idInstance}/${apiTokenInstance}`;
        return await instance.get(`/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`, { idInstance, apiTokenInstance });
    },
    /* logout: async () => {
      return await instance.post('auth/logout');
    },*/
};

