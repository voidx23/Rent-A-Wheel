import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/userSlice";
import vendorReducer from "./slices/vendorSlice";
import adminReducer from "./slices/adminSlice";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    
};

const reducers = combineReducers({
    user: userReducer,
    vendor: vendorReducer,
    admin: adminReducer,
});

const persistedReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);
