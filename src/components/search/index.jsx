import React, {useState} from "react";
import {View, StyleSheet, TextInput, SafeAreaView, Dimensions} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Colors from "../../style/colors";

const Search = () => {
    const [text, setText] = useState ('');
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.cabecalho}>
        <Ionicons name="search" size={30} color='white'/>
        <TextInput style={styles.input} placeholder="Pesquisar" autoCapitalize="none" autoCorrect={false} value={text} onChangeText={(value) => setText(value)}/>
        <Ionicons name="close" size={30} color='white'/>
    </View>
    </SafeAreaView>
    );
};
 
const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: 120,
        backgroundColor: Colors.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cabecalho:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primaryLight,
        height: 50,
        borderRadius: 5,
        margin: 0,
        padding: 10,
    },
    
    input:{
        flex: 0.80,
        backgroundColor: Colors.primaryLight,
        fontSize: 20,
    },
});

export default Search