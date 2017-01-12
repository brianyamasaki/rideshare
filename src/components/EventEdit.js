import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventForm from './EventForm';
import { eventUpdate, eventSave } from '../actions';
import { Card, CardSection, Button } from './common';

class EventEdit extends Component { 
  componentWillMount() {
    console.log(this.props.event);
    _.each(this.props.event, (value, prop) => {
      this.props.eventUpdate({ prop, value });
    });
  }

  onSaveChanges() {
    const { name, description, date } = this.props;
    this.props.eventSave({ 
      name,
      description,
      date,
      id: this.props.event.id 
    });
  }

  render() {
    return (
      <Card>
        <EventForm />

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
  const { name, description, date } = state.event;

  return { name, description, date };
};

export default connect(mapStateToProps, { eventUpdate, eventSave })(EventEdit);
