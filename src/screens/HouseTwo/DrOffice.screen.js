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

const DrOffice = ({ sceneNavigator }) => {

    const [loading360Image, setLoading360Image] = useState(true)

    const _onLoadEnd = () => {
        setLoading360Image(false)
    }

    return (
        <ViroScene>
            <ViroAmbientLight color="#ffffff" />
            <Viro360Image
                source={require('../../../res/images/space/DrOffice.JPG')}
                onLoadEnd={_onLoadEnd}
            />
            <ViroNode
                position={[-1.5, -0.7, 1]}
                rotation={[0, 150, 0]}
            >
                <ViroSphere
                    position={[-0.35, 0.3, 0]}
                    radius={0.1}
                    materials={["sphere1"]}
                    animation={{ name: 'spin', run: true, loop: true }}
                    onHover={(isHovering, position, source) => {
                        sceneNavigator.pop()
                    }}
                />
                <ViroText position={[0.2, -0.7, -1]} text="Back To Corridor" style={{ color: '#f1f2f6', fontWeight: 'bold' }} />
            </ViroNode>
            {
                loading360Image
                &&
                <ViroText text="Loading DR Office..." position={[0, 0, 0]} />
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

export default DrOffice
