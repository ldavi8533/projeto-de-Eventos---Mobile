import { createStackNavigator } from "@react-navigation/stack";

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
                {/* <Stack.Screen
                    name="Forgot password"
                    component={Password}
                /> */}
                <Stack.Screen
                    name="Home"
                    component={TabNavigator}
                />
            </Stack.Navigator>
    )
}