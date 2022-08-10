import React from 'react';
import Config from 'react-native-config';
import { Pressable, Text, View, Image } from 'react-native';
import { styles } from './styles';

const FavoriteItem = ({ title, price, icon, image, onPress, onIconPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{ uri: `${Config.API_BASE_URL}/${image?.path}` }} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>

            <Pressable onPress={onIconPress}>
                <Image source={icon || require('../../assets/close.png')} style={styles.icon} />
            </Pressable>
        </Pressable>
    )
}

export default React.memo(FavoriteItem);