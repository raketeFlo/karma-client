import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';


const Action = ({ actions }) => {
  return (
    <Card>
      <Card.Content>
        <Paragraph>{actions.description}</Paragraph>
        <Paragraph>{actions.difficulty}</Paragraph>
        <Paragraph>{actions.exp_points}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default Action;
