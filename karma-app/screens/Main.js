import React, { useState, useEffect } from 'react';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import {
  Dimensions, View, Text,
} from 'react-native';
import ActionList from '../components/ActionList';
import FilterAction from '../components/FilterAction';

const Main = () => {
  // states
  const [actions, setActions] = useState([]);
  const [filter, setFilter] = useState([]);
  const [progressWithOnComplete, setProgressWithOnComplete] = useState(0);


  // progressbar increase
  const increase = (value) => {
    setProgressWithOnComplete(prev => prev + value);
  };


  const barWidth = Dimensions.get('screen').width - 30;

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

  // filter for actions
  const filterActions = (difficulty) => {
    const filteredActions = actions.filter(elements => elements.difficulty === difficulty);
    setFilter(filteredActions);
  };

  return (
    <>
      <View>
        <ProgressBarAnimated
          width={barWidth}
          value={progressWithOnComplete}
          maxValue={100}
          backgroundColor="#dc6286"
          onComplete={() => {
            setProgressWithOnComplete(0);
          }}
        />
      </View>
      <FilterAction filter={filterActions} />
      <ActionList actions={filter} levelUp={increase} />
    </>
  );
};

export default Main;
