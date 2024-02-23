import React, { FC } from "react";
import styles from "./button.style";
import { Pressable, StyleProp, Text, ViewStyle } from "react-native";

interface Props extends React.ComponentProps<typeof Pressable> {
  children: string;
  style?: StyleProp<ViewStyle>;
}

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <Pressable {...props} style={[styles.button, props.style]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;
