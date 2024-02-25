import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const width = Dimensions.get("screen").width;
const buttonSize = width > SIZES.largeViewportWidth ? 52 : 40;
const containerSize = width > SIZES.largeViewportWidth ? 120 : 100;

const styles = StyleSheet.create({
  container: {
    width: containerSize,
    alignItems: "center",
  },
  buttonContainer: {
    marginBottom: 4,
  },
  button: {
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize / 2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  buttonStand: {
    paddingBottom: 5,
    width: buttonSize,
    borderRadius: buttonSize / 2,
  },
  text: {
    fontFamily: "Lato_400Regular",
    textAlign: "center",
    fontSize: 12,
  },
  textActive: {
    textDecorationLine: "line-through",
  },
});

export default styles;
