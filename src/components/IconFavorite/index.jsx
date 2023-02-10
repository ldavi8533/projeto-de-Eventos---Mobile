import React, { useState } from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import { Ionicons } from '@expo/vector-icons';


const IconFavorite = () =>{

    const [color, setColor] = useState(true)

    return(
        <View>
            {color?

             <TouchableOpacity style={styles.iconFavorite} onPress={() => setColor(!color)}>
            <Ionicons name='heart-outline' size={30}/>
            </TouchableOpacity>
        :
            <TouchableOpacity style={styles.iconFavorite} onPress={() => setColor(!color)}>
                <Ionicons name='heart' color='black' size={30}/>
            </TouchableOpacity>

            }
        </View>
        
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