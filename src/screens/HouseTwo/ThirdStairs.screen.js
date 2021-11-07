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

import Veranda from './Veranda.screen'
import SecondStairs from './SecondStairs.screen'

const ThirdStairs = ({ sceneNavigator }) => {

    const [loading360Image, setLoading360Image] = useState(true)

    const _onLoadEnd = () => {
        setLoading360Image(false)
    }

    return (
        <ViroScene>
            <ViroAmbientLight color="#ffffff" />
            <Viro360Image
                source={require('../../../res/images/space/ThirdStairs.JPG')}
                onLoadEnd={_onLoadEnd}
            />
            <ViroCamera position={[0, 0, 0]} active={true} rotation={[0, -95, 0]} />
            <ViroNode
                position={[1.8, 0.5, 0]}
                rotation={[0, -95, 0]}
            >
                <ViroSphere
                    position={[0, 0, 0]}
                    radius={0.1}
                    materials={["sphere1"]}
                    animation={{ name: 'spin', run: true, loop: true }}
                    onHover={(isHovering, position, source) => {
                        sceneNavigator.push({ scene: Veranda })
                    }}
                />
                <ViroText position={[0, -0.6, 0]} text="Go to veranda" style={{ color: 'black', fontWeight: 'bold' }} />
            </ViroNode>

            <ViroNode
                position={[-1.8, -1.5, 0]}
                rotation={[0, -95, 0]}
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
                <ViroText
                    position={[-0.2, -0.6, 0]}
                    text="Go down stairs"
                    style={{ color: '#f1f2f6', fontWeight: 'bold' }}
                    rotation={[0, -190, 0]}
                />
            </ViroNode>

            {
                loading360Image
                &&
                <ViroText text="Loading Stairs..." position={[0, 0, 0]} />
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

export default ThirdStairs
