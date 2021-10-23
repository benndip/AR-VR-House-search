import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './House.style'

const House = ({ item, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Image
                source={item.images[0]}
                style={styles.image}
            />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
        </TouchableOpacity>

    )
}

export default House
