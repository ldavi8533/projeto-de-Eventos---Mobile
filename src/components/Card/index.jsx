import React from "react";
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import IconCard from "../IconsCard";

const Card = () => {
    return(
        <View style={styles.cardContainer}>
            <Image style = {styles.imageStyle} source={require('../../assets/image03.png')} />
           
            <View style={styles.infoStyle}>
                 <Text style = {styles.titleStyle}>Night club</Text>
            </View>

            <View style={styles.iconLableStyle}>
                <IconCard name='calendar' label='11/09' color='black'/>
                <IconCard name='map' label='Praça central' color='black'/>
            </View>
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
        marginTop: 10,

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
        left: 18,
    },

    titleStyle:{
        left: 18,
        fontSize: 20,
        marginTop: 20,
    },

    iconLableStyle:{
        flexDirection: 'row',
        marginTop: 35,
    }
});

export default Card;
