import React, { FC } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { SIZES } from "../../constants/theme";

interface Props {
  children: React.ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: SIZES.horizontalIndent,
    paddingVertical: 60,
  },
});

export default MainLayout;
