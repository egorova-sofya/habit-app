import React, { FC } from "react";
import { View } from "react-native";
import styles from "./ColorPicker.style";
import colors from "./../../data/colors.json";
import ColorButton from "./ColorButton";

const ColorPicker: FC = () => {
  return (
    <View style={styles.container}>
      {colors.map((color) => (
        <ColorButton key={color.name} {...color} />
      ))}
    </View>
  );
};

export default ColorPicker;
