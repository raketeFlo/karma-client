/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
/* eslint-disable jsx-quotes */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  AsyncStorage, Button, Image, StyleSheet, View, KeyboardAvoidingView, TextInput,
} from 'react-native';
import uuid from 'uuid/v1';


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
          source={require('../assets/karma-login.png')}
        />
      </View>
      <KeyboardAvoidingView
        behavior='padding'
        enabled
        style={styles.bottomContainer}
      >
        <View>
          <TextInput
            placeholder='Username'
            value={userName}
            returnKeyType='next'
            onChangeText={() => setUserName(userName)}
            style={styles.input}
          />
          <TextInput
            placeholder='Password'
            value={password}
            onChangeText={() => setPassword(password)}
            style={styles.input}
          />
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

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
});
