import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView, Alert } from 'react-native';
import { connect } from 'react-redux';
import ParticipantForm from './ParticipantForm.js';
import { participantUpdate, participantSave, participantDelete } from '../actions';
import { Card, CardSection, Button } from './common';

class ParticipantEdit extends Component {
  componentWillMount() {
    _.each(this.props.participant, (value, prop) => {
      this.props.participantUpdate({ prop, value });
    });
  }

  onSaveChanges() {
    const { firstname, lastname, phone, email } = this.props;
    this.props.participantSave({ 
      firstname, 
      lastname, 
      phone, 
      email, 
      id: this.props.participant.id 
    });
  }

  onDelete() {
    Alert.alert(
      'Really Delete Participant?',
      'Do you really want to delete this car permanently?',
      [
        {
          text: 'Delete',
          onPress: () => this.props.participantDelete({ id: this.props.participant.id })
        },
        {
          text: 'Cancel',
          onPress: () => console.log('delete cancelled'),
          style: 'cancel'
        }
      ]
    );
  }

  render() {
    return (
      <ScrollView>
        <Card>
          <ParticipantForm />

          <CardSection>
            <Button onPress={this.onSaveChanges.bind(this)}>
              Save Changes
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onDelete.bind(this)}>
              Delete Participant
            </Button>
          </CardSection>
        </Card>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { firstname, lastname, phone, email, id } = state.participant;

  return { firstname, lastname, phone, email, id };
};

export default connect(mapStateToProps, 
{ participantUpdate, participantSave, participantDelete }
)(ParticipantEdit);
