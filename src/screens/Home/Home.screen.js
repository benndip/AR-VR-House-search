import React from 'react'
import { View, Text, FlatList } from 'react-native'

import styles from './Home.style'
import data from '../../../res/data'
import { House } from '../../components'

const Home = () => {

    const renderItem = ({ item }) => {
        return (
            <House item={item} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                style={{ alignSelf: 'center', width: '100%' }}
            />
        </View>
    )
}

export default Home
