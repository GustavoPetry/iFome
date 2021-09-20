import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions,
    KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform
} from 'react-native';

import MapView from 'react-native-maps';

export default function App() {
    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={styles.container}>

                <View style={styles.input} >
                    <View style={{ margin: 5, alignSelf: 'flex-start' }}>
                        <Image source={require('../../assets/searchIcon.png')} style={styles.searchIcon} />
                    </View>
                    <TextInput style={styles.TextInput}
                        placeholder="Buscar alimentos">
                    </TextInput>
                </View>

                <View style={styles.dividingLine} />

                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -23.5438,
                        longitude: -46.6419,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />

                <View style={styles.dividingLineTwo} />

                <View style={styles.boxContainers} >
                    <View style={{ margin: 5, alignSelf: 'flex-start', padding: 0, paddingTop: 8 }}>
                        <Image source={require('../../assets/searchIcon.png')} style={styles.searchIconBoxOne} />
                        <Text style={styles.boxText}>Pesquisar</Text>
                    </View>
                    <View style={{ margin: 5, alignSelf: 'flex-start', paddingLeft: 18, paddingTop: 8  }}>
                        <Image source={require('../../assets/vector_02.png')} style={styles.searchIconBoxTwo} />
                        <Text style={styles.boxText}>Doações</Text>
                    </View>
                    <View style={{ margin: 5, alignSelf: 'flex-start',  paddingLeft: 19, paddingTop: 8  }}>
                        <Image source={require('../../assets/vector_03.png')} style={styles.searchIconBoxThree} />
                        <Text style={styles.boxText}>Doar</Text>
                    </View>
                    <View style={{ margin: 5, alignSelf: 'flex-start',  paddingLeft: 19, paddingTop: 8  }}>
                        <Image source={require('../../assets/vector_04.png')} style={styles.searchIconBoxFour} />
                        <Text style={styles.boxText}>Mensagens</Text>
                    </View>
                    <View style={{ margin: 5, alignSelf: 'flex-start',  paddingLeft: 18, paddingTop: 8  }}>
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
    map: {
        width: '100%',
        height: '76%',
        marginBottom: 0,
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

    dividingLine: {
        borderBottomColor: '#BABABA',
        borderBottomWidth: 1.9,
        width: '100%',
        paddingBottom: 2,
        paddingTop: 10,
    },

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
        paddingTop: 1,
        color: '#717171',
        fontWeight: '600'
    },

    searchIconBoxOne: {
        marginLeft: 16,
        width: 23,
        height: 23    },

    searchIconBoxTwo: {
        marginLeft: 13,
    },

    searchIconBoxThree: {
        marginLeft: 0,
    },

    searchIconBoxFour: {
        marginLeft: 23,
    },

    searchIconBoxFive: {
        marginLeft: 3,
    },


});


