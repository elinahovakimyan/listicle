import React, { useState } from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import Input from '../Input';
import { styles } from './styles';

const FavoriteItem = ({ title, price, icon, image, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{uri: image}} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>

            <Image source={icon || require('../../assets/close.png')} style={styles.icon} />
        </Pressable>
    )
}

export default React.memo(FavoriteItem);