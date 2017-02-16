/*********************************************************************
  ForgotPassword.js
  Sends the user a password reset email.  Email is generated by
  Firebase.  We just need to supply the email address.
*********************************************************************/
import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from '../common';
import {
  emailChanged,
  emailPasswordReset,
  resetAuthErrorState,
} from '../../actions';

class ForgotPassword extends Component {
  
  componentWillMount() {
    this.props.resetAuthErrorState();
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onResetPasswordButtonPress() {
    const { email } = this.props;
    console.log('ForgotPassword.js ', this.props.email);
    this.props.emailPasswordReset(email);
  }

  render() {
    return (
      <Card>
        <Text>If the email address you enter is registered, you'll received link sent to that email address to to reset your password.</Text>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@domain.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onResetPasswordButtonPress.bind(this)}>
            Send Password Reset
          </Button>
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
};

const mapStateToProps = ({ auth }) => {
  const { email, error } = auth;
  return { email, error };
};

export default connect(mapStateToProps, {
  emailChanged,
  emailPasswordReset,
  resetAuthErrorState
})(ForgotPassword);
