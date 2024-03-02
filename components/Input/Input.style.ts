import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  input: {
    borderColor: COLORS.black,
    borderWidth: 2,
    borderRadius: 90,
    fontSize: 12,
    lineHeight: 18,

    color: COLORS.black,
    paddingHorizontal: 20,
    paddingVertical: 12,
    width: "100%",
  },
});

export default styles;
