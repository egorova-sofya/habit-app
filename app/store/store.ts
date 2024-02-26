import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import habitSlice from "./habitSlice";

const combinedReducer = combineReducers({ habitSlice });

export const store = configureStore({
  reducer: combinedReducer,
});

store.subscribe(
  async () =>
    await AsyncStorage.setItem("store", JSON.stringify(store.getState()))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
