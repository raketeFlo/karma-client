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

  // get userID after login
  const userName = navigation.getParam('userName', 'No-USER');

  // set width of progress bar
  const barWidth = Dimensions.get('screen').width - 150;

  // progressbar increase
  const increaseExp = async (value) => {
    // lower gained exp points per increased level
    const reducedValue = Math.floor(value / user.curr_level);
    const updatedValue = { curr_exp: reducedValue + user.curr_exp };
    if (updatedValue.curr_exp <= 100) {
      const updatedUser = Object.assign(user, updatedValue);
      // add experience to progressbar
      setProgressWithOnComplete(prev => prev + reducedValue);
      // update current experience of user
      setUser(updatedUser);
      // update current experience of user in database
      await updateUser(updatedUser);
    } else {
      //set user experience to 0
      nextLevel(0);
      // set progessbar to 0
      setProgressWithOnComplete(0);
      navigation.navigate('LevelUp');
    }
  };

  // level up
  const nextLevel = (exp) => {
    const updatedValue = { curr_level: ++user.curr_level, curr_exp: exp };
    const updatedUser = Object.assign(user, updatedValue);
    setUser(updatedUser);
    // update new level and set experience of user to 0 (DB)
    updateUser(updatedUser);
  }

  async function loadAppData(userName) {
    const user = await loadUser(userName);
    const actions = await loadActions();
    setUser(user[0]);
    setProgressWithOnComplete(user[0].curr_exp);
    setActions(actions);
    setFilter(actions);
    // load main.js after 1500ms
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    loadAppData(userName);
  }, [userName]);


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
            // set user experience to 0
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