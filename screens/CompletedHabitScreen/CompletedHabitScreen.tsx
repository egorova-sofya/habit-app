import React, { FC, useLayoutEffect } from "react";
import HabitForm from "../../components/HabitForm/HabitForm";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { IHabit, RootStackParamList } from "../../types";
import habits from "./../../data/habits.json";
import { Pressable, View } from "react-native";
import { COLORS } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import MainLayout from "../../components/Layouts/MainLayout";

interface Props {
  route: RouteProp<RootStackParamList, "CompletedHabit">;
  navigation: NavigationProp<RootStackParamList, "CompletedHabit">;
}
const CompletedHabitScreen: FC<Props> = ({ route, navigation }) => {
  const id = route.params?.habitId;
  const habit = habits.find((item) => item.id === id);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="close" size={26} color={COLORS.black} />
        </Pressable>
      ),
      headerShown: true,
      headerTitle: "",
      headerLeft: () => "",
      headerShadowVisible: false,
      contentStyle: {
        backgroundColor: COLORS.white,
      },
    });
  }, []);

  return (
    <MainLayout>
      <HabitForm onSave={() => {}} savedHabit={habit as IHabit} />
    </MainLayout>
  );
};

export default CompletedHabitScreen;
