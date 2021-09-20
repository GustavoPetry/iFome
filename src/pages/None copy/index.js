import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
    KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform
} from 'react-native';



export default function None() {
    return (
        <View style={styles.containerAlert}>
            <Text style={styles.containerAlertTwo}>AVISO GUSTAVO</Text>
            <Text>Quem não souber criar, essa é uma tela em branco</Text>
            <Text style={styles.containerAlertThree}>👓</Text>
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



