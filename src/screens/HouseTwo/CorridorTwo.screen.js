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

import ConferenceRoom from './ConferenceRoom.screen'
import Toilet from './Toilet.screen'
import CorridorOne from './CorridorOne.screen'

const CorridorTwo = ({ sceneNavigator }) => {

    const [loading360Image, setLoading360Image] = useState(true)

    const _onLoadEnd = () => {
        setLoading360Image(false)
    }

    return (
        <ViroScene>
            <ViroAmbientLight color="#ffffff" />
            <Viro360Image
                source={require('../../../res/images/space/CorridorTwo.JPG')}
                onLoadEnd={_onLoadEnd}
            />
            <ViroCamera position={[0, 0, 0]} active={true} rotation={[0, 0, 0]} />
            <ViroNode
                position={[1.1, 0.3, -1]}
            >
                <ViroSphere
                    position={[-0.2, 0, -1]}
                    radius={0.1}
                    materials={["sphere1"]}
                    animation={{ name: 'spin', run: true, loop: true }}
                    onHover={(isHovering, position, source) => {
                        sceneNavigator.push({ scene: ConferenceRoom })
                    }}
                />
                <ViroText position={[0.1, -0.7, -1]} text="Enter Conference Room" style={{ color: '#f1f2f6', fontWeight: 'bold' }} />
            </ViroNode>
            <ViroNode
                position={[-1.5, -0.9, 0.8]}
                rotation={[0, 110, 0]}
            >
                <ViroSphere
                    position={[0, 0, -1]}
                    radius={0.1}
                    materials={["sphere1"]}
                    animation={{ name: 'spin', run: true, loop: true }}
                    onHover={(isHovering, position, source) => {
                        sceneNavigator.push({ scene: CorridorOne })
                    }}
                />
                <ViroText position={[0.1, -0.6, -1]} text="Move ahead" style={{ color: '#000000', fontWeight: 'bold' }} />
            </ViroNode>
            <ViroNode
                position={[1.5, -0.7, -0.7]}
                rotation={[0, -135, 0]}
            >
                <ViroSphere
                    position={[0.1, 0, -1]}
                    radius={0.1}
                    materials={["sphere1"]}
                    animation={{ name: 'spin', run: true, loop: true }}
                    onHover={(isHovering, position, source) => {
                        sceneNavigator.push({ scene: Toilet })
                    }}
                />
                <ViroText position={[0.1, -0.7, -1]} text="Enter Toilet" style={{ color: '#f1f2f6', fontWeight: 'bold' }} />
            </ViroNode>
            {
                loading360Image
                &&
                <ViroText text="Loading Corridor..." position={[0, 0, 0]} />
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

export default CorridorTwo
