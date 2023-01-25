import { createStackNavigator } from "@react-navigation/stack";
import EmailSubmit from "../screens/EmailSubmit";

import ForgotPassword from "../screens/ForgotPassword";
import Login from '../screens/Login';
import Register from '../screens/Register';
import TabNavigator from "./tabNavigator";

const Stack = createStackNavigator();

export default AuthNavigator = () => {
    return (
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />
                 <Stack.Screen
                    name="EmailSubmit"
                    component={EmailSubmit}
                />
                <Stack.Screen
                    name="Home"
                    component={TabNavigator}
                />
            </Stack.Navigator>
    )
}