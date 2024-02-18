import React, { useState } from "react";
import { View } from "react-native";
import styles from "./home.style";
import Morning from "./../../assets/images/morning.svg";
import CustomRegularText from "../../components/Text/CustomRegularText";
import HabitButton from "../../components/HabitButton/HabitButton";
import Menu from "../../components/Menu/Menu";
import HabitForm from "../../components/HabitForm/HabitForm";

import { COLORS } from "../../constants/theme";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.appContainer}>
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Morning width={26} height={26} fill={COLORS.black} />
          <CustomRegularText>Утро</CustomRegularText>
        </View>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <HabitButton key={item} />
        ))}
      </View>

      <Menu setShowModal={setShowModal} />
      <HabitForm showModal={showModal} setShowModal={setShowModal} />
    </View>
  );
};

export default Home;
