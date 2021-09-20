import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';







export default function Register({ navigation }) {
  return (

    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.container}>
          <StatusBar backgroundColor="#FFF" translucent={false} />

          <Image source={require('../../assets/logo_ifome.png')} style={styles.logo} />

          <View style={styles.registerLogin}>
            <TouchableOpacity>
              <Text style={styles.RegisterText}>Você quer se cadastrar como:</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerButtonLogin}>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterPfOne')}>
              <LinearGradient
                // Background Linear Gradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={styles.backgroundButton}
              />
              <LinearGradient
                // Button Linear Gradient
                colors={['#991212', '#C30459']}
                style={styles.buttonLogin}>
                <Text style={styles.textButtonLogin}>Pessoa Física</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.containerButtonLogin}>
            <LinearGradient
              // Background Linear Gradient
              colors={['rgba(0,0,0,0.8)', 'transparent']}
              style={styles.backgroundButton}
            />
            <LinearGradient
              // Button Linear Gradient
              colors={['#991212', '#C30459']}
              style={styles.buttonLogin}>
              <Text style={styles.textButtonLogin}>Pessoa Jurídica</Text>
            </LinearGradient>
          </View>


          <View style={styles.containerButtonLogin}>
            <LinearGradient
              // Background Linear Gradient
              colors={['rgba(0,0,0,0.8)', 'transparent']}
              style={styles.backgroundButton}
            />
            <LinearGradient
              // Button Linear Gradient
              colors={['#991212', '#C30459']}
              style={styles.buttonLogin}>
              <Text style={styles.textButtonLogin}>ONG</Text>
            </LinearGradient>
          </View>

          <View style={styles.boxContainer}>
            <View style={styles.box}>
              <Image source={require('../../assets/logo_apple.png')} style={styles.logosMarcas} />
            </View>


            <View style={styles.box}>
              <Image source={require('../../assets/logo_facebook.png')} style={styles.logosFace} />
            </View>


            <View style={styles.box}>
              <Image source={require('../../assets/logo_google.png')} style={styles.logosMarcas} />
            </View>
          </View>

          <View style={styles.registerLogin}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.RegisterText}>Você já tem uma conta? <Text style={styles.RegisterTextBoldAlert}>Faça Login</Text></Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },

  logo: {
    width: 200,
    height: 102,
    resizeMode: 'stretch',

    marginTop: '0%',
    marginBottom: '3%'
  },

  boxContainer: {
    flexDirection: 'row',
    paddingTop: 20,
  },

  box: {
    flex: 0,
    height: 55,
    width: 55,
    backgroundColor: '#FFF',
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 4,

  },

  logosMarcas: {
    marginLeft: 17,
    marginTop: 15
  },

  logosFace: {
    marginLeft: 20,
    marginTop: 15
  },

  TextInput: {
    width: '100%'
  },

  forgotContainer: {
    width: '90%',
    alignItems: 'center',

    marginBottom: 14,
    marginTop: 14,
  },

  forgotText: {
    color: '#999999',
    fontSize: 14,
    fontWeight: '700',
  },

  containerButtonLogin: {
    marginTop: '5%',
    width: '85%',
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

  registerLogin: {
    marginTop: '4%',
    marginBottom: '6%',
  },

  RegisterText: {
    color: "#999999",
  },

  RegisterTextBoldAlert: {
    color: '#C30459',
    textDecorationLine: 'underline'
  }

});



