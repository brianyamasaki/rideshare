import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ParticipantForm from './ParticipantForm.js';
import { participantUpdate, participantSave } from '../actions';
import { Card, CardSection, Button } from './common';

class ParticipantEdit extends Component {
  componentWillMount() {
    _.each(this.props.participant, (value, prop) => {
      this.props.participantUpdate({ prop, value });
    });
  }

  onSaveChanges() {
    const { firstname, lastname, phone, email } = this.props;
    console.log(firstname, lastname, phone, email);
    this.props.participantSave({ 
      firstname, 
      lastname, 
      phone, 
      email, 
      id: this.props.participant.id 
    });
  }

  render() {
    return (
      <Card>
        <ParticipantForm />

        <CardSection>
          <Button onPress={this.onSaveChanges.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { firstname, lastname, phone, email, id } = state.participant;
  console.log(firstname, lastname, phone, email, id);

  return { firstname, lastname, phone, email, id };
};

export default connect(mapStateToProps, { participantUpdate, participantSave })(ParticipantEdit);
