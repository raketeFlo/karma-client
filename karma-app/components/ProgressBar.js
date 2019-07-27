import React, { useState } from 'react';
import {
  View, StyleSheet, Dimensions, Alert, Button,
} from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

const ProgessBar = () => {
  const [progressWithOnComplete, setProgressWithOnComplete] = useState(0);

  // progressbar increase
  const increase = (value) => {
    const newValue = progressWithOnComplete + value;
    setProgressWithOnComplete(newValue);
  };
  const barWidth = Dimensions.get('screen').width - 30;


  return (
    <View style={styles.container}>
      <ProgressBarAnimated
        width={barWidth}
        value={progressWithOnComplete}
        maxValue={100}
        backgroundColor="#dc6286"
        onComplete={() => {
          Alert.alert('Hey!', 'onComplete event fired!');
        }}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonInner}>
          <Button
            title="Increase 20%"
            onPress={() => increase(20)}
          />
        </View>
      </View>
    </View>
  );
};

export default ProgessBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 15,
  },
  buttonContainer: {
    marginTop: 15,
  },
});
