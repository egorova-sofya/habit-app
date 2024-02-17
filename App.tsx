import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Menu from "./components/Menu/Menu";
import HabitButton from "./components/HabitButton/HabitButton";

import { COLORS } from "./constants/theme";
import Title from "./components/Title/Title";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.container}>
        <Title>Утро</Title>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <HabitButton key={item} />
        ))}
      </View>

      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginHorizontal: 16,
    paddingVertical: 32,
    position: "relative",
    height: "100%",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 20,
    columnGap: 4,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 4,
    paddingVertical: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
  },
});
