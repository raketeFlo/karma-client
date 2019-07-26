/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-native';

const SignIn = (props) => {
  const goToHome = () => {
    props.navigation.navigate('Main');
  };

  return (
    <Button
      onPress={goToHome}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  );
};

export default SignIn;
