import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import LineChart from './pages/LineChart';
import CountriesList from './pages/CountriesList';


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'COVID-19 Monitor',
            headerTintColor: '#FFF',
            headerStyle: { backgroundColor: '#401313' },
          }}
        />
        <Stack.Screen
          name="LineChart"
          component={LineChart}
          options={{
            title: 'Line Chart',
            headerTintColor: '#FFF',
            headerStyle: { backgroundColor: '#17202A' },
          }}
        />
        <Stack.Screen
          name="CountriesList"
          component={CountriesList}
          options={{
            title: 'Countries List',
            headerTintColor: '#FFF',
            headerStyle: { backgroundColor: '#17202A' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
