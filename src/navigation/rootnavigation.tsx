import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import {Home} from '../container/Home/Home.view'
import {Search} from '../container/Search/Search.view'

const Stack = createStackNavigator();

export const RootNavigator = () => {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} options={{title:'Home'}} />
      <Stack.Screen name="Search" component={Search} options={{title:'Search'}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
