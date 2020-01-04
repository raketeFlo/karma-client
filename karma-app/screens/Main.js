import React, { useState, useEffect } from 'react';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import {
  Dimensions, View, StyleSheet, Text,
} from 'react-native';
import ActionList from '../components/ActionList';
import FilterAction from '../components/FilterAction';
import Splash from './Splash';
import { loadUser, loadActions, updateUser } from '../services/ApiClient';


const Main = ({ navigation }) => {
  const [actions, setActions] = useState([]);
  const [user, setUser] = useState([]);
  const [filter, setFilter] = useState([]);
  const [progressWithOnComplete, setProgressWithOnComplete] = useState(user.curr_exp);
  const [loading, setLoading] = useState(true);

  const userName = navigation.getParam('userName', 'No-USER');
  const barWidth = Dimensions.get('screen').width - 150;

  const increaseExp = async (value) => {
    // lower gained exp points per increased level
    const reducedValue = Math.floor(value / user.curr_level);
    const updatedValue = { curr_exp: reducedValue + user.curr_exp };
    if (updatedValue.curr_exp <= 100) {
      const updatedUser = Object.assign(user, updatedValue);
      setProgressWithOnComplete(prev => prev + reducedValue);
      setUser(updatedUser);
      await updateUser(updatedUser);
    } else {
      nextLevel(0);
      setProgressWithOnComplete(0);
      navigation.navigate('LevelUp');
    }
  };

  const nextLevel = (exp) => {
    const updatedValue = { curr_level: ++user.curr_level, curr_exp: exp };
    const updatedUser = Object.assign(user, updatedValue);
    setUser(updatedUser);
    updateUser(updatedUser);
  }

  const loadAppData = async (name)  => {
    const user = await loadUser(name);
    const actions = await loadActions();
    if (user.length && actions.length) {
      setUser(user[0]);
      setProgressWithOnComplete(user[0].curr_exp);
      setActions(actions);
      setFilter(actions);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }

  useEffect(() => {
    loadAppData(userName);
  }, []);


  const filterActions = (difficulty) => {
    const filteredActions = actions.filter(elements => elements.difficulty === difficulty);
    setFilter(filteredActions);
  };

  const createProgressbar = () => {
    return (
      <>
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
            navigation.navigate('LevelUp');
            setProgressWithOnComplete(0);
            nextLevel(0);
          }}
        />
        <Text>
          Lvl
          {' '}
          {user.curr_level + 1}
        </Text>
      </>
    )
  }

  if (loading) {
    return <Splash />
  } else {
    return (
      <>
        <View style={styles.progessBar}>{createProgressbar()}</View>
        <FilterAction filter={filterActions} />
        <ActionList actions={filter} addExp={increaseExp} />
      </>
    );
  }
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