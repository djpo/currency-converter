import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const LoadingLayer = () => (
  <View style={styles.screenContainer}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>Loading today's exchange rates...</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  screenContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(220,220,220,0.7)',
    padding: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(50,50,50,0.5)',
    padding: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
  },
});

export default LoadingLayer;
