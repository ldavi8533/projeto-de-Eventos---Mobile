import { View, Text } from 'react-native';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Payments from '../../components/Payments';

import Colors from '../../style/colors';

const TicketPage = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Text>Informações do cartão de crédito</Text>
            <Payments Pname={"Número do cartão"} ></Payments>
            <Payments Pname={"Nome impresso no cartão"} ></Payments>
            <View style={{flexDirection: 'row'}}>
                <Payments Pname={"CVV"} ></Payments>   
                <Payments Pname={"Validade"} ></Payments>
            </View>
            <Payments Pname={"CPF"} ></Payments>
            <Payments Pname={"Apelido do cartão"} ></Payments>  

        </View>
    );
}
export default TicketPage;