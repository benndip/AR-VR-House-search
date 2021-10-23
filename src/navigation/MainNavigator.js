import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, VrHome } from '../screens/'

const Stack = createNativeStackNavigator();

const MainNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="VrHome" component={VrHome} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator
