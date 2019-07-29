import React from 'react';
import {
  TouchableOpacity, StyleSheet, Image, View, Text,
} from 'react-native';
const people = require('../assets/Icons/b2b.png');
const volunteer = require('../assets/Icons/charity.png');
const transport = require('../assets/Icons/bus.png');
const environment = require('../assets/Icons/planet-earth.png');
const relationship = require('../assets/Icons/friends.png');


const Action = ({ actions, addExp }) => {
  // conditional rendering of icons
  const icons = (category) => {
    if (category === 'People') {
      return people;
    } else if (category === 'Relationship') {
      return relationship;
    } else if (category === 'Transports') {
      return transport;
    } else if (category === 'Volunteering') {
      return volunteer;
    } else if (category === 'Environment') {
      return environment;
    }
  };

  return (
    <TouchableOpacity onPress={() => addExp(actions.exp_points)}>
      <View style={styles.container}>
        <View
          style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image source={icons(actions.category)} style={styles.symbols} />
            <Text style={styles.points}>+{actions.exp_points} EXP</Text>
          </View>
          <View style={styles.textContainer}><Text style={styles.text}>{actions.description}</Text></View>
          <View style={styles.pointsContainer}></View>
        </View>
      </View>
    </TouchableOpacity >
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  cardContainer: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  symbols: {
    padding: 20,
    height: 20,
    width: 30,
  },
  imageContainer: {
    height: '100%',
    width: '20%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textContainer: {
    fontSize: 12,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  points: {
    fontSize: 14,
    fontWeight: '500',
  }
});

export default Action;
