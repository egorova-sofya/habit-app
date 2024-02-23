import { StyleSheet } from "react-native";

const buttonSize = 35;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  button: {
    height: buttonSize,
    width: buttonSize,
    borderWidth: 7,
    borderRadius: buttonSize / 2,
  },
});

export default styles;
