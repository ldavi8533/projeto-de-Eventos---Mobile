import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export function EditProfileLabel(Props) {

    const [text, onChange] = React.useState('');

  return (
    <View style={styles.container}>
        <Text style={styles.labelTitle}>
            {Props.labelTitle}
        </Text>

        <TextInput 
            style={styles.labelSubtitle}
            onChange={onChange}
            value={text}
            placeholder={Props.labelSubtitle}
            placeholderTextColor='#377481'
        />
    </View>
  );
}

const styles = StyleSheet.create({
    labelTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    labelSubtitle:{
        fontSize: 20,
        paddingBottom: 10
    }
})