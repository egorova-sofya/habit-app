import { Dimensions, StyleSheet } from "react-native";
const width = Dimensions.get("screen").width;

import { SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: width <= SIZES.mediumViewportWidth ? 8 : 12,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
  },
  text: {
    textTransform: "uppercase",
    fontSize: 12,
  },
});

export default styles;
