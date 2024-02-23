import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.green,
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 54,
  },
  text: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 23,
  },
});

export default styles;
