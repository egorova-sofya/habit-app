import React from "react";
import { Pressable, View, Text } from "react-native";
import styles from "./settingsList.style";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../types";

const SettingsList = () => {
  const { navigate } = useNavigation<StackNavigation>();
  return (
    <View>
      <Pressable
        onPress={() => navigate("NotificationsSettings")}
        style={[styles.button, { borderBottomWidth: 1 }]}
      >
        <Text>Настройки уведомлений</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text>Обратная связь</Text>
      </Pressable>
    </View>
  );
};

export default SettingsList;
