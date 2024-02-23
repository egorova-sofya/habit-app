import React, { FC, useState } from "react";
import { Pressable } from "react-native";
import styles from "./ColorPicker.style";
import { COLORS } from "../../constants/theme";
import { IColor } from "../../types";
import { changeColorShade } from "../../utils/changeColorShade";

interface Props extends IColor {}

const ColorButton: FC<Props> = ({ value }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Pressable
      onPress={() => setChecked(!checked)}
      style={[
        styles.button,
        {
          backgroundColor: value,
          borderColor: checked
            ? `#${changeColorShade(value, -30)}`
            : COLORS.gray3,
        },
      ]}
    />
  );
};

export default ColorButton;
