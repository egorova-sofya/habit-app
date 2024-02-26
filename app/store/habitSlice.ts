import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IHabit } from "../../types";

const initialState = {
  habits: null as Array<IHabit> | null,
};

export type habitSliceReducerType = typeof initialState;

export const habitSlice = createSlice({
  name: "habitSlice",
  initialState,
  reducers: {
    updateHabits: (state, action: PayloadAction<IHabit>) => {
      state.habits = state.habits
        ? [action.payload, ...state.habits]
        : [action.payload];
    },
  },
});

export const { updateHabits } = habitSlice.actions;

export default habitSlice.reducer;

export const getHabitSlice = (state: RootState): habitSliceReducerType =>
  state.habitSlice;
