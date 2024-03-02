import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "column",
    alignItems: "center",
    gap: SIZES.titleBottomIndent,
    marginBottom: 40,
  },

  timeWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 4,
  },
  saveButtonWrapper: {
    alignItems: "center",
    paddingBottom: 40,
  },
});

export default styles;
