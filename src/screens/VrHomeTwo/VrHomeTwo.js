import React from 'react'
import { View } from 'react-native'
import {
    ViroVRSceneNavigator,
} from '@viro-community/react-viro'

import styles from './VrHomeTwo.style'

import FrontBank from '../HouseTwo/FrontBank.screen'

const VrHomeTwo = () => {
    return (
        <ViroVRSceneNavigator
            initialScene={{
                scene: FrontBank
            }}
        />
    )
}

export default VrHomeTwo
