import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./shoppingSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, shoppingReducer);

export const store = configureStore({
  reducer: {
    shopping: persistedReducer,
  },
});

export let persistor = persistStore(store);
