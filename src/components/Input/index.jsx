import { View, Text, StyleSheet } from "react-native";
import { Input as InputUI } from "@rneui/themed";

import Colors from "../../style/colors";

const Input = ({
    label,
    placeholder,
    password,
    value,
    error,
    onChange,
    onBlur,
}) => {
    return (
        <View style={styles.inputContainer}>
            {label ? <Text style={styles.InputLable}>{label}</Text> : null}
            <InputUI
                placeholder={placeholder ? placeholder : ""}
                secureTextEntry={password}
                style={styles.input}
                inputContainerStyle={styles.disable}
                containerStyle={styles.disable}
                onChangeText={(e) => onChange(e)}
                onBlur={(e) => onBlur(e)}
                value={value}
                errorMessage={error}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 8,
    },
    input: {
        backgroundColor: Colors.whiteColor,
        paddingHorizontal: 15,
        paddingVertical: 15,
        fontSize: 16,
        borderRadius: 10,
        marginBottom: -22,
        borderColor: Colors.primaryColor,
        borderWidth: 1,
        shadowColor: Colors.darkColor,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.62,
        elevation: 4,
    },
    InputLable: {
        marginBottom: 8,
        fontWeight: "500",
    },
    disable: {
        borderBottomWidth: 0,
        marginBottom: 0,
        paddingHorizontal: 0,
        marginTop: 0,
        paddingVertical: 0,
        margin: 0,
        padding: 0,
    },
});

export default Input;