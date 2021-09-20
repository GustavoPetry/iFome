import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
    KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform
} from 'react-native';

import Map from '../../components/Maps';
import { LinearGradient } from 'expo-linear-gradient';
 
export default function Inicial ({ navigation }) {
    return (
        <View style={styles.containerAlert}>
            <Map />
            <Marker
                  coordinate={{latitude: latitude,
            longitude: longitude}}
                />
        </View>
    );
}


const styles = StyleSheet.create({
    containerAlert: {
        alignItems: 'center',
        marginTop: '80%'
    },

    containerAlertTwo: {
        fontSize: 20,
        fontWeight: '700'
    },

    containerAlertThree: {
        fontSize: 50
    }

});



