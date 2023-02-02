import { View, Text } from 'react-native';
import Payments from '../../components/Payments';

const Favorites = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>PaymentsPayments</Text>
            <Payments Pname={"cartao"} inco={"card"} />
            <Payments Pname={"senha"} inco={"locked-close"} />
        </View>
    );
}
export default Favorites;