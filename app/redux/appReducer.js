import initialState from './initialState';

function convert(amount, fromRate, toRate) {
  amount = parseFloat(amount) || 0;
  fromRate = parseFloat(fromRate);
  toRate = parseFloat(toRate);

  const inputInEuros = amount / fromRate;
  const outputInTarget = inputInEuros * toRate;
  const outputTwoDecimals = outputInTarget.toFixed(2);

  return outputTwoDecimals.toString();
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {

    case 'UPDATE_INPUT_AMOUNT':
      return { ...state,
        amountToConvert: action.newText,
      };

    case 'UPDATE_FROM_CURRENCY':
      return { ...state,
        fromCurrency: action.newVal,
      };

    case 'CONVERT':
      const amount = state.amountToConvert;
      const fromRate = state.rates.find(single => single.currency === state.fromCurrency).rate;
      const toRate = state.rates.find(single => single.currency === state.toCurrency).rate;

      return { ...state,
        amountConverted: convert(amount, fromRate, toRate),
      };

    default:
      return state;
  }
}
