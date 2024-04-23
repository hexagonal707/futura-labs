/*
import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./apiSlice.js";

export default configureStore({
  reducer: {
    apiData: DataReducer,
  },
});
*/

import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from "redux-persist";
import storage from "redux-persist/lib/storage";
import DataReducer from "./apiSlice.js";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({ apiData: DataReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
