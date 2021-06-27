import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Components/Search'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from "./Components/DetailsScreen";
const Stack = createStackNavigator();


export default function App() {
  return (
      // Initial Navigation
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Search} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}


