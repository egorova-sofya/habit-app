import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Menu from "./components/Menu/Menu";
import HabitButton from "./components/HabitButton/HabitButton";
import Morning from "./assets/images/morning.svg";

import { COLORS, SHADOWS } from "./constants/theme";
import HabitForm from "./components/HabitForm/HabitForm";
import { useCallback, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [showModal, setShowModal] = useState(false);

  let [fontsLoaded, fontError] = useFonts({
    Lato_700Bold,
    Lato_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.appContainer} onLayout={onLayoutRootView}>
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Morning width={26} height={26} fill={COLORS.black} />
          <Text>Утро</Text>
        </View>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <HabitButton key={item} />
        ))}
      </View>

      <Menu setShowModal={setShowModal} />
      <HabitForm showModal={showModal} setShowModal={setShowModal} />
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
