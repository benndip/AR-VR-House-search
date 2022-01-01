import React from 'react'
import { View, Text } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, VrHomeOne, VrHomeTwo, VrHomeThree, Landing } from '../screens/'

const Stack = createNativeStackNavigator();

const MainNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName="VrHomeTwo"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="VrHomeOne" component={VrHomeOne} />
            <Stack.Screen name="VrHomeTwo" component={VrHomeTwo} />
            <Stack.Screen name="VrHomeThree" component={VrHomeThree} />
            <Stack.Screen name="Landing" component={Landing} />

        </Stack.Navigator>
    )
}

export default MainNavigator
