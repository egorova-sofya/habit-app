import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 36,
    backgroundColor: COLORS.yellow,
  },
  menuButton: {},
  icon: {
    width: 24,
    height: 24,
  },
});

export default styles;
