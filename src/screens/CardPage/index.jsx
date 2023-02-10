import { View, ScrollView} from 'react-native';

import Button from '../../components/Button';

import Colors from '../../style/colors';

import InfoCardPage from '../../components/InfoCardPage'

const CardPage = ({ navigation }) => {

    return (
        <View >
            

            <ScrollView maximumZoomScale={true}>

                <InfoCardPage />

                <View style={{ paddingLeft:30, paddingRight:30, paddingBottom:10 }}>
                    <Button title='Comprar ingresso'
                    colorBorder={Colors.primaryColor}
                    colorButton={Colors.primaryColor}
                    colorText={Colors.whiteColor}
                    onPress={() => navigation.navigate('TicketPage')} 
                    />
                </View>
            
            </ScrollView>
        </View>

    );
}
export default CardPage;
