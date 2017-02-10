import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView, Alert } from 'react-native';
import { connect } from 'react-redux';
import EventForm from './EventForm';
import { eventUpdate, eventSave, eventDelete } from '../actions';
import { Card, CardSection, Button } from './common';

class EventEdit extends Component { 
  componentWillMount() {
    _.each(this.props.event, (value, prop) => {
      this.props.eventUpdate({ prop, value });
    });
  }

  onSaveChanges() {
    const { 
      id, 
      name, 
      description, 
      date, 
      cars, 
      participants,
      location
    } = this.props;

    this.props.eventSave({ 
      name,
      description,
      date,
      cars,
      participants,
      location,
      id
    });
  }

  onDelete() {
    Alert.alert(
      'Really Delete Event?',
      'Do you really want to delete this event permanently?',
      [
        {
          text: 'Delete',
          onPress: () => this.props.eventDelete({ id: this.props.event.id })
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
          <EventForm {...this.props} />

          <CardSection>
            <Button onPress={this.onSaveChanges.bind(this)}>
              Save Changes
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onDelete.bind(this)}>
              Delete Event
            </Button>
          </CardSection>
        </Card>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { id, name, description, date, cars, participants, location } = state.event;

  return { 
    id, 
    name, 
    description, 
    date, 
    cars, 
    participants,
    location
   };
};

export default connect(mapStateToProps, { eventUpdate, eventSave, eventDelete })(EventEdit);
