import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
    KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, Dimensions
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';


import Home from '../Login/index';



export default function RegisterPfTwo({ navigation }) {
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
                            <Text style={styles.textButtonCircle}> 2 </Text>
                        </LinearGradient>
                    </View>
                    <Text style={styles.inputsTitle}>Dados de endereço</Text>


                    <View style={styles.containerInputs}>
                        <View style={styles.inputCep} >
                            <TextInput style={styles.TextInput}
                                placeholder="CEP*">
                            </TextInput>
                        </View>
                        <View style={styles.inputLogradouro} >
                            <TextInput style={styles.TextInput}
                                placeholder="Logradouro*">
                            </TextInput>
                        </View>
                    </View>

                    <View style={styles.containerInputs}>
                        <View style={styles.inputNumber} >
                            <TextInput style={styles.TextInput}
                                placeholder="Nº">
                            </TextInput>
                        </View>
                        <View style={styles.inputComplement} >
                            <TextInput style={styles.TextInput}
                                placeholder="Complemento">
                            </TextInput>
                        </View>
                        <View style={styles.inputNeighborhood} >
                            <TextInput style={styles.TextInput}
                                placeholder="Bairro*">
                            </TextInput>
                        </View>
                    </View>


                    <View style={styles.containerInputs}>
                        <View style={styles.inputCity} >
                            <TextInput style={styles.TextInput}
                                placeholder="Cidade*">
                            </TextInput>
                        </View>
                        <View style={styles.inputState} >
                            <TextInput style={styles.TextInput}
                                placeholder="Estado*">
                            </TextInput>
                        </View>
                    </View>


                    <View style={styles.containerInputs}>
                        <View style={styles.inputReference} >
                            <TextInput style={styles.TextInput}
                                placeholder="CEP*">
                            </TextInput>
                        </View>
                    </View>

                    <View style={styles.dividingLine} />

                    <View style={styles.containerGeneral}>
                        <Text style={styles.containerTitleTwo}>Cadastro de senha</Text>
                    </View>

                    <View style={styles.containerInputs}>
                        <View style={styles.inputKeyOne} >
                            <TextInput secureTextEntry={true}
                            style={styles.TextInput}
                                placeholder="Senha*">
                            </TextInput>
                        </View>
                        <View style={styles.inputKey} >
                            <TextInput secureTextEntry={true}
                                style={styles.TextInput}
                                placeholder="Confirmar senha*">
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.containerButtonLogin}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
        marginTop: '3%',
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

    containerInputs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },


    inputCep: {
        width: '35%',
        height: 41,
        backgroundColor: '#ffff',
        marginBottom: 20,
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#999999",
        left: (Dimensions.get('window').width / 2) - 172,


    },

    inputLogradouro: {
        width: '46%',
        height: 41,
        backgroundColor: '#ffff',
        marginBottom: 20,
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#999999",
        left: (Dimensions.get('window').width / 2) - 172,
        marginRight: 55,
    },

    inputNumber: {
        width: '15%',
        height: 41,
        backgroundColor: '#ffff',
        marginBottom: 20,
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#999999",
        left: (Dimensions.get('window').width / 2) - 172,
        marginRight: 55,
    },

    inputComplement: {
        width: '30%',
        height: 41,
        backgroundColor: '#ffff',
        marginBottom: 20,
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#999999",
        left: (Dimensions.get('window').width / 2) - 172,
        marginLeft: -55,
    },

    inputNeighborhood: {
        width: '30%',
        height: 41,
        backgroundColor: '#ffff',
        marginBottom: 20,
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#999999",
        left: (Dimensions.get('window').width / 2) - 172,
        marginRight: 55,
    },

    inputCity: {
        width: '35%',
        height: 41,
        backgroundColor: '#ffff',
        marginBottom: 20,
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#999999",
        left: (Dimensions.get('window').width / 2) - 172,
    },

    inputState: {
        width: '45.5%',
        height: 41,
        backgroundColor: '#ffff',
        marginBottom: 20,
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#999999",
        left: (Dimensions.get('window').width / 2) - 172,
        marginRight: 57,
    },

    inputReference: {
        width: '85%',
        height: 41,
        backgroundColor: '#ffff',
        marginBottom: 20,
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#999999",
        left: (Dimensions.get('window').width / 2) - 172,
        marginRight: 56,
    },


    dividingLine: {
        borderBottomColor: '#989898',
        borderBottomWidth: 0.8,
        width: '84%',
        left: (Dimensions.get('window').width / 2) - 171,
        paddingBottom: 2,
        paddingTop: 10,
    },

    containerTitleTwo: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 8,
        marginTop: -18,
        color: '#414040',
    },

    
    inputKeyOne: {
        width: '39%',
        height: 41,
        backgroundColor: '#ffff',
        marginBottom: 20,
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#999999",
        left: (Dimensions.get('window').width / 2) - 170,
    },

    inputKey: {
        width: '39%',
        height: 41,
        backgroundColor: '#ffff',
        marginBottom: 20,
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#999999",
        left: (Dimensions.get('window').width / 2) - 235,
    },









});



