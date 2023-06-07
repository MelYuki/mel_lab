import React from 'react';
import "react-native-gesture-handler"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/screens/login/login';
import Register from './src/screens/login/signUp';
import Home from './src/screens/home/home';

function App(): JSX.Element {

    const Stack = createStackNavigator()

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Register' component={Register}/>
          <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;
