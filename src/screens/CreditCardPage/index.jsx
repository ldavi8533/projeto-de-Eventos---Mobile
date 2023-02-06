import { View, Text, Alert } from 'react-native';

import Button from '../../components/Button';

import Colors from '../../style/colors';

const CreditCardPage = ({ navigation }) => {
    const AlertOk = () =>
        Alert.alert('Cartão cadastrado com sucesso', 'Aperte ok para continuar', [
            { text: 'OK'},
        ]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Text>Adicionar novo cartão</Text>

            <Button title='Prosseguir'
                colorBorder={Colors.primaryColor}
                colorButton={Colors.primaryColor}
                colorText={Colors.whiteColor}
                onPress={() => [AlertOk(), navigation.goBack()]}
            />
            <Button title='Cancelar'
                colorBorder={Colors.primaryColor}
                colorButton={Colors.whiteColor}
                colorText={Colors.primaryColor}
                onPress={() => navigation.goBack()}
            />

        </View>
    );
}
export default CreditCardPage;