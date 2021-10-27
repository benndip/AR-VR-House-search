import React, { useState } from 'react'
import { View, Text } from 'react-native'

import {
    ViroScene,
    Viro360Image,
    ViroBox,
    ViroButton,
    ViroNode,
    ViroOrbitCamera,
    ViroCamera,
    ViroText,
    ViroSphere,
    ViroMaterials,
    ViroAnimations
} from '@viro-community/react-viro'

const Room = ({ sceneNavigator }) => {

    const [loading360Image, setLoading360Image] = useState(false)

    const _onLoadStart = () => {
        setLoading360Image(true)
    }

    const _onLoadEnd = () => {
        setLoading360Image(true)
    }

    return (
        <ViroScene>
            <Viro360Image
                source={require('../../../res/images/house1/r1.jpg')}
                onLoadStart={_onLoadStart}
                onLoadEnd={_onLoadEnd}
            />
            <ViroCamera position={[-1, 0, 0]} active={true} rotation={[0, 0, 0]} />
            <ViroNode
                position={[-1, 0, -1]}
            >
                <ViroSphere
                    position={[0, 0, 0]}
                    radius={0.1}
                    materials={["sphere1"]}
                    animation={{ name: 'spin', run: true, loop: true }}
                    onHover={(isHovering, position, source) => {
                        sceneNavigator.pop()
                    }}
                />
                <ViroText position={[0.1, -0.7, -1]} text="Back To Palor" style={{ color: '#f1f2f6', fontWeight: 'bold' }} />
            </ViroNode>
            {
                !loading360Image
                &&
                <ViroText text="Loading room..." position={[0, 0, 0]} />
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