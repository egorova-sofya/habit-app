import React, { FC } from "react";
import { Text, StyleSheet } from "react-native";

import { COLORS } from "../../constants/theme";

interface Props extends React.ComponentProps<typeof Text> {}

const Title: FC<Props> = ({ children, ...props }) => {
  return (
    <Text {...props} style={[styles.title, props.style]}>
      {children}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: "Lato_400Regular",
    color: COLORS.black,
    textAlign: "center",
  },
});
