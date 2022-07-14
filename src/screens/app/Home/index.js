import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>HOME</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Home);