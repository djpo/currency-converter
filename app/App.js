import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppPres from './AppPres';

const mapStateToProps = state => ({
  currencies: state.rates.map(single => single.currency),
  fromCurrency: state.fromCurrency,
  toCurrency: state.toCurrency,
  amountToConvert: state.amountToConvert,
  amountConverted: state.amountConverted,
});

const mapDispatchToProps = dispatch => ({
  updateInputAmount: (newText) => {
    dispatch({ type: 'UPDATE_INPUT_AMOUNT', newText: newText });
  },
  updateFromCurrency: (newVal) => {
    dispatch({ type: 'UPDATE_FROM_CURRENCY', newVal: newVal });
  },
  pressConvert: () => {
    dispatch({ type: 'CONVERT' });
  },
});

const propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fromCurrency: PropTypes.string.isRequired,
  toCurrency: PropTypes.string.isRequired,
  amountToConvert: PropTypes.string.isRequired,
  amountConverted: PropTypes.string.isRequired,
  updateInputAmount: PropTypes.func.isRequired,
  updateFromCurrency: PropTypes.func.isRequired,
  pressConvert: PropTypes.func.isRequired,
};

const App = props => (
  <AppPres {...props} />
);

App.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
