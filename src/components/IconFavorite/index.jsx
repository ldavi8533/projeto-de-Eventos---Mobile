import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import { Ionicons } from '@expo/vector-icons';


const IconFavorite = () =>{
    return(
        <TouchableOpacity style={styles.iconFavorite}>
            <Ionicons name='heart-outline' size={30}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconFavorite:{
        alignItems:'flex-end',
        marginRight: 18,
        marginTop: 20,
    }
});

export default IconFavorite;