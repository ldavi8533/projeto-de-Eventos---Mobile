import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import profileImg from '../../assets/profile-test.png';

export function ProfileImage() {
  return (
    <View style={styles.viewImage}>
        <Image
            source={profileImg}
            style={styles.profileImg}
        />
        
        <Text style={styles.name}>Reyson Ferreira</Text>
    </View>

  );
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    viewImage: {
        justifyContent: 'center',
        alignItems:'center',
        marginTop: deviceWidth -320
    },
    profileImg: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
    }
})