import React from 'react'
import { View, Text, StatusBar } from 'react-native';
import {
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

import viroStyles from './VrHome.style';

const SceneOne = () => {

    const _onButtonTap = () => console.log("You just clicked");

    return (
        <ViroScene>
            <Viro360Image source={require('../../../res/parlor.jpg')} />
            <ViroCamera position={[-1, 0, 0]} active={true} rotation={[0, 0, 0]} />
            {/* <ViroOrbitCamera
                position={[0, 0, 0]}
                focalPoint={[0, 0, -1]}
                active={true}
            /> */}
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

ViroMaterials.createMaterials({
    sphere1: {
        // shininess: 2.0,
        // lightingModel: 'Blinn',
        diffuseColor: '#ccc',
        diffuseTexture: require('../../../res/moon.jpeg')
    }
})

ViroAnimations.registerAnimations({
    spin: {
        properties: {
            rotateY: '+=45'
        },
        duration: 2000
    },
})

export default SceneOne
