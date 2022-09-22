import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import MainTabs from './mobile/MainTabs';

import nav from './constants';

const Stack = createStackNavigator();

const MobileContainer = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Group>
          <Stack.Screen name={nav.MAIN} component={MainTabs} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MobileContainer;
