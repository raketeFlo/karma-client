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
  const [progressWithOnComplete, setProgressWithOnComplete] = useState(user.curr_exp);

  // set width of progress bar
  const barWidth = Dimensions.get('screen').width - 150;

  // progressbar increase
  const increaseExp = (value) => {
    const updatedValue = { curr_exp: value + user.curr_exp };
    const updatedUser = Object.assign(user, updatedValue);
    setUser(updatedUser);
    updateUser(updatedUser);
    setProgressWithOnComplete(prev => prev + value);
  };


  // level up
  const nextLevel = () => {
    const updatedValue = { curr_level: ++user.curr_level, curr_exp: 0 };
    const updatedUser = Object.assign(user, updatedValue);
    setUser(updatedUser);
    updateUser(updatedUser);
  }

  // load user
  useEffect(() => {
    fetch('http://192.168.1.148:3001/user')
      .then(response => response.json())
      .then((data) => {
        setUser(data[0]);
        setProgressWithOnComplete(data[0].curr_exp);
      })
      // eslint-disable-next-line no-console
      .catch(error => console.error(error));
  }, []);

  // load all actions
  // IP wlan home: 192.168.1.131
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


  // update user
  const updateUser = (data) => {
    fetch('http://192.168.1.148:3001/user', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
      // eslint-disable-next-line no-console
      .then(updatedUser => setUser(updatedUser))
      // eslint-disable-next-line no-console
      .catch(error => console.error(error));
  };

  // filter for actions
  const filterActions = (difficulty) => {
    const filteredActions = actions.filter(elements => elements.difficulty === difficulty);
    setFilter(filteredActions);
  };

  return (
    <>
      <View style={styles.progessBar}>
        <Text>
          Lvl
          {' '}
          {user.curr_level}
        </Text>
        <ProgressBarAnimated
          width={barWidth}
          value={progressWithOnComplete}
          maxValue={100}
          backgroundColor="#dc6286"
          onComplete={() => {
            props.navigation.navigate('LevelUp');
            setProgressWithOnComplete(0);
            nextLevel();
          }}
        />
        <Text>
          Lvl
          {' '}
          {user.curr_level + 1}
        </Text>
      </View>
      <FilterAction filter={filterActions} />
      <ActionList actions={filter} addExp={increaseExp} />
    </>
  );
};

const styles = StyleSheet.create({
  progessBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    padding: 15,
  },
});

export default Main;