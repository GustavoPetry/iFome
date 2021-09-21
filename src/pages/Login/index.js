import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';








export default function Home({ navigation }) {
  return (
    
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.container} >
          <StatusBar backgroundColor="#FFF" translucent={false} />

          <Image source={require('../../assets/logo_ifome.png')} style={styles.logo} />

          <View style={styles.input} >
            <View style={{ margin: 5, alignSelf: 'flex-start' }}>
              <Image source={require('../../assets/email_icon.png')} style={styles.emailIcon} />
            </View>
            <TextInput style={styles.TextInput}
              placeholder="E-mail">
            </TextInput>
          </View>

          <View style={styles.input} >
            <View style={{ margin: 5 }}>
              <Image source={require('../../assets/lock_icon.png')} style={styles.passwordIcon} />
            </View>
            <TextInput secureTextEntry={true} 
            style={styles.TextInput}
              placeholder="Senha">
            </TextInput>
          </View>


          <View style={styles.forgotContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Esqueci a senha</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.containerButtonLogin}>
                        <TouchableOpacity onPress={() => navigation.navigate('Inicial')}>
                            <LinearGradient
                                // Background Linear Gradient
                                colors={['rgba(0,0,0,0.8)', 'transparent']}
                                style={styles.backgroundButton}
                            />
                            <LinearGradient
                                // Button Linear Gradient
                                colors={['#991212', '#C30459']}
                                style={styles.buttonLogin}>
                                <Text style={styles.textButtonLogin}>Entrar</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

          <View style={styles.registerLogin}>
            <TouchableOpacity onPress={ () => navigation.navigate('Register')}>
              <Text style={styles.RegisterText}>Você não tem uma conta? <Text style={styles.RegisterTextBoldAlert}>Cadastre-se</Text></Text>
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
    marginBottom: '17%'
  },

  input: {
    width: '85%',
    height: 48,
    backgroundColor: '#ffff',
    marginBottom: 20,
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#999999",

    justifyContent: 'center',
    flexWrap: 'wrap',

  },

  TextInput: {
    width: '100%'
  },

  emailIcon: {
    width: 21,
    height: 21,

    resizeMode: 'stretch',
    padding: 10,
    alignSelf: 'flex-start',
  },
  
  passwordIcon: {
    width: 21,
    height: 21,

    resizeMode: 'stretch',
    padding: 10,
    alignSelf: 'flex-start',
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
    marginTop: '6%',
  },

  RegisterText: {
    color: "#999999",
  },

  RegisterTextBoldAlert: {
    color: '#C30459',
    textDecorationLine: 'underline'
  }

});


// Validação e-mail




