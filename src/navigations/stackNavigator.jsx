import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import Historic from '../screens/Historic';
import EditProfile from '../screens/EditProfile'

const Stack = createStackNavigator();

export const StackNavigatorHome = () =>{
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName='Home'
        >
            <Stack.Screen 
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    )
}

export const StackNavigatorFavorites = () =>{
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName='Favorites'
        >
            <Stack.Screen 
                name="Favorites"
                component={Favorites}
            />
        </Stack.Navigator>
    )
}

export const StackNavigatorHistoric = () =>{
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName='Historic'
        >
            <Stack.Screen 
                name="Historic"
                component={Historic}
            />
        </Stack.Navigator>
    )
}

export const StackNavigatorProfile = () =>{
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName='Profile'
        >
            <Stack.Screen 
                name="Profile"
                component={Profile}
            />
            <Stack.Screen
                name='EditProfile'
                component={EditProfile}
            />
        </Stack.Navigator>
    )
}