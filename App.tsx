import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "./screens/SettingsScreen/SettingsScreen";
import { RootStackParamList } from "./types";
import NotificationsSettingsScreen from "./screens/SettingsScreen/NotificationsSettingsScreen";
import StatisticsScreen from "./screens/StatisticsScreen/StatisticsScreen";
import CompletedHabitScreen from "./screens/CompletedHabitScreen/CompletedHabitScreen";
import { COLORS } from "./constants/theme";

// SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<RootStackParamList>();

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
    <NavigationContainer>
      {/* <SafeAreaView onLayout={onLayoutRootView}> */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: COLORS.gray,
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen
          name="NotificationsSettings"
          component={NotificationsSettingsScreen}
        />
        <Stack.Screen name="Statistics" component={StatisticsScreen} />
        <Stack.Screen
          name="CompletedHabit"
          component={CompletedHabitScreen}
          // dynamic options
          // options={({ route, navigation }) => ({
          // title: route.params?.habitId.toString()
          // headerRight: () => <Text>test</Text>,
          // })}
        />
      </Stack.Navigator>
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}
