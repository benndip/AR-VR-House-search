import React from 'react'
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import {
    ViroScene,
    ViroSkyBox,
    ViroVRSceneNavigator
} from '@viro-community/react-viro'

import styles from './Landing.style'
import FrontStairs from '../HouseTwo/FrontBank.screen'


const LandingScene = () => {
    return (
        <ViroScene>
            <ViroSkyBox source={{
                nx: require('../../../res/images/grid_bg.jpg'),
                px: require('../../../res/images/grid_bg.jpg'),
                ny: require('../../../res/images/grid_bg.jpg'),
                py: require('../../../res/images/grid_bg.jpg'),
                nz: require('../../../res/images/grid_bg.jpg'),
                pz: require('../../../res/images/grid_bg.jpg')
            }} />
        </ViroScene>
    )
}

const Landing = ({ navigation, sceneNavigator }) => {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            {/* <ViroVRSceneNavigator
                vrModeEnabled={false}
                initialScene={{
                    scene: LandingScene,
                }}
            /> */}
            <Image
                source={require('../../../res/images/gearVr.png')}
                style={styles.image}
            />

            <TouchableOpacity
                style={styles.exploreBtn}
                onPress={()=>navigation.navigate('VrHomeTwo')}
            >
                <Text style={styles.exploreTxt}>Explore</Text>
            </TouchableOpacity>
            <Text style={styles.largeText}>Explore Virtual World You Have Never Felt Like .</Text>
            <Text style={styles.smallText}>Embark your journey to the limitless virtual world in your home.</Text>
            <Text style={styles.poweredByDr}>Powered by Digital Renter</Text>
        </View>
    );
}

export default Landing
