import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text } from 'react-native';
import { Heading } from '../../components/ProfileLabel';
import  profileImg  from '../../assets/profile-test.png';

const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={profileImg}
                style={styles.profileImg}
            />
            <Text style={{fontSize: 23, fontWeight: 'bold'}}>Reyson Ferreira</Text>

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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 30,
    },
    profileImg: {
        width: 115,
        height: 115,
        borderRadius: 115 / 2
    },
    label: {
        paddingBottom: 10
    }
})
export default Profile;