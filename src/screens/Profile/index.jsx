import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { ProfileLabel } from '../../components/ProfileLabel';
import { ProfileImage } from '../../components/ProfileImage';
import OtherButton from '../../components/OtherButton';
import colors from '../../style/colors';

const Profile = ({navigation}) => {

    return (
        <ScrollView style={styles.container}>

            <View style={styles.containerImageProfile}>
                <ProfileImage />
                <View style={styles.editProfileButton}></View>
            </View>

            <View style={styles.nameContainer}>
                <Text style={styles.name}>Reyson Ferreira</Text>
            </View>

            <View style={styles.texts}>

                <ProfileLabel
                    style={styles.label}
                    labelTitle='Nome'
                    labelSubtitle='Reyson Renan Lustosa'
                />

                <ProfileLabel
                    style={styles.label}
                    labelTitle='Apelido'
                    labelSubtitle='Reyson Ferreira'
                />

                <ProfileLabel
                    style={styles.label}
                    labelTitle='Email'
                    labelSubtitle='reysonrenan@gmail.com'
                />

                <ProfileLabel
                    style={styles.label}
                    labelTitle='Telefone'
                    labelSubtitle='(83) 9xxxx-xxxx'
                />
            </View>

            <View style={styles.button}>
                <OtherButton title='Editar perfil' color={colors.primaryColor}
                    onPress={() => navigation.navigate('EditProfile')}
                />
                <OtherButton title='Sair' color={colors.dangerColor}
                    onPress={() => navigation.navigate('Login')}
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
    },
    nameContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 20
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    containerImageProfile:{
        width: 130,
        alignSelf: 'center'
    }
})
export default Profile;