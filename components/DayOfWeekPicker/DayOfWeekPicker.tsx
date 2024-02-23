import React from "react";
import { Text, View } from "react-native";
import { IDayOfWeekEnum } from "../../types";
import DayOfWeek from "./DayOfWeek";
import styles from "./dayOfWeekPicker.style";

const DayOfWeekPicker = () => {
  return (
    <View style={styles.container}>
      {Object.values(IDayOfWeekEnum).map((day) => (
        <DayOfWeek key={day} day={day} />
      ))}
    </View>
  );
};

export default DayOfWeekPicker;
