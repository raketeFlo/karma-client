/* eslint-disable react/prop-types */
import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';

const AuthLoading = (props) => {
  // Fetch the token from storage then navigate to our appropriate place
  // eslint-disable-next-line no-unused-vars
  const bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    props.navigation.navigate(userToken ? 'Main' : 'SignIn');
  };
  bootstrapAsync();

  // Render any loading content that you like here
  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default AuthLoading;
