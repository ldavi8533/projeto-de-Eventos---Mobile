import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function EditProfileLabel(Props) {

  return (
    <View style={styles.container}>
        <Text style={styles.labelTitle}>
            {Props.labelTitle}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    labelTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 38
    }
})