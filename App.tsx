import theme from "./theme";
import Navigation from "./navigation";
import { Provider } from "react-native-paper";

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
