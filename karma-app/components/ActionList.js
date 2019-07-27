import React from 'react';
import {
  StyleSheet, FlatList, Text, View,
} from 'react-native';
import Action from './Action';

const ActionList = ({ actions }) => {
  return (
    <FlatList
      style={styles.container}
      data={actions}
      keyExtractor={item => item._id}
      renderItem={({ item }) => <View><Text>{item.description}</Text></View>}
    />
  );
};

export default ActionList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2efed',
  },
});