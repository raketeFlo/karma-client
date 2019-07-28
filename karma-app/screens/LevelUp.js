import React, { useEffect } from 'react';
import { Text, Image, View, StyleSheet, Button } from 'react-native';



const LevelUp = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text h1 style={styles.textUp}>WELL DONE</Text>
        <Image
          style={styles.image}
          source={require('../assets/karma-logo.png')}
        />
        <Text h2 style={styles.textDown}>Your Karma improved to the next level!</Text>
        <Button
          style={styles.button}
          onPress={() => props.navigation.navigate('Main')}
          title='Continue Your Path'
          color='#cc2e5d'
          accessibilityLabel='Click me to go back'
        />
      </View>
    </View>

  );
};


export default LevelUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2efed',
  },
  image: {
    width: 200,
    height: 200,
  },
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textUp: {
    margin: 20,
    fontSize: 40,
    fontWeight: '600',
  },
  textDown: {
    margin: 20,
    fontSize: 15,
  },

});
