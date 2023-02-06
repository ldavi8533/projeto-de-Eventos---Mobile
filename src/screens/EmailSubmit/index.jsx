import { View, Image, TouchableOpacity, Text } from 'react-native';

import Container from '../../components/Container';
import Button from '../../components/Button';

import Logo from '../../assets/logo.png';
import Colors from '../../style/colors';

const EmailSubmit = ({ navigation }) => {
    return (
        <Container>

            <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 18 }}>
                <View style={{ alignItems: 'center', marginBottom: 32 }}>
                    <Image source={Logo} />
                </View>
                <Text style={{ textAlign: 'center', marginBottom: 8, fontSize: 19, color: Colors.primaryColor }}>
                    Enviamos as instruções para recuperação de senha para o seu e-mail.
                </Text>
                <TouchableOpacity style={{ marginTop: 12 }} onPress={() => handleSubmit()} >
                    <Button title="Login"
                        colorBorder={Colors.primaryColor}
                        colorButton={Colors.primaryColor}
                        colorText={Colors.whiteColor}
                        onPress={() => navigation.navigate('Login')}
                    />
                </TouchableOpacity>
            </View>
        </Container>
    );
}
export default EmailSubmit;