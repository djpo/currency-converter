import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchRates from './thunks/fetchRates';
import AppPres from './AppPres';

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  currencies: state.rates.map(single => single.currency),
  fromCurrency: state.fromCurrency,
  toCurrency: state.toCurrency,
  amountToConvert: state.amountToConvert,
  amountConverted: state.amountConverted,
});

const mapDispatchToProps = dispatch => ({
  fetchRates: () => {
    dispatch(fetchRates());
  },
  updateInputAmount: (newText) => {
    dispatch({ type: 'UPDATE_INPUT_AMOUNT', newText: newText });
  },
  updateFromCurrency: (newVal) => {
    dispatch({ type: 'UPDATE_FROM_CURRENCY', newVal: newVal });
  },
  updateToCurrency: (newVal) => {
    dispatch({ type: 'UPDATE_TO_CURRENCY', newVal: newVal });
  },
  pressConvert: () => {
    dispatch({ type: 'CONVERT' });
  },
});

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fromCurrency: PropTypes.string.isRequired,
  toCurrency: PropTypes.string.isRequired,
  amountToConvert: PropTypes.string.isRequired,
  amountConverted: PropTypes.string.isRequired,
  fetchRates: PropTypes.func.isRequired,
  updateInputAmount: PropTypes.func.isRequired,
  updateFromCurrency: PropTypes.func.isRequired,
  updateToCurrency: PropTypes.func.isRequired,
  pressConvert: PropTypes.func.isRequired,
};

class App extends Component {
  componentDidMount() {
    this.props.fetchRates();
  }
  render() {
    return (
      <AppPres // passing down everything except 'fetchRates'
        isLoading={this.props.isLoading}
        currencies={this.props.currencies}
        fromCurrency={this.props.fromCurrency}
        toCurrency={this.props.toCurrency}
        amountToConvert={this.props.amountToConvert}
        amountConverted={this.props.amountConverted}
        updateInputAmount={this.props.updateInputAmount}
        updateFromCurrency={this.props.updateFromCurrency}
        updateToCurrency={this.props.updateToCurrency}
        pressConvert={this.props.pressConvert}
      />
    );
  }
}

App.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
