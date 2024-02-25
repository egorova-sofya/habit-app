import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  appContainer: {
    marginHorizontal: SIZES.horizontalIndent,
    paddingVertical: 32,
    position: "relative",
    height: "100%",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    rowGap: 20,
    columnGap: 4,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 20,
    ...SHADOWS.medium,
  },
  titleWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
});

export default styles;
