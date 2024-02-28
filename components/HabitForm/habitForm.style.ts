import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "column",
    alignItems: "center",
    gap: SIZES.titleBottomIndent,
    marginBottom: 40,
  },
  input: {
    borderColor: COLORS.black,
    borderWidth: 2,
    borderRadius: 90,
    fontSize: 12,
    color: COLORS.black,
    paddingHorizontal: 20,
    paddingVertical: 12,
    width: "100%",
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
