import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { greenAPI } from "./api";

const store = configureStore({
    reducer: {
        // Your other reducers
        [greenAPI.reducerPath]: greenAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(greenAPI.middleware)
});

setupListeners(store.dispatch);

export default store;

