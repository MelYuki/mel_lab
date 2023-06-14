import { Text, View, SafeAreaView, StatusBar } from "react-native";
import globalStyle from "../../styles/global.style";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack"
import List from "./events-list";
import Add from "./events-add";
import Shared from "./events-shared";
import Details from "./events-details";
import { useCallback } from "react";


const Home = ({route}) => {

    const { name } = route.params
    // console.log(login) => return new objet with objet user inside
    // console.log(name)

    const Stack = createStackNavigator()
    const Tab = createMaterialBottomTabNavigator()

    const AppTabMenu = useCallback(() => (
        <Tab.Navigator initialRouteName='List' >
            <Tab.Screen name='List' component={List} />
            <Tab.Screen name='Add' component={Add} />
            <Tab.Screen name='Shared' component={Shared} />
        </Tab.Navigator>
    ), [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar/>
                <Stack.Navigator initialRouteName='menu'>
                    <Stack.Screen
                        name='menu'
                        component={AppTabMenu}
                        options={
                            { headerShown: false }
                        } />
                    <Stack.Screen
                        name='Details'
                        component={Details} />
                </Stack.Navigator>
        </SafeAreaView>
    )
}

export default Home