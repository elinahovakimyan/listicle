import React, { useContext, useState } from 'react';
import { ActivityIndicator, Image, KeyboardAvoidingView, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import { launchImageLibrary } from 'react-native-image-picker';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { categories } from '../../../data/categories';
import { addService } from '../../../utils/backendCalls';
import { ServicesContext } from '../../../../App';

const CreateListing = ({ navigation }) => {
    const [images, setImages] = useState([]);
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false);
    const { setServices } = useContext(ServicesContext);

    const goBack = () => {
        navigation.goBack();
    };

    const uploadNewImage = async () => {
        setLoading(true);
        const result = await launchImageLibrary();

        if (result?.assets?.length) {
            const assets = result?.assets || [];
            setImages(list => ([...list, ...assets]));
            setLoading(false);
        }
    };

    const onDeleteImage = (image) => {
        setImages((list) => {
            const filteredImages = list.filter(img => img?.fileName !== image?.fileName);
            return filteredImages;
        });
    };

    const onChange = (value, key) => {
        setValues(val => ({ ...val, [key]: value }));
    };

    const onSubmit = async () => {
        const img = images?.length ? images[0] : null;
        const data = {
            ...values,
            category: values.category?.id,
        };

        if (img) {
            data.image = {
                uri: img?.uri,
                name: img?.fileName,
                type: img?.type,
            };
        }
        const updatedServices = await addService(data);
        setServices(updatedServices);
        // setValues({});
        navigation.navigate('MyListings');
    };

    return (
        <SafeAreaView>
            <Header showBack={true} onBackPress={goBack} title='Create a new listing' />

            <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior='position'>
                    <Text style={styles.sectionTitle}>Upload Photos</Text>

                    <View style={styles.imageRow}>
                        <TouchableOpacity disabled={loading} style={styles.uploadContainer} onPress={uploadNewImage}>
                            <View style={styles.uploadCircle}>
                                <Text style={styles.uploadPlus}>+</Text>
                            </View>
                        </TouchableOpacity>

                        {images?.map(image => (
                            <View style={styles.imageCont} key={image?.fileName}>
                                <Image style={styles.image} source={{ uri: image?.uri }} />
                                <Pressable hitSlop={20} onPress={() => onDeleteImage(image)}>
                                    <Image style={styles.delete} source={require('../../../assets/close.png')} />
                                </Pressable>
                            </View>
                        ))}

                        {loading ? (
                            <ActivityIndicator />
                        ) : null}
                    </View>

                    <Input placeholder='Listing Title' label='Title' value={values.title} onChangeText={v => onChange(v, 'title')} />
                    <Input placeholder='Select the category' label='Category' value={values.category} onChangeText={v => onChange(v, 'category')} type='picker' options={categories} />
                    <Input placeholder='Enter price in USD' label='Price' value={values.price} onChangeText={v => onChange(v, 'price')} keyboardType='numeric' />
                    <Input style={styles.textarea} placeholder='Tell us more...' label='Description' value={values.description} onChangeText={v => onChange(v, 'description')} multiline />
                </KeyboardAvoidingView>

                <Button onPress={onSubmit} title='Submit' style={styles.button} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(CreateListing);
