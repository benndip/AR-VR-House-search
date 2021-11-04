import React from 'react'
import { View } from 'react-native'
import {
    ViroVRSceneNavigator,
} from '@viro-community/react-viro'

import Palor from '../HouseTwo/Palor.screen'

const VrHomeTwo = () => {
    return (
        <ViroVRSceneNavigator
            initialScene={{
                scene: Palor
            }}
            onExitViro={()=>this.props.sceneNavigator.pop()}
        />
    )
}

export default VrHomeTwo
