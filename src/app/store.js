import { configureStore } from "@reduxjs/toolkit";
import { rtkQueryApi } from "./rtkQueryApi";

export const store = configureStore({
  reducer: {
    [rtkQueryApi.reducerPath]: rtkQueryApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkQueryApi.middleware),
});

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./rtkQueryApi", () => {
    const newApi = require("./rtkQueryApi").default;
    store.replaceReducer({
      [newApi.reducerPath]: newApi.reducer,
    });
  });
}
