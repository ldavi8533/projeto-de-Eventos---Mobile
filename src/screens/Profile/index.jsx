import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text, Button, View } from 'react-native';
import { Heading } from '../../components/ProfileLabel';
import profileImg from '../../assets/profile-test.png';
import OtherButton from '../../components/OtherButton';
import colors from '../../style/colors';

const Profile = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.profileBackground}></View>

            <Image
                source={profileImg}
                style={styles.profileImg}
            />
            <Text style={styles.name}>Reyson Ferreira</Text>

            <View style={styles.texts}>

                <Heading
                    style={styles.label}
                    labelTitle='Nome'
                    labelSubtitle='Reyson Renan Lustosa'
                />

                <Heading
                    style={styles.label}
                    labelTitle='Apelido'
                    labelSubtitle='Reyson Ferreira'
                />

                <Heading
                    style={styles.label}
                    labelTitle='Email'
                    labelSubtitle='reysonrenan@gmail.com'
                />

                <Heading
                    style={styles.label}
                    labelTitle='Telefone'
                    labelSubtitle='(83) 9xxxx-xxxx'
                />
            </View>

            <View style={styles.button}>
                <Button title='Editar perfil' color={colors.primaryColor}
                    onPress={() => navigation.navigate('EditProfile')}
                />
                <Button title='Sair' color={colors.dangerColor}
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileImg: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        marginTop: 120,
        marginLeft: 50
    },
    profileBackground: {
        width: 500,
        height: 400,
        backgroundColor: '#377481',
        position: "absolute",
        bottom: 630
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 40
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
export default Profile;