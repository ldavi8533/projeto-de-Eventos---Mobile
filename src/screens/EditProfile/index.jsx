import { View, Text, Button } from 'react-native';

import colors from '../../style/colors';

const EditProfile = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>EditProfile</Text>
            <Button title='Salvar' color={colors.primaryColor}
                    onPress={() => navigation.navigate('Profile')}
                />
        </View>
    );
}
export default EditProfile;