import React from 'react'
import { View } from 'react-native'
import {
    ViroVrSceneNavigator,
    ViroScene,
    Viro360Image,
    ViroBox,
    ViroButton,
    ViroNode,
    ViroOrbitCamera,
    ViroCamera,
    ViroText,
    ViroSphere,
    ViroMaterials,
    ViroAnimations
} from '@viro-community/react-viro'

const Palor = () => {
    return (
        <ViroScene>
            <Viro360Image source={require('../../../res/images/parlor.jpg')} />
            <ViroCamera position={[-1, 0, 0]} active={true} rotation={[0, 0, 0]} />

            <ViroText style={{}} text="Welcome to Benndip's Million dollar house!" position={[-1, 0, -1]} />
            <ViroNode
                position={[-1, 0, -1]}
            >
                <ViroSphere
                    radius={0.15}
                    materials={["sphere1"]}
                    animation={{ name: 'spin', run: true, loop: true }}
                />
            </ViroNode>
        </ViroScene>
    )
}

const VrHome = () => {
    return (
        <ViroVrSceneNavigator
            initialScene={{
                scene: Palor
            }}
        />
    )
}

export default VrHome
