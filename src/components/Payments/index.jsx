import React, {useState} from "react";
import {View, StyleSheet, TextInput, SafeAreaView, Dimensions} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Colors from "../../style/colors";

const Payments = ({icon,Pname}) => {
    const [text, setText] = useState ('');
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.cabecalho}>
            <Ionicons name={icon} size={30} 
                color={Colors.primaryLight}
            />
            <TextInput style={styles.input} 
                placeholder={Pname}
                paddingLeft={15} 
                autoCapitalize="none" 
                autoCorrect={false} 
                value={text} 
                onChangeText={(value) => setText(value)}
            />
        </View>
    </SafeAreaView>
    );
};
 
const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    

    },
    cabecalho:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 50,
        borderRadius: 5,
        margin: 0,
        padding: 10,
        
    },
    input:{
        flex: 0.80,
        backgroundColor: 'white',
        fontSize: 20,
    
    },
});

export default Payments