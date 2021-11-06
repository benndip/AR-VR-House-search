import React from 'react'
import { View } from 'react-native'
import {
    ViroVRSceneNavigator,
} from '@viro-community/react-viro'

import Palor from '../HouseThree/Palor.screen'

const VrHomeThree = () => {
    return (
        <ViroVRSceneNavigator
            initialScene={{
                scene: Palor
            }}
            onExitViro={()=>this.props.sceneNavigator.pop()}
        />
    )
}

export default VrHomeThree
