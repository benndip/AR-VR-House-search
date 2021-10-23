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

const VrHome = () => {

    const _onButtonTap = () => console.log("You just clicked");

    return (
        <ViroVrSceneNavigator 
            initialScene={{
                scene
            }}
        />
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

export default VrHome
