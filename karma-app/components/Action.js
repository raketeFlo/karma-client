import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import { Card, Paragraph } from 'react-native-paper';


const Action = ({ actions, levelUp }) => {

  return (
    <TouchableOpacity onPress={() => levelUp(actions.exp_points)}>
      <Card>
        <Card.Content>
          <Paragraph>{actions.description}</Paragraph>
          <Paragraph>{actions.difficulty}</Paragraph>
          <Paragraph>{actions.exp_points}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default Action;
