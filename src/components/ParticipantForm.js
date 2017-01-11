import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, InputNoLabel } from './common';
import { participantUpdate } from '../actions';

class ParticipantForm extends Component { 
  render() {
    return (
      <View>
        <CardSection>
          <InputNoLabel
            placeholder='First Name'
            value={this.props.firstname}
            onChangeText={(text) => this.props.participantUpdate(
              { prop: 'firstname', value: text }
              )}
          />
        </CardSection>

        <CardSection>
          <InputNoLabel
            placeholder='Last Name'
            value={this.props.lastname}
            onChangeText={(text) => this.props.participantUpdate({ prop: 'lastname', value: text })}
          />
        </CardSection>

        <CardSection>
          <InputNoLabel
            placeholder='phone number'
            value={this.props.phone}
            onChangeText={(text) => this.props.participantUpdate({ prop: 'phone', value: text })}
          />
        </CardSection>

        <CardSection>
          <InputNoLabel
            placeholder='Email'
            value={this.props.email}
            onChangeText={(text) => this.props.participantUpdate({ prop: 'email', value: text })}
          />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { firstname, lastname, phone, email } = state.participant;

  console.log(state.participant);

  return { firstname, lastname, phone, email };
};

export default connect(mapStateToProps, { participantUpdate })(ParticipantForm);
