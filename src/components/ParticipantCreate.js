import React, { Component } from 'react';
import { connect } from 'react-redux';
import { participantCreate } from '../actions';
import ParticipantForm from './ParticipantForm';
import { Card, CardSection, Button } from './common';

class ParticipantCreate extends Component {

  onButtonPress() {
    const { firstname, lastname, phone, email } = this.props;

    this.props.participantCreate({ firstname, lastname, phone, email });
  }

  render() {
    return (
      <Card>
        <ParticipantForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { firstname, lastname, phone, email } = state.participant;

  return { firstname, lastname, phone, email };
};

export default connect(mapStateToProps, { participantCreate })(ParticipantCreate);
