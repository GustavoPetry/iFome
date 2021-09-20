import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import api from './src/services/Api';

import Home from './src/pages/Login';
import Register from './src/pages/Register/';
import RegisterPfOne from './src/pages/RegisterPfOne';
import RegisterPfTwo from './src/pages/RegisterPfTwo';
import None from './src/pages/None';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterPfOne" component={RegisterPfOne} />
        <Stack.Screen name="RegisterPfTwo" component={RegisterPfTwo} />
        <Stack.Screen name="None" component={None} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;