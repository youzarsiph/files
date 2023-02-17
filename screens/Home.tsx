import React from "react";
import { Text } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { ActionButton, Header } from "../components";

export default function Home() {
  /**
   * Home Screen
   */

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Header title="Browse" back={false} />

      <View style={styles.container}>
        <ActionButton />

        <Text variant="displayMedium">Home Screen</Text>
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
