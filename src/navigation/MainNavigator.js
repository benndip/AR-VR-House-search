import React from 'react'
import { View, Text } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { VrHomeTwo, Landing } from '../screens/'

const Stack = createNativeStackNavigator();

const MainNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName="Landing"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="VrHomeTwo" component={VrHomeTwo} />
            <Stack.Screen name="Landing" component={Landing} />

        </Stack.Navigator>
    )
}

export default MainNavigator
