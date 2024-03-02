import React, { FC, useState } from "react";
import styles from "./timeOfDayButton.style";
import { Pressable, Text } from "react-native";
import { ITimeOfDay } from "../../types";
import { Ionicons } from "@expo/vector-icons";
import MorningIcon from "./../../assets/images/morning.svg";
import { COLORS } from "../../constants/theme";

interface Props extends ITimeOfDay {}

const TimeOfDayButton: FC<Props> = ({ title, time, value }) => {
  const [checked, setChecked] = useState(false);

  const buttonColor = checked ? COLORS.black : COLORS.gray3;
  const contentColor = checked ? COLORS.white : COLORS.gray3;
  return (
    <Pressable
      onPress={() => setChecked(!checked)}
      style={[
        styles.button,
        {
          borderColor: buttonColor,
          backgroundColor: checked ? COLORS.black : COLORS.white,
        },
      ]}
    >
      {value === "morning" ? (
        <MorningIcon width={19} height={19} fill={contentColor} />
      ) : null}
      {value === "day" ? (
        <Ionicons name="sunny" size={19} color={contentColor} />
      ) : null}
      {value === "evening" ? (
        <Ionicons name="moon" size={19} color={contentColor} />
      ) : null}

      <Text
        style={[
          styles.text,
          { color: contentColor, fontWeight: checked ? "700" : "400" },
        ]}
      >{`${title} (${time})`}</Text>
    </Pressable>
  );
};

export default TimeOfDayButton;
