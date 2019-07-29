import React, { useState, useEffect } from 'react';
import { Text, Image, View, StyleSheet, Button } from 'react-native';
import LottieView from 'lottie-react-native'
const logo = require('../assets/karma-logo.png');
const animationData = require('../assets/lottie-files/2056-gagaha.json');



const LevelUp = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text h1 style={styles.textUp}>YOU ROCK</Text>
        <View style={styles.lottie}>
          <LottieView
            source={animationData}
            autoPlay
            loop
          />
        </View>
        <Text h2 style={styles.textDown}>Your Karma improved to the next level!</Text>
        <View style={styles.button}>
          <Button
            onPress={() => props.navigation.navigate('Main')}
            title='CONTINUE YOUR PATH'
            color='#cc2e5d'
            accessibilityLabel='Click me to go back'
          />
        </View>
      </View>
    </View>

  );

};

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
    color: '#cc2e5d'
  },
  textDown: {
    margin: 20,
    fontSize: 15,
  },
  lottie: {
    width: 800,
    height: 200,
  },
  button: {
    marginTop: 80,
  }

});

export default LevelUp;

/*  <Image
         style={styles.image}
         source={logo}
       /> */