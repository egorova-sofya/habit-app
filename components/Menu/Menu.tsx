import { View, Text, Pressable } from "react-native";
import styles from "./menu.style";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../../constants/theme";
import { FC } from "react";

interface Props {
  setShowModal: (value: boolean) => void;
}

const Menu: FC<Props> = ({ setShowModal }) => {
  return (
    <View style={styles.container}>
      <Pressable style={[styles.menuButton, styles.menuSideButton]}>
        <Ionicons name="stats-chart" size={26} color={COLORS.white} />
      </Pressable>
      <Pressable
        onPress={() => setShowModal(true)}
        style={[styles.menuButton, styles.active]}
      >
        <Ionicons name="home" size={26} color={COLORS.white} />
      </Pressable>
      <Pressable style={[styles.menuButton, styles.menuSideButton]}>
        <Ionicons name="settings" size={26} color={COLORS.white} />
      </Pressable>
    </View>
  );
};

export default Menu;
