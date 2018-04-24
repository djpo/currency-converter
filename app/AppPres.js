import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const propTypes = {
  fromCurrency: PropTypes.string.isRequired,
  toCurrency: PropTypes.string.isRequired,
  amountToConvert: PropTypes.string.isRequired,
  amountConverted: PropTypes.string.isRequired,
  rates: PropTypes.arrayOf(
    PropTypes.shape({
      currency: PropTypes.string.isRequired,
      rate: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const AppPres = props => (
  <View style={styles.container}>
    <Text style={styles.testText}>
      {props.fromCurrency}: {props.amountToConvert}
    </Text>

    <Text style={styles.testText}>
      {props.toCurrency}: {props.amountConverted}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  testText: {
    margin: 10,
    fontSize: 20,
  },
});

AppPres.propTypes = propTypes;
export default AppPres;
