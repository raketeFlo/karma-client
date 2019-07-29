/* eslint-disable global-require */
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
const avatar = require('../../assets/avatar.png');
import { Avatar } from 'react-native-paper';
import {
  AsyncStorage, StyleSheet, View, TouchableOpacity,
}
  from 'react-native';


const TopNavigationOptions = navigation => ({
  headerLeft: (
    <Avatar.Image style={styles.avatar} size={50} source={avatar} />
  ),
  headerRight: (
    <TouchableOpacity onPress={async () => { await AsyncStorage.clear(); navigation.navigate('SignIn'); }}>
      <View style={{ marginRight: 30 }}>
        <Ionicons name="ios-log-out" size={30} />
      </View>
    </TouchableOpacity>
  ),
  headerStyle: { height: 70 },
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
