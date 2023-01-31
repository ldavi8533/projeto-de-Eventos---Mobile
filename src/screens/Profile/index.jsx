import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text, ImageBackground, View } from 'react-native';
import { Heading } from '../../components/ProfileLabel';
import  profileImg  from '../../assets/profile-test.png';

const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.profileBackground}></View> 
            
            <Image 
                source={profileImg}
                style={styles.profileImg}
            />

            <Text style={styles.name}>Reyson Ferreira</Text>

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
        width: 130,
        height: 130,
        borderRadius: 130 / 2, 
        position: 'absolute',
        bottom: 520,
        left: 110
    },
    label: {
        paddingBottom: 10
    },
    profileBackground: {
        width: 400,
        height: 400,
        borderRadius: 200,
        backgroundColor: '#377481',
        transform: [{ scaleX: 2 }],
        position: "absolute",
        right: -26,
        bottom: 580,
    },
    name: {
        fontSize: 23,
        fontWeight: 'bold',
        
    }
})
export default Profile;