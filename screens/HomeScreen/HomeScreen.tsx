import React, { FC, useState } from "react";
import { Modal, View, Text } from "react-native";
import styles from "./homeScreen.style";
import Morning from "./../../assets/images/morning.svg";
import CustomRegularText from "../../components/Text/CustomRegularText";
import HabitButton from "../../components/HabitButton/HabitButton";
import HabitForm from "../../components/HabitForm/HabitForm";

import { COLORS } from "../../constants/theme";
import { NavigationProp } from "@react-navigation/native";
import { IHabit, RootStackParamList } from "../../types";
// import habits from "./../../data/habits.json";
import { useSelector } from "react-redux";
import { getHabitSlice } from "../../app/store/habitSlice";

interface Props {
  navigation: NavigationProp<RootStackParamList>;
}

const HomeScreen: FC<Props> = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const habits = useSelector(getHabitSlice).habits;

  if (!habits)
    return (
      <View>
        <Text>Привычки пока не созданы</Text>
      </View>
    );

  return (
    <View style={styles.appContainer}>
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Morning width={26} height={26} fill={COLORS.black} />
          <CustomRegularText>Утро</CustomRegularText>
        </View>
        {habits.map((item) => (
          <HabitButton key={item.id} habit={item as IHabit} />
        ))}
      </View>

      <Modal visible={showModal} animationType="slide">
        <HabitForm onSave={() => setShowModal(false)} />
      </Modal>
    </View>
  );
};

export default HomeScreen;
