import React from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

const EditableBox = ({ label, value, onChangeText, editable, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput editable={editable} value={value} onChangeText={onChangeText} style={styles.input} />
        </View>
    )
}

export default React.memo(EditableBox);