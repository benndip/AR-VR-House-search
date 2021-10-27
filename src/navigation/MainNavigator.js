import React from 'react'
import { View, Text } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, VrHome, Palor } from '../screens/'

const Stack = createNativeStackNavigator();

const MainNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="VrHome" component={VrHome} />
        </Stack.Navigator>
    )
}

export default MainNavigator
