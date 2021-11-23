import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    useState
} from "react";

import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions,
    KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, Picker,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import { LinearGradient } from 'expo-linear-gradient';





export default function SucessoEntrega({ navigation }) {


    const [selectedValue, setSelectedValue] = useState("java");


    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={styles.container}>

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Inicial')}>
                        <Image source={require('../../assets/vector_09.png')} />
                    </TouchableOpacity>
                </View>












                <View style={styles.dividingLineTwo} />

                <View style={styles.boxContainers} >
                    <TouchableOpacity onPress={() => navigation.navigate('Inicial')}>
                        <View style={{ margin: 5, alignSelf: 'flex-start', padding: 0, paddingTop: 8 }}>
                            <Image source={require('../../assets/vector_06.png')} style={styles.searchIconBoxOne} />
                            <Text style={styles.boxText}>Home</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ margin: 5, alignSelf: 'flex-start', paddingLeft: 18, paddingTop: 8 }}>
                        <Image source={require('../../assets/vector_02_pink.png')} style={styles.searchIconBoxTwo} />
                        <Text style={styles.boxText}>Doações</Text>
                    </View>
                    <View style={{ margin: 5, alignSelf: 'flex-start', paddingLeft: 19, paddingTop: 8 }}>
                        <Image source={require('../../assets/vector_03.png')} style={styles.searchIconBoxThree} />
                        <Text style={styles.boxText}>Doar</Text>
                    </View>
                    <View style={{ margin: 5, alignSelf: 'flex-start', paddingLeft: 18, paddingTop: 8 }}>
                        <Image source={require('../../assets/vector_05.png')} style={styles.searchIconBoxFive} />
                        <Text style={styles.boxText}>Perfil</Text>
                    </View>
                </View>





            </View>

        </TouchableWithoutFeedback >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '85%',
        height: 42,
        backgroundColor: '#E4E4E4',
        marginBottom: 10,
        padding: 8,
        borderRadius: 10,
        marginTop: 25,
        borderColor: "#999999",
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    TextInput: {
        width: '100%'
    },

    searchIcon: {
        width: 10,
        height: 10,

        resizeMode: 'stretch',
        padding: 10,
        alignSelf: 'flex-start',
    },


    // ----------------------------------------------------------------------------


    containerMiddle: {
        paddingTop: 22,
        width: '85%',
    },

    subTitle: {
        marginBottom: 5,
        color: '#717171',
        width: '85%'
    },

    containerTitleInputs: {
        paddingTop: 35,
        width: '97%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3,
    },

    inputsTitle: {
        color: "#414040",
        paddingBottom: 0,
    },

    inputsTitlePicker: {
        color: "#414040",
        paddingBottom: 10,
        paddingRight: "54%",
    },


    // ----------------------------------------------------------------------------


    dividingLine: {
        borderBottomColor: '#BABABA',
        borderBottomWidth: 1.9,
        width: '100%',
        paddingTop: 10,
    },


    TextInputAlimento1: {
        width: 120,
        height: 34,
        backgroundColor: '#ffff',
        marginBottom: 8,
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#999999",
        left: (Dimensions.get('window').width / 2) - 172,
        marginRight: 55,
    },

    TextInputQuantidade: {
        width: 80,
        height: 34,
        backgroundColor: '#ffff',
        marginBottom: 8,
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#999999",
        left: (Dimensions.get('window').width / 2) - 212,
        marginRight: 30,
    },

    inputGeneral: {
        paddingTop: 8,
        width: '98%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3,
    },

    pickerComponent: {
        width: 350
    },

    containerTeste: {
        flex: 1,
        paddingTop: 30,
        alignItems: "center",
    },

    TextInputPicker: {
        color: "#414040",
        paddingBottom: 0,
    },

    containerTestePicker: {
        height: 20,
        width: 120,
        marginRight: 219,

    },

    //---------------------------  BOTÃO   ---------------------------------------
    containerButtonLogin: {
        width: '85%',
        marginBottom: 60
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





    // ----------------------------------------------------------------------------



    dividingLineTwo: {
        borderBottomColor: '#BABABA',
        borderBottomWidth: 1.9,
        width: '100%',
    },

    boxContainers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3
    },

    boxText: {
        fontSize: 12,
        marginLeft: '4.5%',
        paddingTop: 1,
        color: '#717171',
        fontWeight: '600'
    },

    searchIconBoxOne: {
        marginLeft: 9,
        width: 23,
        height: 23
    },

    searchIconBoxTwo: {
        marginLeft: 13,
    },

    searchIconBoxThree: {
        marginLeft: 2,
    },

    searchIconBoxFour: {
        marginLeft: 23,
    },

    searchIconBoxFive: {
        marginLeft: 5,
    },


});


