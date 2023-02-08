import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import Historic from '../screens/Historic';
import EditProfile from '../screens/EditProfile';
import CardPage from "../screens/CardPage";
import TicketPage from "../screens/TicketPage";
import CreditCardPage from "../screens/CreditCardPage";

const Stack = createStackNavigator();

export const StackNavigatorHome = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="CardPage"
                component={CardPage}
                options={{
                    headerShown: true,
                    headerTitle:'Evento'
                }}
            />
            <Stack.Screen
                name="TicketPage"
                component={TicketPage}
                options={{
                    headerShown: true,
                    headerTitle:'Evento'
                }}
            />
            <Stack.Screen
                name="CreditCardPage"
                component={CreditCardPage}
                options={{
                    headerShown: true,
                    headerTitle:'Adicionar novo cartão'
                }}
            />
        </Stack.Navigator>
    )
}

export const StackNavigatorFavorites = () => {
    return (
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

export const StackNavigatorHistoric = () => {
    return (
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

export const StackNavigatorProfile = () => {
    return (
        <Stack.Navigator
            initialRouteName='Profile'
        >
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='EditProfile'
                component={EditProfile}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}