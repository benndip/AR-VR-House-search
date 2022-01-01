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

import CorridorOne from './CorridorOne.screen'
import Veranda from './Veranda.screen'

const Lobby = ({ sceneNavigator }) => {

    const [loading360Image, setLoading360Image] = useState(true)

    const _onLoadEnd = () => {
        setLoading360Image(false)
    }

    return (
        <ViroScene>
            <ViroAmbientLight color="#ffffff" />
            <Viro360Image
                source={require('../../../res/images/space/Lobby.JPG')}
                onLoadEnd={_onLoadEnd}
            />
            <ViroCamera position={[0, 0, 0]} active={true} rotation={[0, -55, 0]} />
            <ViroNode
                position={[2.4, 0, 0.5]}
                rotation={[0, -70, 0]}
            >
                <ViroSphere
                    position={[0, 0, 0]}
                    radius={0.1}
                    materials={["sphere1"]}
                    animation={{ name: 'spin', run: true, loop: true }}
                    onHover={(isHovering, position, source) => {
                        sceneNavigator.push({ scene: CorridorOne })
                    }}
                />
                <ViroText
                    position={[0.1, -0.7, 0]}
                    text="Go to corridor"
                    style={{ color: '#f1f2f6', fontWeight: 'bold', fontSize: 23 }}
                />
            </ViroNode>
            <ViroNode
                position={[-1.5, 0, -1]}
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
                <ViroText position={[0.1, -0.7, -1]} text="Go to veranda" style={{ color: '#f1f2f6', fontWeight: 'bold' }} />
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

export default Lobby
