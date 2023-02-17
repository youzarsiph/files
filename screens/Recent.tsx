import React from "react";
import { Header } from "../components";
import { Text } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

export default function Recent() {
  /**
   * Recent Screen
   */

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Header title="Recent" back={false} />

      <View style={styles.container}>
        <Text variant="displayMedium">Recent Screen</Text>
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
