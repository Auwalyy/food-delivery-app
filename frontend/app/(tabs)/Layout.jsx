import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FoodDetailsScreen from '@/screens/FoodDetailsScreen';
import TabNavigator from '@/components/Tab';

const Stack = createStackNavigator();

const Layout = () => (
  <SafeAreaProvider>
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="FoodDetails" component={FoodDetailsScreen} />
    </Stack.Navigator>
  </SafeAreaProvider>
);

export default Layout;
