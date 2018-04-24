import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppPres from './AppPres';

const mapStateToProps = state => ({
  fromCurrency: state.fromCurrency,
  toCurrency: state.toCurrency,
  amountToConvert: state.amountToConvert,
  amountConverted: state.amountConverted,
  rates: state.rates,
});

const mapDispatchToProps = dispatch => ({
  updateTextInput: (newText) => {
    dispatch({ type: 'UPDATE_TEXT_INPUT', newText: newText });
  },
  pressConvert: () => {
    dispatch({ type: 'CONVERT' });
  },
});

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

const App = props => (
  <AppPres {...props} />
);

App.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
