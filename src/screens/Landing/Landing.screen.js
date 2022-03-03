import React from 'react'
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import {
    ViroScene,
    ViroSkyBox,
    ViroVRSceneNavigator,
    Viro3DObject,
    ViroAmbientLight,
    ViroBox,
    ViroOrbitCamera
} from '@viro-community/react-viro'

import styles from './Landing.style'
import FrontStairs from '../HouseTwo/FrontBank.screen'


const LandingScene = () => {
    return (
        <ViroScene>
            <ViroAmbientLight color="#ffffff" />
            <ViroSkyBox source={{
                nx: require('../../../res/images/grid_bg.jpg'),
                px: require('../../../res/images/grid_bg.jpg'),
                ny: require('../../../res/images/grid_bg.jpg'),
                py: require('../../../res/images/grid_bg.jpg'),
                nz: require('../../../res/images/grid_bg.jpg'),
                pz: require('../../../res/images/grid_bg.jpg')
            }} />
            <ViroOrbitCamera active={true} position={[0, 0, -0]} focalPoint={[0, 0, -0.5]} />
            <Viro3DObject
                source={require("../../../res/autumn_house/house.obj")}
                resources={[
                    require('../../../res/autumn_house/house.mtl'),
                ]}
                position={[0, -1, -4]}
                scale={[0.1, 0.1, 0.1]}
                rotation={[0, -90, 0]}
                type="OBJ"
            />
        </ViroScene>
    )
}

const Landing = ({ navigation, sceneNavigator }) => {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <ViroVRSceneNavigator
                vrModeEnabled={false}
                initialScene={{
                    scene: LandingScene,
                }}
            />
            <TouchableOpacity
                style={styles.exploreBtn}
                onPress={()=>navigation.navigate('VrHomeTwo')}
            >
                <Text style={styles.exploreTxt}>Explore</Text>
            </TouchableOpacity>
            <Text style={styles.welcomeText}>Welcome to DrVerse</Text>
            <Text style={styles.largeText}>Explore Virtual World You Have Never Felt Like .</Text>
            <Text style={styles.smallText}>Embark your journey to the limitless virtual world in your home.</Text>
            <Text style={styles.poweredByDr}>Powered by Digital Renter</Text>
        </View>
    );
}

export default Landing
