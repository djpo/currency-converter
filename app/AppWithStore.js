import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './redux/appReducer';
import App from './App';

const store = createStore(appReducer);

export default class AppWithStore extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
