import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import Home from "./screens/Home/Home";
import { SafeAreaView } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
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
    <SafeAreaView onLayout={onLayoutRootView}>
      <Home />
    </SafeAreaView>
  );
}
