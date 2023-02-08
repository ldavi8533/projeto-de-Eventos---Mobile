import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function ProfileLabel(Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.labelTitle}>
            {Props.labelTitle}
        </Text>

        <Text style={styles.labelSubtitle}>
            {Props.labelSubtitle}
        </Text>
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