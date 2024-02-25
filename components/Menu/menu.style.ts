import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  outsideContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    backgroundColor: COLORS.black,
    borderRadius: 70,
    width: "90%",
  },
  menuButton: {
    paddingVertical: 8,
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
