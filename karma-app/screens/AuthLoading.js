/* eslint-disable react/prop-types */
import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';

const AuthLoading = (props) => {
  // eslint-disable-next-line no-unused-vars
  const bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    const userName = await AsyncStorage.getItem('userName');
    props.navigation.navigate(userToken ? 'Main' : 'AuthNavigator', { userName });
  };
  bootstrapAsync();

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default AuthLoading;
