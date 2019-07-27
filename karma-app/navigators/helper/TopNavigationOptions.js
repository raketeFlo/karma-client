import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const TopNavigationOptions = navigation => ({
  title: 'Karma',
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
  menuButton: {
    marginLeft: 40,
    marginRight: 40,
  },
});
