import React from 'react';
import {
  StyleSheet, FlatList,
} from 'react-native';
import Action from './Action';

const ActionList = ({ actions, addExp }) => {

  return (
    <FlatList
      style={styles.container}
      data={actions}
      keyExtractor={item => item._id}
      renderItem={({ item }) => <Action actions={item} addExp={addExp} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2efed',
  },
});

export default ActionList;