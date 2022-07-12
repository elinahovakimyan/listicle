import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const Checkbox = ({ checked, onCheck }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => onCheck(!checked)} style={styles.container}>
            {checked ? (
                <View style={styles.innerContainer}>
                    <Image style={styles.checkIcon} source={require('../../assets/check.png')} />
                </View>
            ) : null}
        </TouchableOpacity>
    )
}

export default React.memo(Checkbox);