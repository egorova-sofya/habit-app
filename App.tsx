import { StatusBar } from "expo-status-bar";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Menu from "./components/Menu/Menu";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="enter your task here"
        />
        <Button title="add task" />
      </View>
      <View>
        <Text>tasks list...</Text>
      </View>
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
  },
});
