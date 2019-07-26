/* eslint-disable react/prop-types */
import React from 'react';
import { AsyncStorage, Button } from 'react-native';
import uuid from 'uuid/v1';


const SignIn = (props) => {
  const token = uuid();
  const signInAsync = async () => {
    await AsyncStorage.setItem('userToken', token);
    props.navigation.navigate('Main');
  };

  return (
    <Button
      onPress={signInAsync}
      title="Sign In"
      color="#841584"
      accessibilityLabel="Learn more about this button"
    />
  );
};

export default SignIn;
