import { useState } from 'react';
import { View, Text, Modal } from 'react-native';
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
            <Payments Pname={"CVV"} ></Payments>   
            <Payments Pname={"Validade"} ></Payments>
            <Payments Pname={"CPF"} ></Payments>
            <Payments Pname={"Apelido do cartão"} ></Payments>  
            
            <View style={{marginTop: 15}}>
                <Button title='Cadastrar cartão'
                colorText={Colors.whiteColor}
                colorButton={Colors.primaryColor}
                colorBorder={Colors.primaryColor}
                onPress={() => navigation.navigate('CreditCardPage')}
                />
            </View>
            

        </View>
    );
}
export default TicketPage;