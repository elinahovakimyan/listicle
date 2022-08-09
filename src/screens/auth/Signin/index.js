import React, { useContext, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { login } from '../../../utils/backendCalls';
import { UserContext } from '../../../../App';

const Signin = ({ navigation }) => {
    const [values, setValues] = useState({});
    const { setUser } = useContext(UserContext);

    const onSignUp = () => {
        navigation.navigate('Signup')
    }

    const onBack = () => {
        navigation.goBack()
    }

    const onChange = (key, value) => {
        setValues(v => ({ ...v, [key]: value }))
    }

    const onSubmit = async () => {
        const token = await login(values);

        setUser({ token })
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Sign In" />

                <Input value={values.email} onChangeText={(v) => onChange('email', v)} label="E-mail" placeholder="example@gmail.com" />
                <Input value={values.password} onChangeText={(v) => onChange('password', v)} isPassword label="Password" placeholder="*******" />

                <Button onPress={onSubmit} style={styles.button} title="Sign In"  />

                <Separator text="Or sign in with" />

                <GoogleLogin />

                <Text style={styles.footerText}>
                    Don't have an account?
                    <Text onPress={onSignUp} style={styles.footerLink}> Sign Up</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Signin);