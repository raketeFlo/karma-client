import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, Dimensions, Button,
} from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import ActionList from '../components/ActionList';
import FilterAction from '../components/FilterAction';

const Main = () => {
  const [actions, setActions] = useState([]);
  const [filter, setFilter] = useState([]);
  const [progressWithOnComplete, setProgressWithOnComplete] = useState(0);

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

  // progressbar increase
  const increase = (value) => {
    const newValue = progressWithOnComplete + value;
    setProgressWithOnComplete(newValue);
  };
  const barWidth = Dimensions.get('screen').width - 30;


  return (
    <>
      <View style={styles.container}>
        <ProgressBarAnimated
          width={barWidth}
          value={progressWithOnComplete}
          maxValue={100}
          backgroundColor="#dc6286"
          onComplete={() => {
            setProgressWithOnComplete(0);
          }}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonInner}>
            <Button
              title="Increase 20%"
              onPress={() => increase(50)}
            />
          </View>
        </View>
      </View>
      <FilterAction filter={filterActions} />
      <ActionList actions={filter} />
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 15,
  },
  buttonContainer: {
    marginTop: 15,
  },
});
