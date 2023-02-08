import { View, Text } from 'react-native';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Payments from '../../components/Payments';

import Colors from '../../style/colors';

const TicketPage = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Text>Formas de pagamento</Text>
            <Payments Pname={"Cartão de Crédito"} icon={"card"}></Payments>
            <Payments Pname={"Boleto"} icon={"barcode"}></Payments>
            <Payments Pname={"Pix"} icon={"scan"}></Payments>

        </View>
    );
}
export default TicketPage;