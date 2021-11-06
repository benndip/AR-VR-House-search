import React from 'react'
import { View } from 'react-native'
import {
    ViroVRSceneNavigator,
} from '@viro-community/react-viro'

import FrontBank from '../HouseTwo/FrontBank.screen'

const VrHomeTwo = () => {
    return (
        <ViroVRSceneNavigator
            initialScene={{
                scene: FrontBank
            }}
            onExitViro={() => this.props.sceneNavigator.pop()}
        />
    )
}

export default VrHomeTwo
