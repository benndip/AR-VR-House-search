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

import FirstStairs from './FirstStairs.screen'
import FrontBank from './FrontBank.screen'

const FrontStairs = ({ sceneNavigator }) => {

    const [runTimer, setRunTimer] = useState(false)

    return (
        <ViroScene>
            <ViroAmbientLight color="#ffffff" />
            <Viro360Image source={require('../../../res/images/space/FrontStairs.jpg')} />
            {/* <ViroCamera position={[-1, 0, 0]} active={true} rotation={[0, 0, 0]} /> */}
            <ViroNode
                position={[-0.3, 0.3, -1]}
            >
                <ViroSphere
                    position={[0, 0, 0]}
                    radius={0.1}
                    materials={["sphere1"]}
                    animation={{ name: 'spin', run: true, loop: true }}
                    onHover={(isHovering, position, source) => {
                        sceneNavigator.push({ scene: FirstStairs })
                    }}
                />
                <ViroText position={[0, -0.4, 0]} text="Climb Stairs" style={{ color: '#f1f2f6', fontWeight: 'bold' }} />
            </ViroNode>
            <ViroNode
                position={[-0.3, 0.3, -1]}
            >
                <ViroSphere
                    position={[0, 0, 0]}
                    radius={0.1}
                    materials={["sphere1"]}
                    animation={{ name: 'spin', run: true, loop: true }}
                    onHover={(isHovering, position, source) => {
                        sceneNavigator.push({ scene: FrontBank })
                    }}
                />
                <ViroText position={[0, -0.4, 0]} text="Go down Stairs" style={{ color: '#f1f2f6', fontWeight: 'bold' }} />
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

export default FrontStairs
