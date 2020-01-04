import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';

const AuthLoading = (props) => {
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
