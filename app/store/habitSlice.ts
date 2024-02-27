import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IHabit } from "../../types";
import habits from "./../../data/habits.json";

const initialState = {
  // habits: null as Array<IHabit> | null,
  habits: habits as Array<IHabit> | null,
};

export type habitSliceReducerType = typeof initialState;

export const habitSlice = createSlice({
  name: "habitSlice",
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<IHabit>) => {
      state.habits = state.habits
        ? [action.payload, ...state.habits]
        : [action.payload];
    },
    removeHabit: (state, action: PayloadAction<{ id: number }>) => {
      if (state.habits)
        state.habits = state.habits?.filter(
          (item) => item.id !== action.payload.id
        );
    },
  },
});

export const { addHabit, removeHabit } = habitSlice.actions;

export default habitSlice.reducer;

export const getHabitSlice = (state: RootState): habitSliceReducerType =>
  state.habitSlice;
