import { NavigationContainer } from "@react-navigation/native";
import {StatusBar} from 'react-native';

import AuthNavigator from './src/navigations/authNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent/>
    </NavigationContainer>
  );
}
