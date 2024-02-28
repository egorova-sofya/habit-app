import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "./screens/SettingsScreen/SettingsScreen";
import { BottomTabParamList, RootStackParamList } from "./types";
import NotificationsSettingsScreen from "./screens/SettingsScreen/NotificationsSettingsScreen";
import StatisticsScreen from "./screens/StatisticsScreen/StatisticsScreen";
import CompletedHabitScreen from "./screens/CompletedHabitScreen/CompletedHabitScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Menu from "./components/Menu/Menu";
import HabitScreen from "./screens/HabitScreen/HabitScreen";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import { View } from "react-native";

// SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <Menu {...props} />}
      initialRouteName="Home"
    >
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

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
    <Provider store={store}>
      <NavigationContainer>
        {/* <SafeAreaView onLayout={onLayoutRootView}> */}
        <Stack.Navigator
          screenOptions={{
            headerShadowVisible: false,
            headerTitle: "",
          }}
        >
          <Stack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="NotificationsSettings"
            component={NotificationsSettingsScreen}
          />
          <Stack.Screen
            name="CompletedHabit"
            component={CompletedHabitScreen}

            // dynamic options
            // options={({ route, navigation }) => ({
            // title: route.params?.habitId.toString()
            // headerRight: () => <Text>test</Text>,
            // })}
          />
          <Stack.Screen name="Habit" component={HabitScreen} />
        </Stack.Navigator>
        {/* </SafeAreaView> */}
      </NavigationContainer>
    </Provider>
  );
}
