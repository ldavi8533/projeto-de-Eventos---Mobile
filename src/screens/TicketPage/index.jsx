import { View, Text } from 'react-native';
import Button from '../../components/Button';

import Colors from '../../style/colors';

const TicketPage = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Text>Métodos de pagamento</Text>

            <Button title='Cadastrar novo cartão'
                colorText={Colors.whiteColor}
                colorButton={Colors.primaryColor}
                colorBorder={Colors.primaryColor}
                onPress={() => navigation.navigate('CreditCardPage')}
            />

        </View>
    );
}
export default TicketPage;