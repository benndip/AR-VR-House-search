import React from 'react'
import { View, Text, LogBox } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);


import MainNavigator from './src/navigation/MainNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  )
}

export default App
