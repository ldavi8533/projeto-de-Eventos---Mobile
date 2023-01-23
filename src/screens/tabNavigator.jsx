import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Home";
import Favorites from './Favorites';
import Profile from './Profile';
import Historic from './Historic';

import Colors from '../style/colors';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: Colors.secondaryColor,
                    tabBarInactiveTintColor: Colors.primaryColor
                }}
            >
                <Tab.Screen name="Home"
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
        </NavigationContainer>
    );
}
export default TabNavigator;