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

import DrOffice from './DrOffice.screen'
import Lobby from './Lobby.screen'
import CorridorTwo from './CorridorTwo.screen'

const CorridorOne = ({ sceneNavigator }) => {

    const [loading360Image, setLoading360Image] = useState(true)

    const _onLoadEnd = () => {
        setLoading360Image(false)
    }

    return (
        <ViroScene>
            <ViroAmbientLight color="#ffffff" />
            <Viro360Image
                source={require('../../../res/images/space/CorridorOne.jpg')}
                onLoadEnd={_onLoadEnd}
            />
            {/* <ViroCamera position={[-1, 0, 0]} active={true} rotation={[0, 0, 0]} /> */}
            <ViroNode
                position={[-1.5, 0, -1]}
            >
                <ViroSphere
                    position={[0, 0, 0]}
                    radius={0.1}
                    materials={["sphere1"]}
                    animation={{ name: 'spin', run: true, loop: true }}
                    onHover={(isHovering, position, source) => {
                        sceneNavigator.push({ scene: DrOffice })
                    }}
                />
                <ViroText position={[0.1, -0.7, 0]} text="Enter DR office" style={{ color: '#f1f2f6', fontWeight: 'bold' }} />
            </ViroNode>
            <ViroNode
                position={[-1.5, 0, -2]}
            >
                <ViroSphere
                    position={[0, 0, 0]}
                    radius={0.1}
                    materials={["sphere1"]}
                    animation={{ name: 'spin', run: true, loop: true }}
                    onHover={(isHovering, position, source) => {
                        sceneNavigator.push({ scene: CorridorTwo })
                    }}
                />
                <ViroText position={[0.1, -0.7, 0]} text="Move ahead" style={{ color: '#f1f2f6', fontWeight: 'bold' }} />
            </ViroNode>
            <ViroNode
                position={[1.5, 0, -1]}
            >
                <ViroSphere
                    position={[0, 0, 0]}
                    radius={0.1}
                    materials={["sphere1"]}
                    animation={{ name: 'spin', run: true, loop: true }}
                    onHover={(isHovering, position, source) => {
                        sceneNavigator.push({ scene: Lobby })
                    }}
                />
                <ViroText position={[0.1, -0.7, -1]} text="Go to Lobby" style={{ color: '#f1f2f6', fontWeight: 'bold' }} />
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

export default CorridorOne
