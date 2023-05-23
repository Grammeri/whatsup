import {configureStore} from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        chat: chatReducer,
        // ...other reducers
    },
});

export default store;
