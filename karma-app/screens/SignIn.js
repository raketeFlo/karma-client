/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
/* eslint-disable jsx-quotes */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  AsyncStorage, Button, Image, StyleSheet, View,
} from 'react-native';
import uuid from 'uuid/v1';
import { TextInput } from 'react-native-paper';

const SignIn = (props) => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');

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
      <View style={styles.bottomContainer}>
        <TextInput
          label='User Name'
          value={text}
          onChangeText={() => setText(text)}
        />
        <TextInput
          label='Password'
          value={password}
          onChangeText={() => setPassword(password)}
        />
        <Button
          onPress={signInAsync}
          title='Sign In'
          color='#841584'
          accessibilityLabel='Click me to sign in'
        />
      </View>
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
    width: '90%',
    padding: 10,
    margin: 10,
  },
});
