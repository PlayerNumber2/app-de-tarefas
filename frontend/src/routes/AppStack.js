import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// components

import Home from '../screens/Home';
import MyTasks from '../screens/MyTasks';

function AppStack() {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="MyTasks" component={MyTasks} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
