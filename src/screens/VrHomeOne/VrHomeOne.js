import React from 'react'
import { View } from 'react-native'
import {
    ViroVRSceneNavigator,
} from '@viro-community/react-viro'

import Palor from '../HouseOne/Palor.screen'

const VrHomeOne = () => {
    return (
        <ViroVRSceneNavigator
            initialScene={{
                scene: Palor
            }}
            onExitViro={()=>this.props.sceneNavigator.pop()}
        />
    )
}

export default VrHomeOne
