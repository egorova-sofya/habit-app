import React, { useState } from "react";
import styles from "./habitButton.style";
import { Dimensions, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { COLORS, SIZES } from "../../constants/theme";
import CustomRegularText from "../Text/CustomRegularText";

const width = Dimensions.get("screen").width;

const HabitButton = () => {
  const [active, setActive] = useState(false);
  const iconSize = width > SIZES.mediumViewportWidth ? 36 : 26;
  return (
    <Pressable onPress={() => setActive(!active)} style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={[styles.buttonStand, active && styles.buttonStandActive]}>
          <View style={[styles.button, active && styles.buttonActive]}>
            <Ionicons
              name="musical-notes"
              size={iconSize}
              color={COLORS.black}
            />
          </View>
        </View>
      </View>
      <CustomRegularText style={[active && styles.textActive, styles.text]}>
        Название задачи, которое может быть очень длинным
      </CustomRegularText>
    </Pressable>
  );
};

export default HabitButton;
