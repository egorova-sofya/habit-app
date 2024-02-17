import { View, Text, Pressable } from "react-native";
import styles from "./menu.style";
import Stats from "./../../assets/images/stats.svg";
import Home from "./../../assets/images/home.svg";
import Settings from "./../../assets/images/settings.svg";

import { COLORS } from "../../constants/theme";

const Menu = () => {
  return (
    <View style={styles.container}>
      <Pressable style={[styles.menuButton, styles.menuSideButton]}>
        <Stats fill={COLORS.white} height={26} width={26} />
      </Pressable>
      <Pressable style={[styles.menuButton, styles.active]}>
        <Home fill={COLORS.white} height={26} width={26} />
      </Pressable>
      <Pressable style={[styles.menuButton, styles.menuSideButton]}>
        <Settings fill={COLORS.white} height={26} width={26} />
      </Pressable>
    </View>
  );
};

export default Menu;
