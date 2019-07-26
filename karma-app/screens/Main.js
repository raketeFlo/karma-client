/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  AsyncStorage, StyleSheet, FlatList, Text, View,
} from 'react-native';

const Main = (props) => {
  const [actions, setActions] = useState([]);

  const signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('SignIn');
  };

  useEffect(() => {
    fetch('http://192.168.1.148:3001/actions')
      .then(response => response.json())
      .then(actions => setActions(actions))
      .catch(error => console.error(error));
  }, []);


  return (
    <FlatList
      style={styles.container}
      data={actions}
      keyExtractor={item => item._id}
      renderItem={({ item }) => <View><Text>{item.description}</Text></View>}
    />
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2efed',
  },
});
