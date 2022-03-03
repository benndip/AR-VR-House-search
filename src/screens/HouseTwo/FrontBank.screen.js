import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar } from 'react-native';
import {
    ViroScene,
    Viro360Image,
    ViroNode,
    ViroText,
    ViroSphere,
    ViroMaterials,
    ViroAnimations,
    ViroAmbientLight,
    ViroCamera
} from '@viro-community/react-viro'

import FrontStairs from './FrontStairs.screen'

const Palor = ({ sceneNavigator }) => {

    return (
        <ViroScene>
            <ViroAmbientLight color="#ffffff" />
            <Viro360Image source={require('../../../res/images/space/FrontBank.JPG')} />
            <ViroCamera position={[1, 0, 0]} active={true} rotation={[0, 90, 0]} />
            <ViroNode
                position={[-4, 0.3, -5]}
                rotation={[0, 45, 0]}
                scale={[2.0, 2.0, 2.0]}
            >
                <ViroSphere
                    position={[0, 0, 0]}
                    radius={0.1}
                    materials={["sphere1"]}
                    animation={{ name: 'spin', run: true, loop: true }}
                    onHover={(isHovering, position, source) => {
                        sceneNavigator.push({ scene: FrontStairs })
                    }}
                />
                <ViroText
                    position={[-6, 1, 1]}
                    rotation={[0, 65, 12]}
                    text="Welcome to Active Spaces building. This Experience is powered by Digital Renter"
                    style={{ color: '#ffffff', fontWeight: 'bold' }}
                />
                <ViroText
                    position={[-6, -1, 1]}
                    text="Enjoy!!!"
                    style={{ color: '#f1f2f6', fontWeight: 'bold', fontSize: 40 }}
                    rotation={[0, 65, 15]}
                />
                <ViroText
                    position={[0, -0.6, 0]}
                    text="Climb Stairs"
                    style={{ color: '#ffffff', fontWeight: 'bold' }}
                    rotation={[0, -10, 0]}
                />
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
