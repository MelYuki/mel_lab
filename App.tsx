import React from 'react';
import Home from './src/screens/home/home';
import "react-native-gesture-handler"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/screens/home/login';
import Register from './src/screens/home/register';

function App(): JSX.Element {

    const Stack = createStackNavigator()

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Register' component={Register}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;
