import React, { useState } from "react";
import styles from "./habitButton.style";
import { Pressable, Text, View } from "react-native";
import MusicalNotes from "./../../assets/images/musical-notes.svg";

import { COLORS } from "../../constants/theme";

const HabitButton = () => {
  const [active, setActive] = useState(false);
  return (
    <Pressable onPress={() => setActive(!active)} style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={[styles.buttonStand, active && styles.buttonStandActive]}>
          <View style={[styles.button, active && styles.buttonActive]}>
            <MusicalNotes fill={COLORS.black} height={36} width={36} />
          </View>
        </View>
      </View>
      <Text style={[active && styles.textActive, styles.text]}>
        Название задачи, которое может быть очень длинным
      </Text>
    </Pressable>
  );
};

export default HabitButton;
