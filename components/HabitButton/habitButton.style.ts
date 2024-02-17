import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: 112,
    alignItems: "center",
  },
  buttonContainer: {
    marginBottom: 4,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
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
    width: 52,
    borderRadius: 52 / 2,
    backgroundColor: COLORS.gray4,
  },
  buttonStandActive: {
    backgroundColor: COLORS.darkBlue,
  },
  text: {
    textAlign: "center",
    fontSize: 12,
  },
  textActive: {
    textDecorationLine: "line-through",
  },
});

export default styles;
