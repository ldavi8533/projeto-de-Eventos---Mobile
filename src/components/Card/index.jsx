import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import IconCard from "../IconsCard";
import IconFavorite from "../IconFavorite";

const Card = ({ info, navigation }) => {
    const { name, data, place, image } = info;
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('CardPage')}>
            <Image style={styles.imageStyle} source={image} />

            <View style={styles.infoStyle}>
                <Text style={styles.titleStyle}>{name}</Text>
                <IconFavorite />
            </View>

            <View style={styles.iconLableStyle}>
                <IconCard name='calendar' label={data} color='black' />
                <IconCard name='map' label={place} color='black' />
            </View>
        </TouchableOpacity>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    cardContainer: {
        width: deviceWidth - 25,
        backgroundColor: 'white',
        height: 240,
        borderRadius: 10,
        marginTop: 5,
        marginBottom:5,

        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4
    },

    imageStyle: {
        top: 15,
        height: 130,
        width: deviceWidth - 60,
        left: 18,
    },

    titleStyle: {
        left: 18,
        fontSize: 20,
        marginTop: 20,
    },

    iconLableStyle: {
        flexDirection: 'row',
        marginTop: -15,
    }
});

export default Card;
