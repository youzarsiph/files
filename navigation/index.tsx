import React from "react";
import theme from "../theme";
import { Home, Recent, Settings } from "../screens";
import { BottomNavigation } from "react-native-paper";

export default function Navigation() {
  /**
   * Navigation
   */

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {
      key: "home",
      title: "Browse",
      focusedIcon: "folder",
      unfocusedIcon: "folder-outline",
    },
    {
      key: "recent",
      title: "Recent",
      focusedIcon: "history",
    },
    {
      key: "settings",
      title: "Settings",
      focusedIcon: "cog",
      unfocusedIcon: "cog-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    recent: Recent,
    settings: Settings,
  });

  return (
    <BottomNavigation
      onIndexChange={setIndex}
      renderScene={renderScene}
      navigationState={{ index, routes }}
      sceneAnimationEnabled
      sceneAnimationType="shifting"
      barStyle={{ backgroundColor: !theme.dark ? "#fff" : undefined }}
    />
  );
}
