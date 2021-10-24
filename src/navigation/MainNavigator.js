import React from 'react'
import { View, Text } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, VrHome, Palor } from '../screens/'

const Stack = createNativeStackNavigator();

const MainNavigator = () => {

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="VrHome" component={VrHome} />

            {/* Main scene for House1 */}
            <Stack.Screen name="Palor" component={Palor} />
        </Stack.Navigator>
    )
}

export default MainNavigator
