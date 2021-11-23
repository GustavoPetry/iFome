import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import api from './src/services/Api';

import Home from './src/pages/Login';
import Register from './src/pages/Register/';
import RegisterPfOne from './src/pages/RegisterPfOne';
import RegisterPfTwo from './src/pages/RegisterPfTwo';
import Inicial from './src/pages/Inicial';
import Doar from './src/pages/Doar';
import SucessoDoacao from './src/pages/SucessoDoacao';
import Doacoes from './src/pages/Doacoes';
import SucessoEntrega from './src/pages/SucessoEntrega';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterPfOne" component={RegisterPfOne} />
        <Stack.Screen name="RegisterPfTwo" component={RegisterPfTwo} />
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="Doar" component={Doar}/>
        <Stack.Screen name="SucessoDoacao" component={SucessoDoacao}/>
        <Stack.Screen name="Doacoes" component={Doacoes}/>
        <Stack.Screen name="SucessoEntrega" component={SucessoEntrega}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;