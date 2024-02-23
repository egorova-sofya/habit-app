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
