/* eslint-disable global-require */
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const TopNavigationOptions = navigation => ({
  headerLeft: (
    <Avatar.Image style={styles.avatar} size={50} source={require('../../assets/karma-login.png')} />
  ),
  headerRight: (
    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
      <View style={{ marginRight: 30 }}>
        <Ionicons name="ios-log-out" size={25} />
      </View>
    </TouchableOpacity>
  ),
});

export default TopNavigationOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    marginLeft: 10,
  },
});
