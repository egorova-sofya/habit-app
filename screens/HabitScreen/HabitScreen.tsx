import React, { FC, useLayoutEffect } from "react";
import HabitForm from "../../components/HabitForm/HabitForm";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { Pressable } from "react-native";
import { COLORS } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { updateHabits } from "../../app/store/habitSlice";

interface Props {
  route: RouteProp<RootStackParamList, "Habit">;
  navigation: NavigationProp<RootStackParamList, "Habit">;
}
const HabitScreen: FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
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
    <HabitForm
      onSave={() => {
        dispatch(
          updateHabits({
            id: 1,
            title: "Вставать в 7 утра",
            time: ["morning"],
            day: ["monday", "tuesday", "wednesday", "thursday", "friday"],
            icon: "time",
            color: "#F4D66E",
            progress: 0,
          })
        );
      }}
    />
  );
};

export default HabitScreen;
