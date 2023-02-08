import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { EditProfileLabel } from '../../components/EditProfileLabel';
import OtherButton from '../../components/OtherButton';
import colors from '../../style/colors';
import { ProfileImage } from '../../components/ProfileImage';


const EditProfile = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>

            <ProfileImage />

        <View style={styles.texts}>

            <EditProfileLabel
                style={styles.label}
                labelTitle='Nome'
                labelSubtitle='Reyson Renan Lustosa'
            />

            <EditProfileLabel
                style={styles.label}
                labelTitle='Apelido'
                labelSubtitle='Reyson Ferreira'
            />

            <EditProfileLabel
                style={styles.label}
                labelTitle='Email'
                labelSubtitle='reysonrenan@gmail.com'
            />

            <EditProfileLabel
                style={styles.label}
                labelTitle='Telefone'
                labelSubtitle='(83) 9xxxx-xxxx'
            />

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
        margin: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 70,
        marginBottom: 60
    },
    button: {
        alignItems: 'center',
    }
})
export default EditProfile;