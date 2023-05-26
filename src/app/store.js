import {configureStore} from '@reduxjs/toolkit';
import {rtkQueryApi} from "./rtkQueryApi";


export const store = configureStore({
    reducer: {
        // Automatically adds the RTK Query slice to your store
        [rtkQueryApi.reducerPath]: rtkQueryApi.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling, and other features of `rtk-query`
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rtkQueryApi.middleware),
});

// Hot reload the sessions reducers
if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rtkQueryApi', () => {
        const newApi = require('./rtkQueryApi').default;
        store.replaceReducer({
            [newApi.reducerPath]: newApi.reducer
        });
    });
}

/*// Type for the entire Redux store state (root state)
export type RootState = ReturnType<typeof store.getState>

// Type for the dispatch function
export type AppDispatch = typeof store.dispatch

export default store;*/




















/*import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {chatReducer} from "../features/chat/chatSlice";
import {authReducer} from "../features/auth/authSlice";


export const rootReducer = combineReducers({
    auth: authReducer,
    chat: chatReducer
})
// непосредственно создаём store
//export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export const store = configureStore({
    reducer: rootReducer,

})

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store*/


