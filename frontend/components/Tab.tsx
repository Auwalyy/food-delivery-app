import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/HomeScreen';
import MenuScreen from '@/screens/MenuScreen'
import CartScreen from '@/screens/CartScreen';
import ContactScreen from '@/screens/ContactScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
        
            name="Home"
            component={HomeScreen}
            options={{ tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={24} /> }}
        />
        <Tab.Screen
            name="Menu"
            component={MenuScreen}
            options={{ tabBarIcon: ({ color }) => <Ionicons name="restaurant" color={color} size={24} /> }}
        />
        <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{ tabBarIcon: ({ color }) => <Ionicons name="cart" color={color} size={24} /> }}
        />
        <Tab.Screen
            name="Contact"
            component={ContactScreen}
            options={{ tabBarIcon: ({ color }) => <Ionicons name="call" color={color} size={24} /> }}
        />
    </Tab.Navigator>
);

export default TabNavigator;
