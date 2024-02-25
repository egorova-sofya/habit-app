import { NavigationProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export enum ITimeOfDayEnum {
  "morning" = "Утро",
  "day" = "День",
  "evening" = "Вечер",
}

export type ITimeOfDayEnumOfValues =
  (typeof ITimeOfDayEnum)[keyof typeof ITimeOfDayEnum];
export type ITimeOfDayEnumOfKeys = keyof typeof ITimeOfDayEnum;

export enum IDayOfWeekEnum {
  "monday" = "пн",
  "tuesday" = "вт",
  "wednesday" = "ср",
  "thursday" = "чт",
  "friday" = "пт",
  "saturday" = "сб",
  "sunday" = "вс",
}

export type IDayOfWeekEnumOfValues =
  (typeof IDayOfWeekEnum)[keyof typeof IDayOfWeekEnum];
export type IDayOfWeekEnumOfKeys = keyof typeof IDayOfWeekEnum;

export interface IDayOfWeek {
  title: IDayOfWeekEnumOfValues;
  value: IDayOfWeekEnumOfKeys;
}

export interface ITimeOfDay {
  title: ITimeOfDayEnumOfValues;
  value: ITimeOfDayEnumOfKeys;
  time: string;
}

export interface IColor {
  name: string;
  value: string;
}

export interface IHabit {
  id: number;
  title: string;
  time: Array<ITimeOfDayEnumOfKeys>;
  day: Array<IDayOfWeekEnumOfKeys>;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  progress: number;
}

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  NotificationsSettings: undefined;
  Statistics: undefined;
  CompletedHabit: undefined | { habitId: number };
};

export type StackNavigation = NavigationProp<RootStackParamList>;
