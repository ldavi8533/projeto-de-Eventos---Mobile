import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function EditProfileButton() {
  return (
    <View>
        <TouchableOpacity>
        <Ionicons name="camera-reverse" size={25} color={'#377481'}/>
        </TouchableOpacity>
    </View>
  );
}