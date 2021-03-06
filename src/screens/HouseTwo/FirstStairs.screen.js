import React, { useState } from 'react'
import { View, Text } from 'react-native'

import {
    ViroScene,
    Viro360Image,
    ViroNode,
    ViroCamera,
    ViroText,
    ViroSphere,
    ViroMaterials,
    ViroAnimations,
    ViroAmbientLight
} from '@viro-community/react-viro'

import SecondStairs from './SecondStairs.screen'
import FrontStairs from './FrontStairs.screen'

const Room = ({ sceneNavigator }) => {

    const [loading360Image, setLoading360Image] = useState(true)

    const _onLoadEnd = () => {
        setLoading360Image(false)
    }

    return (
        <ViroScene>
            <ViroAmbientLight color="#ffffff" />
            <Viro360Image
                source={require('../../../res/images/space/FirstStairs.JPG')}
                onLoadEnd={_onLoadEnd}
            />
            <ViroCamera position={[-1, 0, 0]} active={true} rotation={[0, -85, 0]} />
            <ViroNode
                position={[1, 1, 0.7]}
                rotation={[0, -90, 0]}
            >
                <ViroSphere
                    position={[0, 0, 0]}
                    radius={0.1}
                    materials={["sphere1"]}
                    animation={{ name: 'spin', run: true, loop: true }}
                    onHover={(isHovering, position, source) => {
                        sceneNavigator.push({ scene: SecondStairs })
                    }}
                />
                <ViroText position={[0.4, -0.3, -1]} text="Climb Stairs" style={{ color: '#f1f2f6', fontWeight: 'bold' }} />
            </ViroNode>
            <ViroNode
                position={[-3.6, -1.4, -0.2]}
                rotation={[0, 90, 0]}
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
                <ViroText position={[0, 0, 0]} text="Go down stairs" style={{ color: '#f1f2f6', fontWeight: 'bold' }} />
            </ViroNode>
            {
                loading360Image
                &&
                <ViroText text="Loading stairs..." position={[0, 0, 0]} />
            }
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

export default Room