import React from 'react';
import {
  TouchableOpacity, StyleSheet
} from 'react-native';
import { Card, Paragraph } from 'react-native-paper';


const Action = ({ actions, addExp }) => {

  return (
    <TouchableOpacity onPress={() => addExp(actions.exp_points)}>
      <Card style={styles.container}>
        <Card.Content style={styles.cardContainer}>
          <Paragraph>{actions.category}</Paragraph>
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
});

export default Action;
