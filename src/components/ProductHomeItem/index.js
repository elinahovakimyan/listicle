import React, { useState } from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import Input from '../Input';
import { styles } from './styles';

const ProductHomeItem = ({ title, price, image, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{uri: image}} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </Pressable>
    )
}

export default React.memo(ProductHomeItem);