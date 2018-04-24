import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import appReducer from './redux/appReducer';
import App from './App';

const store = createStore(
  appReducer,
  applyMiddleware(thunk),
);

export default class AppWithStore extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
