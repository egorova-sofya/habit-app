import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    backgroundColor: COLORS.black,
    borderRadius: 70,
    width: "100%",
    position: "absolute",
    bottom: 16,
  },
  menuButton: {
    paddingVertical: 8,
    paddingHorizontal: 56,
  },
  menuSideButton: {
    paddingVertical: 8,
    paddingHorizontal: 22,
  },
  active: {
    backgroundColor: COLORS.green,
    borderRadius: 40,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default styles;
