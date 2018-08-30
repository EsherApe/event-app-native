import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

class Hello extends Component {
  render() {
    return (
      <View>
        <Text>Hello Ios!</Text>
      </View>
    );
  }
}

Hello.propTypes = {};
Hello.defaultProps = {};

export default Hello;
