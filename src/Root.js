import React, {Component} from 'react';
import {View, Text} from 'react-native';
import SignIn from "./components/auth/SignIn";
import Hello from "./components/Hello";

class Root extends Component {
  render() {
    return (
      <View>
        <Hello/>
        <SignIn/>
      </View>
    )
  }
}

export default Root;