/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
/* eslint-disable jsx-quotes */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  AsyncStorage, Button, Image, StyleSheet, View, KeyboardAvoidingView, TextInput,
} from 'react-native';
import uuid from 'uuid/v1';
const logo = require('../assets/karma-login.png');


const SignIn = (props) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const token = uuid();
  const signInAsync = async () => {
    await AsyncStorage.setItem('userToken', token);
    props.navigation.navigate('Main');
  };


  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.image}
          source={logo}
        />
      </View>
      <KeyboardAvoidingView
        behavior='padding'
        enabled
        style={styles.bottomContainer}
      >
        <TextInput
          placeholder='Username'
          value={userName}
          returnKeyType='next'
          onChangeText={input => setUserName(input)}
          style={styles.input}
        />
        <TextInput
          placeholder='Password'
          value={password}
          onChangeText={input => setPassword(input)}
          style={styles.input}
          secureTextEntry={true}
        />
        <View style={styles.button}>
          <Button
            onPress={signInAsync}
            title='Sign In'
            color='#cc2e5d'
            accessibilityLabel='Click me to sign in'
          />
        </View>
      </KeyboardAvoidingView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#f2efed',
  },
  image: {
    width: '50%',
    height: '50%',
  },
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    width: '100%',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    color: 'black',
  },
  button: {
    padding: 10,
  },
});

export default SignIn;
