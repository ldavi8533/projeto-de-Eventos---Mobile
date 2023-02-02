import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Colors from '../style/colors';

import {
    StackNavigatorHome,
    StackNavigatorFavorites,
    StackNavigatorHistoric,
    StackNavigatorProfile
} from './stackNavigator';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: Colors.secondaryColor,
                    tabBarInactiveTintColor: Colors.primaryColor
                }}
            >
                <Tab.Screen name="Overview"
                    component={StackNavigatorHome}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons
                                name={
                                    focused
                                        ? 'ios-home'
                                        : 'ios-home-outline'
                                }
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen name="Favoritos" component={StackNavigatorFavorites}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons
                                name={
                                    focused
                                        ? 'ios-heart'
                                        : 'ios-heart-outline'
                                }
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen name="Histórico" component={StackNavigatorHistoric}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons
                                name={
                                    focused
                                        ? 'ios-list'
                                        : 'list'
                                }
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen name="Perfil" component={StackNavigatorProfile}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons
                                name={
                                    focused
                                        ? 'ios-person'
                                        : 'ios-person-outline'
                                }
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
    );
}
export default TabNavigator;