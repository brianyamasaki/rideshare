import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, InputNoLabel, Button, Spinner, ErrorMessage } from './common';
import { 
  createAccountEmailChange,
  createAccountPasswordChange,
  createAccountConfirmPasswordChange,
  createAccountSubmit,
  createAccountCancel
} from '../actions';

class CreateAccount extends Component {
  componentWillUnmount() {
    this.props.createAccountCancel();
  }

  onEmailChange(email) {
    this.props.createAccountEmailChange(email);
  }

  onPasswordChange(password) {
    this.props.createAccountPasswordChange(password);
  }

  onConfirmPasswordChange(password) {
    this.props.createAccountConfirmPasswordChange(password);
  }

  renderButton() {
    const { loading, email, password } = this.props;
    if (loading) {
      return <Spinner size='large' />;
    }
    return (
      <Button onPress={() => this.props.createAccountSubmit(email, password)}>
        Create Account
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <InputNoLabel
            placeholder="email"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <InputNoLabel
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            secureTextEntry
          />
        </CardSection>
        
        <CardSection>
          <InputNoLabel
            placeholder="confirm password"
            onChangeText={this.onConfirmPasswordChange.bind(this)}
            value={this.props.confirmPassword}
            secureTextEntry
          />
        </CardSection>

        <ErrorMessage>
          {this.props.errorMsg}
        </ErrorMessage>

        <CardSection>        
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { email, password, confirmPassword, errorMsg, loading } = state.createAccount;

  return { email, password, confirmPassword, errorMsg, loading };
};

export default connect(mapStateToProps, 
{ 
  createAccountEmailChange,
  createAccountPasswordChange,
  createAccountConfirmPasswordChange,
  createAccountSubmit,
  createAccountCancel
}
)(CreateAccount);
