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

import Lobby from './Lobby.screen'
import ThirdStairs from './ThirdStairs.screen'

const Veranda = ({ sceneNavigator }) => {

    const [loading360Image, setLoading360Image] = useState(true)

    const _onLoadEnd = () => {
        setLoading360Image(false)
    }

    return (
        <ViroScene>
            <ViroAmbientLight color="#ffffff" />
            <Viro360Image
                source={require('../../../res/images/space/Veranda.JPG')}
                onLoadEnd={_onLoadEnd}
            />
            <ViroCamera position={[0, 0, 0]} active={true} rotation={[0, -90, 0]} />
            <ViroNode
                position={[1.5, 0, 1.9]}
                rotation={[0, -75, 0]}
            >
                <ViroSphere
                    position={[0, -0.4, -1]}
                    radius={0.1}
                    materials={["sphere1"]}
                    animation={{ name: 'spin', run: true, loop: true }}
                    onHover={(isHovering, position, source) => {
                        sceneNavigator.push({ scene: Lobby })
                    }}
                />
                <ViroText position={[0.1, -1, -1]} text="Enter Lobby" style={{fontSize: 30, color: '#000000', fontWeight: 'bold' }} />
            </ViroNode>
            <ViroNode
                position={[-1.5, -0.4, 1.9]}
                rotation={[0, 75, 0]}
            >
                <ViroSphere
                    position={[0, 0.2, 0]}
                    radius={0.1}
                    materials={["sphere1"]}
                    animation={{ name: 'spin', run: true, loop: true }}
                    onHover={(isHovering, position, source) => {
                        sceneNavigator.push({ scene: ThirdStairs })
                    }}
                />
                <ViroText position={[0, -0.5, 0]} text="Go down stairs" style={{fontSize: 20, color: '#000000', fontWeight: 'bold' }} />
            </ViroNode>
            {
                loading360Image
                &&
                <ViroText text="Loading Veranda..." position={[0, 0, 0]} />
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

export default Veranda
