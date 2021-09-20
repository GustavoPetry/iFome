import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
    KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, Dimensions
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';



export default function RegisterPfOne({ navigation }) {
    return (

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={styles.container}>

                    <View style={styles.containerGeneral}>
                        <Text style={styles.containerTitle}>Cadastro - Pessoa Física</Text>
                        <Text style={styles.subTitle}>Se você deseja doar ou receber alimentos, preencha os dados abaixo</Text>
                    </View>
                    <View style={styles.containerCircle}>
                        <LinearGradient
                            // Background Linear Gradient
                            colors={['rgba(0,0,0,0.8)', 'transparent']}
                            style={styles.backgroundButton}
                        />
                        <LinearGradient
                            // Button Linear Gradient
                            colors={['#991212', '#C30459']}
                            style={styles.circleButton}>
                            <Text style={styles.textButtonCircle}> 1 </Text>
                        </LinearGradient>
                    </View>
                    <Text style={styles.inputsTitle}>Dados pessoais</Text>





                    <View style={styles.input} >
                        <TextInput style={styles.TextInput}
                            placeholder="Nome Completo*">
                        </TextInput>
                    </View>
                    <View style={styles.input} >
                        <TextInput style={styles.TextInput}
                            placeholder="RG*">
                        </TextInput>
                    </View>
                    <View style={styles.input} >
                        <TextInput style={styles.TextInput}
                            placeholder="CPF*">
                        </TextInput>
                    </View>
                    <View style={styles.input} >
                        <TextInput style={styles.TextInput}
                            placeholder="Celular">
                        </TextInput>
                    </View>
                    <View style={styles.input} >
                        <TextInput style={styles.TextInput}
                            placeholder="E-mail*">
                        </TextInput>
                    </View>
                    <View style={styles.input} >
                        <TextInput style={styles.TextInput}
                            placeholder="Data de Nascimento">
                        </TextInput>
                    </View>
                    <View style={styles.input} >
                        <TextInput style={styles.TextInput}
                            placeholder="Sexo">
                        </TextInput>
                    </View>



                    <View style={styles.containerButtonLogin}>
                        <TouchableOpacity onPress={() => navigation.navigate('RegisterPfTwo')}>
                            <LinearGradient
                                // Background Linear Gradient
                                colors={['rgba(0,0,0,0.8)', 'transparent']}
                                style={styles.backgroundButton}
                            />
                            <LinearGradient
                                // Button Linear Gradient
                                colors={['#991212', '#C30459']}
                                style={styles.buttonLogin}>
                                <Text style={styles.textButtonLogin}>Continuar</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>



                </View>

            </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFF',
        height: '100%',
        borderWidth: 3,
        borderColor: "#FFFF",
    },

    containerGeneral: {
        marginTop: '3%',
        padding: 22,
    },

    containerTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 8,
        color: '#414040',
    },

    subTitle: {
        marginBottom: 5,
        color: '#717171',
    },

    containerCircle: {
        // Esse 15 abaixo é a metade do elemento
        left: (Dimensions.get('window').width / 2) - 15,

    },

    circleButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },

    textButtonCircle: {
        paddingLeft: 7,
        paddingTop: 5,
        fontWeight: '700',
        color: '#FFFF'
    },

    inputsTitle: {
        color: "#717171",
        paddingLeft: 25,
        paddingTop: 10,
        paddingBottom: 8,
    },

    input: {
        width: '86%',
        height: 41,
        backgroundColor: '#ffff',
        marginBottom: 20,
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#999999",
        left: (Dimensions.get('window').width / 2) - 172,

        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    containerButtonLogin: {
        paddingLeft: 55,
        marginTop: '2%',
        width: '85%',
    },

    TextInput: {
        width: '100%'
    },

    buttonLogin: {
        borderRadius: 10,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textButtonLogin: {
        color: '#ffff',
        fontSize: 14,
        fontWeight: '700',
    },





});



