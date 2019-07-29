import React from 'react';
import { Text, Modal, StyleSheet, View, ActivityIndicator } from 'react-native';

const Splash = () => {
  return (
    <Modal>
      <View style={styles.container}>
        <ActivityIndicator size='large' color='#dc6286' />
      </View>
    </Modal>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f2efed',
    height: '100%',
  },
});

export default Splash;