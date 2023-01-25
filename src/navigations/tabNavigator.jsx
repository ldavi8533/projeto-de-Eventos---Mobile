import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import Historic from '../screens/Historic';

import Colors from '../style/colors';

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
                    component={Home}
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
                <Tab.Screen name="Favorites" component={Favorites}
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
                <Tab.Screen name="Histórico" component={Historic}
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
                <Tab.Screen name="Perfil" component={Profile}
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