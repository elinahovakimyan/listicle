import React from 'react';
import { ScrollView, Text, Image, View, Pressable, Linking } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import ImageCarousel from '../../../components/ImageCarousel';

const ProductDetails = ({ route, navigation }) => {
    const { product } = route?.params || {};

    const onBackPress = () => {
        navigation.goBack();
    }

    const onContact = () => {
        // Make a phone call
        const phone = '127282827'
        Linking.openURL(`tel:${phone}`);

        // Send an Email
        const email = 'support@mail.com'
        Linking.openURL(`mailto:${email}`)
    }
    
    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>
                {product?.images?.length ? (
                    <ImageCarousel images={product?.images} />
                ) : (
                    <Image style={styles.image} source={{ uri: product?.image }} />
                )}
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>

                <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../../assets/back.png')} />
                </Pressable>
            </ScrollView>

            <View style={styles.footer}>
                <Pressable style={styles.bookmarkContainer}>
                    <Image style={styles.bookmarkIcon} source={require('../../../assets/bookmark_blue.png')} />
                </Pressable>
                <Button onPress={onContact} title="Contact Seller" />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetails);