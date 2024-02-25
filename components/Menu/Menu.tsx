import { View, Pressable } from "react-native";
import styles from "./menu.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { FC } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import PlusIcon from "./../../assets/images/plus.svg";

interface Props extends BottomTabBarProps {}

const Menu: FC<Props> = ({ state, navigation, descriptors }) => {
  return (
    <View style={styles.outsideContainer}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            } else if (label === "Home" && isFocused) {
              navigation.navigate("Habit");
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          const homeButton =
            isFocused && label === "Home" ? (
              <PlusIcon width={26} height={26} fill={COLORS.white} />
            ) : (
              <Ionicons name="home" size={26} color={COLORS.white} />
            );

          return (
            <Pressable
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[
                styles.menuButton,
                isFocused && styles.active,
                { paddingHorizontal: isFocused && label === "Home" ? 56 : 22 },
              ]}
            >
              {label === "Statistics" ? (
                <Ionicons name="stats-chart" size={26} color={COLORS.white} />
              ) : label === "Settings" ? (
                <Ionicons name="settings" size={26} color={COLORS.white} />
              ) : (
                homeButton
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default Menu;
