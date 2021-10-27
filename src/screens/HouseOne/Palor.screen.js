import React, { Component } from 'react'
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

import Room from './Room.screen'

const Palor = ({ sceneNavigator }) => {
    return (
        <ViroScene>
            <Viro360Image source={require('../../../res/images/house1/h1.jpg')} />
            <ViroCamera position={[-1, 0, 0]} active={true} rotation={[0, 0, 0]} />
            <ViroNode
                position={[-1, 0, -1]}
            >
                <ViroSphere
                    position={[0, 0, 0]}
                    radius={0.1}
                    materials={["sphere1"]}
                    animation={{ name: 'spin', run: true, loop: true }}
                    onHover={(isHovering, position, source) => {
                        sceneNavigator.push({ scene: Room })
                    }}
                />
                <ViroText position={[0.1, -0.7, -1]} text="Enter Room" style={{ color: '#f1f2f6', fontWeight: 'bold' }} />
            </ViroNode>
        </ViroScene>
    )
}

ViroMaterials.createMaterials({
    sphere1: {
        diffuseColor: '#ccc',
        diffuseTexture: require('../../../res/images/moon.jpeg')
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

export default Palor
