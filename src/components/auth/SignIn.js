import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  render() {
    const {email, password} = this.state;
    return (
      <View>
        <Text style={styles.header}>Please Sign In!</Text>
        <Text>Email: </Text>
        <TextInput value={email}
                   onChangeText={this.setEmail}
                   keyboardType='email-address'/>
        <Text>Password: </Text>
        <TextInput value={password}
                   onChangeText={this.setPassword}
                   secureTextEntry/>
      </View>
    );
  }

  setPassword = password => this.setState({password});
  setEmail = email => this.setState({email});
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    ...Platform.select({
      ios: {
        borderBottomColor: '#000',
        borderBottomWidth: 1
      },
      android: {

      }
    })
  }
});

export default SignIn;
