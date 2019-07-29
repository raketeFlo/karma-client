import React from 'react';
import {
  TouchableOpacity, StyleSheet, Image
} from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
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
      <Card style={styles.container}>
        <Card.Content style={styles.cardContainer}>
          <Paragraph><Image source={icons(actions.category)} style={styles.symbols} /></Paragraph>
          <Paragraph>{actions.description}</Paragraph>
          <Paragraph>{actions.exp_points}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 120,
  },
  cardContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  symbols: {
    padding: 20,
    height: 20,
    width: 30,
  }
});

export default Action;
