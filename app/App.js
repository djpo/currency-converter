import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  foo: state.foo,
});

const propTypes = {
  foo: PropTypes.string.isRequired,
};

const App = props => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Dummy text #1
    </Text>
    <Text style={styles.instructions}>
      foo: {props.foo}
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

App.propTypes = propTypes;
export default connect(
  mapStateToProps,
)(App);
