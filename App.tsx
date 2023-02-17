import Navigation from "./navigation";
import { Provider, MD3LightTheme } from "react-native-paper";

const theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
  },
};

export default function App() {
  /**
   * App
   */

  return (
    <Provider theme={theme}>
      <Navigation />
    </Provider>
  );
}
