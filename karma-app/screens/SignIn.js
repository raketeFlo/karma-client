import React, { useState } from 'react';
import {
  AsyncStorage, Button, Image, StyleSheet, View, KeyboardAvoidingView, TextInput,
} from 'react-native';
import uuid from 'uuid/v1';
import base64 from 'react-native-base64'
const logo = require('../assets/karma-login.png');
// localhost
const URL = 'http://192.168.1.148:3001'; //131 -> Home


const SignIn = ({ navigation }) => {
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
        if (data.fail === 'password') {
          alert('Wrong Password! Try again!')
          navigation.navigate('Sign-In');
        } else if (data.fail === 'username') {
          alert('Wrong Username! Try again!')
          navigation.navigate('Sign-In');
        } else {
          passUserIdToMain();
          signInAsync();
        }
      })
      // eslint-disable-next-line no-console
      .catch(error => console.error(error));
  };


  const token = uuid();
  const signInAsync = async () => {
    await AsyncStorage.setItem('userToken', token);
    navigation.navigate('Main');
  };

  const passUserIdToMain = () => {
    navigation.navigate('Main', {
      userName,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(userName);
    setPassword(password);
    userCheck();
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
            onPress={handleSubmit}
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
