import React, { FC } from "react";
import { Pressable } from "react-native";
import styles from "./iconPickerButton.style";
import { Ionicons } from "@expo/vector-icons";

interface Props extends React.ComponentProps<typeof Pressable> {}
const IconPickerButton: FC<Props> = ({ ...props }) => {
  return (
    <Pressable {...props} style={styles.button}>
      <Ionicons name="add" size={22} color="black" />
    </Pressable>
  );
};

export default IconPickerButton;
