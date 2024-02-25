import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./statistics.style";
import CustomRegularText from "../Text/CustomRegularText";
import HabitButton from "../HabitButton/HabitButton";
import { useNavigation } from "@react-navigation/native";
import { IHabit, StackNavigation } from "../../types";
import habits from "./../../data/habits.json";

const Statistics = () => {
  const { navigate } = useNavigation<StackNavigation>();
  return (
    <View>
      <View style={styles.container}>
        <Text>Calendar</Text>
        <View style={styles.titleWrapper}>
          <CustomRegularText>10 сформированных привычек</CustomRegularText>
        </View>
        <FlatList
          data={habits}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <HabitButton
              habit={item as IHabit}
              onPress={() => navigate("CompletedHabit", { habitId: item.id })}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Statistics;
