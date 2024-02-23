import React, { FC, useState } from "react";
import { Pressable, Text } from "react-native";
import styles from "./dayOfWeekPicker.style";
import { COLORS } from "../../constants/theme";

interface Props {
  day: string;
}

const DayOfWeek: FC<Props> = ({ day }) => {
  const [checked, setChecked] = useState(false);

  const buttonColor = checked ? COLORS.black : COLORS.gray3;

  return (
    <Pressable
      onPress={() => setChecked(!checked)}
      key={day}
      style={[styles.button, { borderColor: buttonColor }]}
    >
      <Text
        style={[
          styles.text,
          { color: buttonColor, fontWeight: checked ? "700" : "400" },
        ]}
      >
        {day}
      </Text>
    </Pressable>
  );
};

export default DayOfWeek;
