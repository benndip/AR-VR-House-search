import React, {useEffect, useState} from 'react'
import { View } from 'react-native'
import {
    ViroVRSceneNavigator,
} from '@viro-community/react-viro'

import styles from './VrHomeTwo.style'

import FrontBank from '../HouseTwo/FrontBank.screen'

const VrHomeTwo = () => {

    const [showScene, setShowScene] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowScene(true)
        }, 1000);
      
      }, [])

    return (
        <>
            {
                showScene
                &&
                <ViroVRSceneNavigator
                    initialScene={{
                        scene: FrontBank
                    }}
                />
            }
        </>
    )
}

export default VrHomeTwo
