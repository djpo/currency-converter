import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TextInput,
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
  updateTextInput: PropTypes.func.isRequired,
};

const AppPres = props => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>
        currency converter
      </Text>
    </View>
    <View style={styles.body}>
      <Text style={styles.rowLabel}>FROM</Text>
      <View style={styles.row}>
        <View style={styles.currencySelector}>
          <Text style={styles.currencyLabel}>{props.fromCurrency}</Text>
        </View>
        <TextInput
          style={styles.amountInput}
          value={props.amountToConvert}
          onChangeText={newText => props.updateTextInput(newText)}
          placeholder="123.45"
          autoCorrect={false}
          keyboardType="numeric"
          returnKeyType="done"
          blurOnSubmit
        />
      </View>
      <Text style={styles.rowLabel}>TO</Text>
      <View style={styles.row}>
        <View style={styles.currencySelector}>
          <Text style={styles.currencyLabel}>{props.toCurrency}</Text>
        </View>
        <Text style={styles.amountOutput}>{props.amountConverted}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(204,229,211,0.3)',
  },
  header: {
    marginBottom: 30,
    paddingTop: 20,
    backgroundColor: 'rgb(124,165,184)',
  },
  headerText: {
    margin: 15,
    marginLeft: 20,
    fontSize: 25,
    color: 'white',
  },
  body: {},
  rowLabel: {
    marginBottom: 5,
    marginLeft: 20,
    fontSize: 12,
    color: 'rgb(39,65,94)',
  },
  row: {
    marginBottom: 30,
    flexDirection: 'row',
  },
  currencySelector: {
    marginLeft: 20,
    marginRight: 30,
    backgroundColor: 'rgb(174,209,167)',
    padding: 10,
  },
  currencyLabel: {
    fontSize: 18,
    color: 'white',
  },
  amountInput: {
    width: 120,
    backgroundColor: 'white',
    fontSize: 18,
    padding: 10,
    textAlign: 'right',
  },
  amountOutput: {
    width: 120,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'right',
    fontSize: 18,
    color: 'rgb(39,65,94)',
  },
});

AppPres.propTypes = propTypes;
export default AppPres;
