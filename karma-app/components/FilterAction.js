/* eslint-disable jsx-quotes */
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';


const FilterAction = ({ filter }) => {

  return (
    <View style={styles.container}>
      <Button
        onPress={() => filter('Easy')}
        title='Easy'
        color='#2ecc71'
        style={styles.button}
        accessibilityLabel='Click me to filter for easy actions'
      />
      <Button
        onPress={() => filter('Medium')}
        title='Medium'
        color='#e67e22'
        style={styles.button}
        accessibilityLabel='Click me to filter for medium actions'
      />
      <Button
        onPress={() => filter('Hard')}
        title='Hard'
        color='#e74c3c'
        style={styles.button}
        accessibilityLabel='Click me to filter for hard actions'
      />
    </View>
  );
};

export default FilterAction;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
