import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions,
    KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

export default function Inicial({ navigation }) {
    const response = [
        {
            id: '1',
            coordinates: {
                latitude: -23.616801968301022,
                longitude: -46.72426002386567
            },
            title: 'Mapa da Doação',
            description: 'União de Moradores de Paraisópolis',
        },
        {
            id: '2',
            coordinates: {
                latitude: -23.61328080161387,
                longitude: -46.65635613126905,
            },
            title: 'Prefeitura de São Paulo',
            description: 'Programa Cidade Solidária',
            category: 1,
        },
        {
            id: '3',
            coordinates: {
                latitude: -23.486652484812343,
                longitude: -46.58151680058471,
            },
            title: 'Restaurante Mocotó',
            description: 'Programa Quebrada Alimentada',
            category: 1,
        },
        {
            id: '4',
            coordinates: {
                latitude: -23.617042303304874,
                longitude: -46.59074122756718,
            },
            title: 'UNAS',
            description: 'União de Núcleos, Associações dos Moradores de Heliópolis',
            category: 1,
        },
        {
            id: '5',
            coordinates: {
                latitude: -23.60450077454592,
                longitude: -46.59632827968677,
            },
            title: 'CUFA',
            description: 'Central Única das Favelas',
            category: 1,
        },
    ]
    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={styles.container}>

                <View style={styles.input} >
                    <View style={{ margin: 5, alignSelf: 'flex-start' }}>
                        <Image source={require('../../assets/searchIcon.png')} style={styles.searchIcon} />
                    </View>
                    <TextInput style={styles.TextInput}
                        placeholder="Pesquise uma ONG perto de você! 🥰 ">
                    </TextInput>
                </View>

                <View style={styles.dividingLine} />

                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -23.594672996909658,
                        longitude: -46.68702956931429,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,

                    }}
                >
                    {response.map(marker => (
                        <MapView.Marker
                            key={marker.id}
                            coordinate={marker.coordinates}
                            title={marker.title}
                            description={marker.description}
                        >
                        </MapView.Marker>
                    ))}
                </MapView >

                <View style={styles.dividingLineTwo} />

                <View style={styles.boxContainers} >
                    <View style={{ margin: 5, alignSelf: 'flex-start', padding: 0, paddingTop: 8 }}>
                        <Image source={require('../../assets/vector_06_pink.png')} style={styles.searchIconBoxOne} />
                        <Text style={styles.boxText}>Home</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Doacoes')}>
                        <View style={{ margin: 5, alignSelf: 'flex-start', paddingLeft: 18, paddingTop: 8 }}>
                            <Image source={require('../../assets/vector_02.png')} style={styles.searchIconBoxTwo} />
                            <Text style={styles.boxText}>Doações</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Doar')}>
                        <View style={{ margin: 5, alignSelf: 'flex-start', paddingLeft: 19, paddingTop: 8 }} >
                            <Image source={require('../../assets/vector_03.png')} style={styles.searchIconBoxThree} />
                            <Text style={styles.boxText}>Doar</Text>
                        </View>
                    </TouchableOpacity>

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
        marginLeft: 6,
    },


});


