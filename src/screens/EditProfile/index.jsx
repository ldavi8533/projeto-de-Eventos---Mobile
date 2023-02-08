import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { EditProfileLabel } from '../../components/EditProfileLabel';
import OtherButton from '../../components/OtherButton';
import colors from '../../style/colors';
import { ProfileImage } from '../../components/ProfileImage';
import Payments from '../../components/Payments';


const EditProfile = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>

            <ProfileImage />

        <View style={styles.texts}>

            <EditProfileLabel
                style={styles.label}
                labelTitle='Nome'
            />
            <Payments Pname={'Reyson Renan Lustosa'}/>

            <EditProfileLabel
                style={styles.label}
                labelTitle='Apelido'
            />
            <Payments Pname={'Reyson Ferreira'}/>

            <EditProfileLabel
                style={styles.label}
                labelTitle='Email'
            />
            <Payments Pname={'reysonrenan@gmail.com'}/>

            <EditProfileLabel
                style={styles.label}
                labelTitle='Telefone'
            />
            <Payments Pname={'(83) 9xxxx-xxxx'}/>

        </View >

        <View style={styles.button}>
            <OtherButton title='Salvar' color={colors.primaryColor}
                    onPress={() => navigation.navigate('Profile')}
            />
        </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    texts: {
        marginTop: 50 ,
        marginBottom: 20
    },
    button: {
        alignItems: 'center',
    }
})
export default EditProfile;