import React from "react";
import { Header } from "../components";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { List, RadioButton } from "react-native-paper";

export default function Settings() {
  /**
   * Settings Screen
   */

  const [theme, setTheme] = React.useState("light");

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Header title="Settings" back={false} />

      <View>
        <List.Section title="Theme">
          <RadioButton.Group
            value={theme}
            onValueChange={(value) => setTheme(value)}
          >
            <RadioButton.Item label="Auto" value="auto" />
            <RadioButton.Item label="Light" value="light" />
            <RadioButton.Item label="Dark" value="dark" />
          </RadioButton.Group>
        </List.Section>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
