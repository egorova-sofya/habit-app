import React from "react";
import SettingsList from "../../components/SettingsList/SettingsList";
import MainLayout from "../../components/Layouts/MainLayout";
import { SafeAreaView } from "react-native";

const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <SettingsList />
    </SafeAreaView>
  );
};

export default SettingsScreen;
