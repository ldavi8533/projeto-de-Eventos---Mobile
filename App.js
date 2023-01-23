import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from './src/navigations/authNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
