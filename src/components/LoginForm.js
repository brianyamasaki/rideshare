import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { 
  Card, 
  CardSection, 
  InputNoLabel, 
  Button, 
  Spinner, 
  AnchorText, 
  ErrorMessage 
} from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  autoLogin() {
    this.onEmailChange('test@test.com');
    this.onPasswordChange('foobar1');
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <TouchableWithoutFeedback onPress={this.autoLogin.bind(this)}>
          <Image source={require('../assets/rideshare.png')} style={styles.iconStyle} />
        </TouchableWithoutFeedback>
        <CardSection>
          <InputNoLabel
            placeholder="email"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <InputNoLabel 
            secureTextEntry
            placeholder='password'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <ErrorMessage>
          {this.props.errorMsg}
        </ErrorMessage>

        <CardSection>
          {this.renderButton()}
        </CardSection>

        <CardSection>
          <AnchorText onPress={() => Actions.createAccount()}>
            Create an account
          </AnchorText>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  iconStyle: {
    alignSelf: 'center',
    height: 70,
    width: 80,
    marginVertical: 10,
  }
};

const mapStateToProps = (state) => {
  const { email, password, errorMsg, loading } = state.auth;
  return {
    email,
    password,
    errorMsg,
    loading
  };
};

export default connect(mapStateToProps, { 
  emailChanged, passwordChanged, loginUser
})(LoginForm);
