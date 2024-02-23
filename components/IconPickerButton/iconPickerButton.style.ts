import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const buttonSize = 60;

const styles = StyleSheet.create({
  button: {
    height: buttonSize,
    width: buttonSize,
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.black,
    borderWidth: 2,
    borderRadius: buttonSize / 2,
  },
});

export default styles;
