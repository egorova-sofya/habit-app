import { View, Text, Pressable, Image } from "react-native";
import styles from "./menu.style";
import Test from "./../../assets/images/stats.svg";

const Menu = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.menuButton}>
        {/* <Text>Statistic</Text> */}
        {/* <Image
          style={styles.icon}
          //   source={require("./../../assets/images/stats.png")}
          source={{
            uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
          }}
        /> */}
        <Test height={45} width={45} />
      </Pressable>
      <Pressable style={styles.menuButton}>
        <Text>Home</Text>
      </Pressable>
      <Pressable style={styles.menuButton}>
        <Text>Settings</Text>
      </Pressable>
    </View>
  );
};

export default Menu;
