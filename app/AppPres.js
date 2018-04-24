import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import styles from './AppStyles';

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
  pressConvert: PropTypes.func.isRequired,
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
        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor="rgb(39,65,94)"
          style={styles.goButton}
          onPress={props.pressConvert}
        >
          <Text style={styles.goButtonText}>=</Text>
        </TouchableHighlight>
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

AppPres.propTypes = propTypes;
export default AppPres;
