import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";

import { COLORS } from "../../constants/theme";
const CustomRegularText: FC<{ children: string; style?: any }> = ({
  children,
  style,
}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Lato_400Regular",
    color: COLORS.black,
  },
});

export default CustomRegularText;
