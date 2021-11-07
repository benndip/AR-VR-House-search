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

import ThirdStairs from './ThirdStairs.screen'
import FirstStairs from './FirstStairs.screen'

const SecondStairs = ({ sceneNavigator }) => {

    const [loading360Image, setLoading360Image] = useState(true)

    const _onLoadEnd = () => {
        setLoading360Image(false)
    }

    return (
        <ViroScene>
            <ViroAmbientLight color="#ffffff" />
            <Viro360Image
                source={require('../../../res/images/space/SecondStairs.JPG')}
                onLoadEnd={_onLoadEnd}
            />
            <ViroCamera position={[0, 0, 0]} active={true} rotation={[0, -85, 0]} />
            <ViroNode
                position={[0, 0, 0]}
            >
                <ViroSphere
                    position={[0, 0, 0]}
                    radius={0.1}
                    materials={["sphere1"]}
                    animation={{ name: 'spin', run: true, loop: true }}
                    onHover={(isHovering, position, source) => {
                        sceneNavigator.push({ scene: ThirdStairs })
                    }}
                />
                <ViroText
                    position={[0, 0, 0]}
                    text="Climb Stairs"
                    style={{ color: '#f1f2f6', fontWeight: 'bold' }}
                />
            </ViroNode>
            <ViroNode
                position={[-1.6, 0, -1]}
                rotation={[0, -90, 0]}
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
                <ViroText
                    position={[0, 0, 0]}
                    text="Go down stairs"
                    style={{ color: '#f1f2f6', fontWeight: 'bold' }}
                />
            </ViroNode>
            {
                loading360Image
                &&
                <ViroText text="Loading Second Stairs..." position={[0, 0, 0]} />
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

export default SecondStairs
