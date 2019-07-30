/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
/* eslint-disable jsx-quotes */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  AsyncStorage, Button, Image, StyleSheet, View, KeyboardAvoidingView, TextInput,
} from 'react-native';
import uuid from 'uuid/v1';
import base64 from 'react-native-base64'
const logo = require('../assets/karma-login.png');
// localhost
const URL = 'http://192.168.1.148:3001'; //131 -> Home


const SignIn = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // check username + password
  const userCheck = () => {
    const encodedData = base64.encode(`${userName}:${password}`);
    fetch(`${URL}/sign-in`, {
      headers: {
        'Authorization': `Basic ${encodedData}`,
        'Content-Type': 'aaplication/json',
      }
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          alert('wrong password or username');
        } else {
          handleSubmit();
        }
      })
      // eslint-disable-next-line no-console
      .catch(error => console.error(error));
  };


  const token = uuid();
  const signInAsync = async () => {
    await AsyncStorage.setItem('userToken', token);
    props.navigation.navigate('Main');
  };

  const passUserId = () => {
    props.navigation.navigate('Main', {
      userName,
      password,
      token,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(userName);
    setPassword(password);
    signInAsync();
    passUserId();
  }

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
          onChangeText={text => setUserName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Password'
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry={true}
        />
        <View style={styles.button}>
          <Button
            onPress={userCheck}
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
