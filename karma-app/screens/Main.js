import React, { useState, useEffect } from 'react';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import {
  Dimensions, View, StyleSheet, Text,
} from 'react-native';
import ActionList from '../components/ActionList';
import FilterAction from '../components/FilterAction';

const Main = (props) => {
  // states
  const [actions, setActions] = useState([]);
  const [user, setUser] = useState([]);
  const [filter, setFilter] = useState([]);
  const [progressWithOnComplete, setProgressWithOnComplete] = useState(0);


  // progressbar increase
  const increase = (value) => {
    setProgressWithOnComplete(prev => prev + value);
  };
  const barWidth = Dimensions.get('screen').width - 150;

  // load all actions
  useEffect(() => {
    fetch('http://192.168.1.148:3001/actions')
      .then(response => response.json())
      .then((data) => {
        setActions(data);
        setFilter(data);
      })
      // eslint-disable-next-line no-console
      .catch(error => console.error(error));
  }, []);

  // load user
  useEffect(() => {
    fetch('http://192.168.1.148:3001/user')
      .then(response => response.json())
      .then((data) => {
        setUser(data);
      })
      // eslint-disable-next-line no-console
      .catch(error => console.error(error));
  }, []);

  // filter for actions
  const filterActions = (difficulty) => {
    const filteredActions = actions.filter(elements => elements.difficulty === difficulty);
    setFilter(filteredActions);
  };

  console.log(user);
  return (
    <>
      <View style={styles.progessBar}>
        <Text>Lvl</Text>
        <ProgressBarAnimated
          width={barWidth}
          value={progressWithOnComplete}
          maxValue={100}
          backgroundColor="#dc6286"
          onComplete={() => {
            props.navigation.navigate('LevelUp');
            setProgressWithOnComplete(0);
          }}
        />
        <Text>Lvl</Text>
      </View>
      <FilterAction filter={filterActions} />
      <ActionList actions={filter} levelUp={increase} />
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  progessBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    padding: 15,
  },
});
