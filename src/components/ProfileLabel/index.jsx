import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Heading(Props) {
  return (
    <View>
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
        fontSize: 19,
        fontWeight: 'bold'

    },
    labelSubtitle:{
        fontSize: 19
    }
})