import React from 'react';
import PropTypes from 'prop-types';
import {
  Picker,
  Platform,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import LoadingLayer from './components/LoadingLayer';
import styles from './AppStyles';

const platformSelectionColor = (Platform.OS === 'android')
  ? 'rgba(174,209,167,0.3)' // android
  : 'rgb(174,209,167)' // ios
;

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fromCurrency: PropTypes.string.isRequired,
  toCurrency: PropTypes.string.isRequired,
  amountToConvert: PropTypes.string.isRequired,
  amountConverted: PropTypes.string.isRequired,
  updateInputAmount: PropTypes.func.isRequired,
  updateFromCurrency: PropTypes.func.isRequired,
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
        <ModalSelector
          selectStyle={styles.currencySelector}
          selectTextStyle={styles.currencyLabel}
          data={props.currencies.map(currency => ({ key: currency, label: currency }))}
          initValue={props.fromCurrency}
          onChange={option => props.updateFromCurrency(option.label)}
          animationType="fade"
        />
        <TextInput
          style={styles.amountInput}
          value={props.amountToConvert}
          onChangeText={newText => props.updateInputAmount(newText)}
          placeholder="123.45"
          selectionColor={platformSelectionColor}
          underlineColorAndroid="transparent" // android only
          autoCorrect={false}
          keyboardType="numeric"
          returnKeyType="done"
          blurOnSubmit
        />
      </View>

      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor="rgba(124,165,184,0.5)"
        style={styles.goButton}
        onPress={props.pressConvert}
      >
        <Text style={styles.goButtonText}>=</Text>
      </TouchableHighlight>

      <Text style={styles.rowLabel}>TO</Text>
      <View style={styles.row}>
        <ModalSelector
          selectStyle={styles.currencySelector}
          selectTextStyle={styles.currencyLabel}
          data={props.currencies.map(currency => ({ key: currency, label: currency }))}
          initValue={props.toCurrency}
          onChange={option => props.updateToCurrency(option.label)}
          animationType="fade"
        />
        <View style={styles.amountOutputContainer}>
          <Text style={styles.amountOutputText}>{props.amountConverted}</Text>
        </View>
      </View>

    </View>
    {props.isLoading ? <LoadingLayer /> : null}
  </View>
);

AppPres.propTypes = propTypes;
export default AppPres;
