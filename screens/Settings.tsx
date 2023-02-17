import React from "react";
import { Header } from "../components";
import { Text } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

export default function Settings() {
  /**
   * Settings Screen
   */

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Header title="Settings" back={false} />

      <View style={styles.container}>
        <Text variant="displayMedium">Settings Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
  },
});
