import {combineReducers, configureStore} from '@reduxjs/toolkit';
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
window.store = store


