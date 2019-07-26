/* eslint-disable react/prop-types */
import React from 'react';
import { Button, AsyncStorage } from 'react-native';

const Main = (props) => {
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('SignIn');
  };

  return (
    <Button
      onPress={signOutAsync}
      title="Sign Out"
      color="#841584"
      accessibilityLabel="Learn more about this button"
    />
  );
};

export default Main;
