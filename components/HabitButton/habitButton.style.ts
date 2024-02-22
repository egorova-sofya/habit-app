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
    backgroundColor: COLORS.gray2,
    alignItems: "center",
    position: "relative",
  },
  buttonActive: {
    backgroundColor: COLORS.lightBlue,
  },
  buttonStand: {
    paddingBottom: 5,
    width: buttonSize,
    borderRadius: buttonSize / 2,
    backgroundColor: COLORS.gray4,
  },
  buttonStandActive: {
    backgroundColor: COLORS.darkBlue,
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
