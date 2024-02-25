import React, { FC, useState } from "react";
import { Button, Modal, Text, View } from "react-native";
import styles from "./homeScreen.style";
import Morning from "./../../assets/images/morning.svg";
import CustomRegularText from "../../components/Text/CustomRegularText";
import HabitButton from "../../components/HabitButton/HabitButton";
import Menu from "../../components/Menu/Menu";
import HabitForm from "../../components/HabitForm/HabitForm";

import { COLORS } from "../../constants/theme";
import { NavigationProp } from "@react-navigation/native";
import { IHabit, RootStackParamList } from "../../types";
import habits from "./../../data/habits.json";

interface Props {
  navigation: NavigationProp<RootStackParamList, "Home">;
}

const HomeScreen: FC<Props> = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.appContainer}>
      <View style={styles.container}>
        <Button
          onPress={() => navigation.navigate("Settings")}
          title="Settings"
        />
        <Button
          onPress={() => navigation.navigate("Statistics")}
          title="Statistics"
        />
        <View style={styles.titleWrapper}>
          <Morning width={26} height={26} fill={COLORS.black} />
          <CustomRegularText>Утро</CustomRegularText>
        </View>
        {habits.map((item) => (
          <HabitButton key={item.id} habit={item as IHabit} />
        ))}
      </View>

      <Menu setShowModal={setShowModal} />
      <Modal visible={showModal} animationType="slide">
        <HabitForm onSave={() => setShowModal(false)} />
      </Modal>
    </View>
  );
};

export default HomeScreen;
