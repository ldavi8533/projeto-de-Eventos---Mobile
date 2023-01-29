import React from "react";
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

const Card = () => {
    return(
        <View style={styles.cardContainer}>
            <Image style = {styles.imageStyle} source={require('../../assets/image03.png')} />
            <Text style = {styles.titleStyle}>Night club</Text>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    cardContainer: {
        width: deviceWidth - 25, 
        backgroundColor:'white',
        height:240,
        borderRadius: 10,    
        alignItems:'center',   

        shadowColor:'#000',
        shadowOffset:{
            height: 5,
        },
        shadowOpacity: 0.55,
        shadowRadius: 5,
        elevation:9,
    },

    imageStyle:{
        top:15,
        height: 130,
        width: deviceWidth - 60,
    },

    titleStyle:{
        fontSize: 20,
    }
});

export default Card;
