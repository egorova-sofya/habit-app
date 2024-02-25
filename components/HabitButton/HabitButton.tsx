import React, { FC, useState } from "react";
import styles from "./habitButton.style";
import { Dimensions, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { COLORS, SIZES } from "../../constants/theme";
import CustomRegularText from "../Text/CustomRegularText";
import { IHabit } from "../../types";
import { changeColorShade } from "../../utils/changeColorShade";

const width = Dimensions.get("screen").width;

interface Props {
  habit: IHabit;
  onPress?: () => void;
}

const HabitButton: FC<Props> = ({ habit, onPress }) => {
  const [active, setActive] = useState(false);
  const iconSize = width > SIZES.mediumViewportWidth ? 36 : 26;
  const handlePress = () => {
    setActive(!active);
    if (onPress) onPress();
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View style={styles.buttonContainer}>
        <View
          style={[
            styles.buttonStand,
            {
              backgroundColor: active
                ? `#${changeColorShade(habit.color, -30)}`
                : COLORS.gray4,
            },
          ]}
        >
          <View
            style={[
              styles.button,
              { backgroundColor: active ? habit.color : COLORS.gray2 },
            ]}
          >
            <Ionicons name={habit.icon} size={iconSize} color={COLORS.black} />
          </View>
        </View>
      </View>
      <CustomRegularText style={[active && styles.textActive, styles.text]}>
        {habit.title}
      </CustomRegularText>
    </Pressable>
  );
};

export default HabitButton;
